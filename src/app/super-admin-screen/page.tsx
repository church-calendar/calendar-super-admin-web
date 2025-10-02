"use client";

import { useMemo, useState } from "react";

type AdminRow = {
  id: string;
  name: string;
  phone: string;
  district: string;
  createdAt: string;
  avatar?: string;
};

export default function SuperAdminListPage() {
  // ---- Mock data (replace with API later) ----
  const allAdmins: AdminRow[] = useMemo(
    () => [
      { id: "1",  name: "Дуламсүрэн", phone: "94112725", district: "Баянгол",         createdAt: "2025-01-20 13:12:00", avatar: "/avatars/1.jpg" },
      { id: "2",  name: "Отгонбаяр",  phone: "94112725", district: "Хан-Уул",         createdAt: "2025-01-20 13:12:00", avatar: "/avatars/2.jpg" },
      { id: "3",  name: "Бямбаа",     phone: "94112725", district: "Налайх",          createdAt: "2025-01-20 13:12:00", avatar: "/avatars/3.jpg" },
      { id: "4",  name: "Хулан",      phone: "94112725", district: "Баянзүрх",        createdAt: "2025-01-20 13:12:00", avatar: "/avatars/4.jpg" },
      { id: "5",  name: "Ичинхорлоо", phone: "94112725", district: "Сонгино-Хайрхан", createdAt: "2025-01-20 13:12:00", avatar: "/avatars/5.jpg" },
      { id: "6",  name: "Алтанцэцэг", phone: "94112725", district: "Чингэлтэй",       createdAt: "2025-01-20 13:12:00", avatar: "/avatars/6.jpg" },
      { id: "7",  name: "Батбаяр",    phone: "94112725", district: "Сүхбаатар",       createdAt: "2025-01-20 13:12:00", avatar: "/avatars/7.jpg" },
      { id: "8",  name: "Батбаяр",    phone: "94112725", district: "Сүхбаатар",       createdAt: "2025-01-20 13:12:00", avatar: "/avatars/8.jpg" },
      { id: "9",  name: "Энхжин",     phone: "94112725", district: "—",               createdAt: "2025-01-20 13:12:00", avatar: "/avatars/9.jpg" },
      { id: "10", name: "Оюунчимэг",  phone: "94112725", district: "—",               createdAt: "2025-01-20 13:12:00", avatar: "/avatars/10.jpg" },
    ],
    []
  );

  const [query, setQuery] = useState("");
  const filtered = allAdmins.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.phone.includes(query)
  );

  // ---- very light mock pagination ----
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const rows = filtered.slice(start, start + pageSize);

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  const handleAdd = () => alert("➕ Нэмэх (hook to create form)");
  const handleEdit = (id: string) => alert(`✏️ Засах #${id}`);
  const handleDelete = (id: string) => {
    if (confirm("Устгах уу?")) alert(`🗑️ Устгалаа #${id}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Top header */}
      <header className="h-14 border-b flex items-center justify-between px-6">
        <div className="flex items-center gap-2 text-sm">
          {/* breadcrumb icon */}
          <svg className="h-5 w-5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="7" r="3" />
            <path d="M5 21a7 7 0 0 1 14 0" />
          </svg>
          <span className="text-slate-500">Админ</span>
          <svg className="h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor"><path d="M7.05 4.55a1 1 0 0 0 0 1.4L10.1 9l-3.05 3.05a1 1 0 1 0 1.4 1.4l3.75-3.75a1 1 0 0 0 0-1.4L8.45 4.55a1 1 0 0 0-1.4 0Z"/></svg>
          <span className="font-medium">Админ</span>
        </div>
        {/* profile circle */}
        <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden">
          <img src="/profile.jpg" alt="me" className="h-full w-full object-cover" />
        </div>
      </header>

      {/* Layout with sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 border-r min-h-[calc(100vh-56px)]">
          <div className="flex flex-col gap-2 p-4">
            {/* Logo */}
            <div className="flex items-center gap-3 px-2 py-3">
              <div className="h-10 w-10 rounded-full overflow-hidden ring-1 ring-slate-200">
                <img src="/logo-dove.png" alt="logo" className="h-full w-full object-cover" />
              </div>
              <div className="text-sm text-slate-700">Чуулганы систем</div>
            </div>

            <nav className="mt-2">
              <a
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm bg-blue-50 text-blue-600 font-medium"
              >
                {/* icon */}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M10 20H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
                  <rect x="10" y="3" width="11" height="18" rx="2" />
                </svg>
                Админ
              </a>

              <a
                href="#"
                className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4V21a2 2 0 1 1-4 0v-1.6a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15H3a2 2 0 1 1 0-4h1.6c.27-.68.1-1.45-.33-1.82l-.06-.06A2 2 0 1 1 7.04 6.3l.06.06c.37.43 1.14.6 1.82.33V5a2 2 0 1 1 4 0v1.6c.68.27 1.45.1 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.43.37-.6 1.14-.33 1.82H21a2 2 0 1 1 0 4h-1.6Z" />
                </svg>
                Тохиргоо
              </a>
            </nav>

            <div className="mt-auto pt-6">
              <button className="w-full text-left text-[13px] text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg px-3 py-2">
                Программнаас гарах
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-semibold mb-6">Админ жагсаалт</h1>

          {/* Search + Add */}
          <div className="rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3 p-4 border-b">
              <div className="relative flex-1">
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Нэр, утас"
                  className="w-full h-[44px] rounded-lg border px-10 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>

              <button
                onClick={handleAdd}
                className="inline-flex items-center gap-2 h-[44px] rounded-lg bg-sky-500 hover:bg-sky-600 text-white px-4"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Нэмэх
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-slate-500">
                  <tr className="border-b">
                    <th className="py-2 pl-6 pr-4 text-left font-medium">Нэр</th>
                    <th className="py-2 px-4 text-left font-medium">Утас</th>
                    <th className="py-2 px-4 text-left font-medium">Дүүрэг</th>
                    <th className="py-2 px-4 text-left font-medium">
                      Бүртгүулсэн огноо
                      <svg className="inline ml-1 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 7h6l-3 4-3-4Z" />
                      </svg>
                    </th>
                    <th className="py-2 pl-4 pr-6 text-left font-medium">Үйлдэл</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, idx) => (
                    <tr key={r.id} className="border-t hover:bg-slate-50">
                      <td className="py-3 pl-6 pr-4">
                        <div className="flex items-center gap-3">
                          <div className="h-7 w-7 rounded-full overflow-hidden ring-1 ring-slate-200">
                            <img
                              src={r.avatar || "/avatars/placeholder.png"}
                              alt={r.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{r.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-700">{r.phone}</td>
                      <td className="py-3 px-4">{r.district}</td>
                      <td className="py-3 px-4">{r.createdAt}</td>
                      <td className="py-3 pl-4 pr-6">
                        <div className="flex items-center gap-3">
                          {/* edit */}
                          <button
                            onClick={() => handleEdit(r.id)}
                            className="p-1.5 rounded hover:bg-slate-100"
                            aria-label="Засах"
                          >
                            <svg className="h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                            </svg>
                          </button>

                          {/* delete */}
                          <button
                            onClick={() => handleDelete(r.id)}
                            className="p-1.5 rounded hover:bg-slate-100"
                            aria-label="Устгах"
                          >
                            <svg className="h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path d="M3 6h18" />
                              <path d="M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6" />
                              <path d="M10 11v6M14 11v6" />
                              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {rows.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-10 text-center text-slate-500">
                        Илэрц алга.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer / Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-sm">
              <div className="text-slate-500">
                {rows.length > 0 ? `${start + 1}-${start + rows.length}` : "0"} / {filtered.length}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={goPrev} disabled={page === 1}
                        className="rounded-lg border px-3 py-1.5 disabled:opacity-50">Өмнөх</button>
                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={page}
                  onChange={(e) => {
                    const v = Number(e.target.value || 1);
                    setPage(Math.min(totalPages, Math.max(1, v)));
                  }}
                  className="w-14 h-9 rounded-lg border px-2 text-center"
                />
                <span>/ {totalPages} хуудас</span>
                <button onClick={goNext} disabled={page === totalPages}
                        className="rounded-lg border px-3 py-1.5 disabled:opacity-50">
                  Дараагийнх
                </button>

                {/* page size dropdown (static for look) */}
                <div className="relative">
                  <select className="ml-2 h-9 rounded-lg border px-2 bg-white">
                    <option>{pageSize} / хуудас</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
