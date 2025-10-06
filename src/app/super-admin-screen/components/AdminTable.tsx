"use client";
import { useMemo, useState } from "react";
import type { AdminRow } from "../type/admin";

type Props = {
  rowsAll: AdminRow[];
  query: string;
};

export default function AdminTable({ rowsAll, query }: Props) {
  const filtered = useMemo(
    () => rowsAll.filter(r => r.name.toLowerCase().includes(query.toLowerCase()) || r.phone.includes(query)),
    [rowsAll, query]
  );

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const rows = filtered.slice(start, start + pageSize);

  const handleEdit = (id: string) => alert(`✏️ Засах #${id}`);
  const handleDelete = (id: string) => confirm("Устгах уу?") && alert(`🗑️ Устгалаа #${id}`);

  return (
    <div className="rounded-2xl border border-slate-200 shadow-sm">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-slate-500 bg-white">
            <tr className="border-b">
              {["Нэр", "Утас", "Дүүрэг", "Бүртгүулсэн огноо", "Үйлдэл"].map((h, i) => (
                <th key={h} className={`py-2 ${i === 0 ? "pl-6 pr-4" : i === 4 ? "pl-4 pr-6" : "px-4"} text-left font-medium`}>
                  {h}
                  {i < 4 && (
                    <svg className="inline ml-1 h-4 w-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 7h6l-3 4-3-4Z" />
                    </svg>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t hover:bg-slate-50">
                <td className="py-3 pl-6 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full overflow-hidden ring-1 ring-slate-200">
                      <img src={r.avatar || "/avatars/placeholder.png"} alt={r.name} className="h-full w-full object-cover" />
                    </div>
                    <span className="font-medium">{r.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-slate-700">{r.phone}</td>
                <td className="py-3 px-4">{r.district}</td>
                <td className="py-3 px-4">{r.createdAt}</td>
                <td className="py-3 pl-4 pr-6">
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleEdit(r.id)} className="p-1.5 rounded hover:bg-slate-100" aria-label="Засах">
                      <svg className="h-4 w-4 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                      </svg>
                    </button>
                    <button onClick={() => handleDelete(r.id)} className="p-1.5 rounded hover:bg-slate-100" aria-label="Устгах">
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
              <tr><td colSpan={5} className="py-10 text-center text-slate-500">Илэрц алга.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-sm">
        <div className="text-slate-500">
          {rows.length > 0 ? `${start + 1}-${start + rows.length}` : "0"} / {filtered.length}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  className="rounded-lg border px-3 py-1.5 disabled:opacity-50 flex items-center gap-1">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m15 18-6-6 6-6"/></svg>
            Өмнөх
          </button>
          <input type="number" min={1} max={totalPages} value={page}
                 onChange={(e) => {
                   const v = Number(e.target.value || 1);
                   setPage(Math.min(totalPages, Math.max(1, v)));
                 }}
                 className="w-14 h-9 rounded-lg border px-2 text-center" />
          <span>/ {totalPages}</span>
          <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="rounded-lg border px-3 py-1.5 disabled:opacity-50 flex items-center gap-1">
            Дараагийнх
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          <select className="ml-2 h-9 rounded-lg border px-2 bg-white" disabled>
            <option>2 / хуудас</option>
          </select>
        </div>
      </div>
    </div>
  );
}
