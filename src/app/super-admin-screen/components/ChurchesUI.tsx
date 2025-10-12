"use client";
import { useEffect, useMemo, useState } from "react";
import {
  getChurches,
  createChurch,
  addAdmin,
  type Church,
} from "@/lib/fakeApi";
import { ChevronLeft, ChevronRight, Plus } from "./Icons";
import { Modal } from "./Modals";
import ChurchCard from "./ChurchCard";

export default function ChurchesUI() {
  const [churches, setChurches] = useState<Church[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [addOpen, setAddOpen] = useState(false);
  const [newC, setNewC] = useState({
    name: "",
    country: "Монгол",
    city: "Улаанбаатар",
    cover: "/covers/1.jpg",
    status: "active" as const,
  });
  const [addAdmOpen, setAddAdmOpen] = useState<null | string>(null);
  const [adm, setAdm] = useState({
    name: "",
    role: "Админ",
    email: "",
    avatar: "/avatars/10.jpg",
  });
  const pageSize = 6;

  useEffect(() => {
    getChurches().then(setChurches);
  }, []);

  const filtered = useMemo(
    () =>
      churches.filter((c) =>
        (c.name + c.city + c.country)
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [churches, query]
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  async function handleAddChurch() {
    if (!newC.name.trim()) return;
    const c = await createChurch(newC);
    setChurches([c, ...churches]);
    setAddOpen(false);
    setNewC({
      name: "",
      country: "Монгол",
      city: "Улаанбаатар",
      cover: "/covers/1.jpg",
      status: "active",
    });
  }

  async function handleAddAdmin(id: string) {
    if (!adm.name || !adm.email) return;
    const updated = await addAdmin(id, adm);
    setChurches((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
    setAddAdmOpen(null);
    setAdm({ name: "", role: "Админ", email: "", avatar: "/avatars/10.jpg" });
  }

  return (
    <div className="space-y-4">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="relative w-72">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search churches..."
            className="w-full rounded-xl border px-3 py-2 pl-9 text-sm outline-none focus:ring-2 focus:ring-sky-200"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-slate-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <circle cx="11" cy="11" r="7" strokeWidth="2" />
            <path d="m20 20-3-3" strokeWidth="2" />
          </svg>
        </div>
        <button
          onClick={() => setAddOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white bg-gradient-to-r from-[#0077FF] to-[#00AFFF]"
        >
          <Plus /> Чуулган нэмэх
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rows.map((c) => (
          <ChurchCard key={c.id} church={c} onAddAdmin={setAddAdmOpen} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <div>
          {filtered.length === 0
            ? "0"
            : `${(page - 1) * pageSize + 1}-${Math.min(
                page * pageSize,
                filtered.length
              )}`}{" "}
          / {filtered.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-lg border px-3 py-1.5 disabled:opacity-50 flex items-center gap-1"
          >
            <ChevronLeft /> Өмнөх
          </button>
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            min={1}
            max={totalPages}
            className="w-14 rounded-lg border px-2 py-1 text-center"
          />
          <span>/ {totalPages} хуудас</span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-lg border px-3 py-1.5 disabled:opacity-50 flex items-center gap-1"
          >
            Дараагийнх <ChevronRight />
          </button>
        </div>
      </div>

      {/* Add Church Modal */}
      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Чуулган нэмэх"
      >
        <div className="space-y-3">
          <input
            placeholder="Нэр"
            value={newC.name}
            onChange={(e) => setNewC({ ...newC, name: e.target.value })}
            className="w-full rounded-xl border px-3 py-2"
          />
          <input
            placeholder="Хотоо"
            value={newC.city}
            onChange={(e) => setNewC({ ...newC, city: e.target.value })}
            className="w-full rounded-xl border px-3 py-2"
          />
          <input
            placeholder="Зураг (URL)"
            value={newC.cover}
            onChange={(e) => setNewC({ ...newC, cover: e.target.value })}
            className="w-full rounded-xl border px-3 py-2"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setAddOpen(false)}
              className="px-4 py-2 rounded-xl border"
            >
              Болих
            </button>
            <button
              onClick={handleAddChurch}
              className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#0077FF] to-[#00AFFF]"
            >
              Нэмэх
            </button>
          </div>
        </div>
      </Modal>

      {/* Add Admin Modal */}
      <Modal
        open={!!addAdmOpen}
        onClose={() => setAddAdmOpen(null)}
        title="Админ нэмэх"
      >
        <div className="space-y-3">
          <input
            placeholder="Нэр"
            value={adm.name}
            onChange={(e) => setAdm({ ...adm, name: e.target.value })}
            className="w-full rounded-xl border px-3 py-2"
          />
          <input
            placeholder="Имэйл"
            value={adm.email}
            onChange={(e) => setAdm({ ...adm, email: e.target.value })}
            className="w-full rounded-xl border px-3 py-2"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setAddAdmOpen(null)}
              className="px-4 py-2 rounded-xl border"
            >
              Болих
            </button>
            <button
              onClick={() => handleAddAdmin(addAdmOpen!)}
              className="px-4 py-2 rounded-xl text-white bg-gradient-to-r from-[#0077FF] to-[#00AFFF]"
            >
              Нэмэх
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
