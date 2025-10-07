"use client";
import { useMemo, useState } from "react";
import type { AdminRow } from "../type/admin";

type Props = {
  rowsAll: AdminRow[];
  query: string;
};

export default function AdminTable({ rowsAll, query }: Props) {
  const filtered = useMemo(
    () =>
      rowsAll.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) ||
          r.phone.includes(query)
      ),
    [rowsAll, query]
  );

  const [page, setPage] = useState(1);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const rows = filtered.slice(start, start + pageSize);

  const handleEdit = (id: string) => alert(`✏️ Засах #${id}`);
  const handleDelete = (id: string) =>
    confirm("Устгах уу?") && alert(`🗑️ Устгалаа #${id}`);

  return (
    <div className="rounded-2xl border-slate-200">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-slate-500 bg-white">
            <tr className="bg-[#FAFAFA] h-12">
              {["Нэр", "Утас", "Дүүрэг", "Бүртгүулсэн огноо", "Үйлдэл"].map(
                (h, i) => (
                  <th
                    key={h}
                    className={`py-2 ${
                      i === 0 ? "pl-6 pr-4" : i === 4 ? "pl-4 pr-6" : "px-4"
                    } text-left font-medium text-[#1D2939]`}
                  >
                    {h}
                    {i < 4 && (
                      <svg
                        className="inline ml-1 h-4 w-4 text-slate-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7 7h6l-3 4-3-4Z" />
                      </svg>
                    )}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.id}
                className="border-b border-dashed border-gray-200 hover:bg-slate-100 h-8"
              >
                <td className="py-1.5 pl-6 pr-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full overflow-hidden ring-1 ring-slate-200">
                      <img
                        src={r.avatar || "/avatars/placeholder.png"}
                        alt={r.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-sm">{r.name}</span>
                  </div>
                </td>
                <td className="py-1.5 px-3 text-slate-700 text-sm">
                  {r.phone}
                </td>
                <td className="py-1.5 px-3 text-sm">{r.district}</td>
                <td className="py-1.5 px-3 text-sm">{r.createdAt}</td>
                <td className="py-1.5 pl-3 pr-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(r.id)}
                      className="p-1 rounded hover:bg-slate-100"
                      aria-label="Засах"
                    >
                      <svg
                        className="h-3.5 w-3.5 text-slate-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(r.id)}
                      className="p-1 rounded hover:bg-slate-100"
                      aria-label="Устгах"
                    >
                      <svg
                        className="h-3.5 w-3.5 text-slate-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
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

      {/* Pagination */}
      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-white text-sm">
        {/* Left: range */}
        <div className="text-slate-500">
          {rows.length > 0 ? `${start + 1}-${start + rows.length}` : "0"} /{" "}
          {filtered.length}
        </div>

        {/* Right: controls */}
        <div className="flex items-center gap-3">
          {/* Segmented pager */}
          <div className="inline-flex overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
            {/* Prev */}
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-2 text-slate-700 disabled:opacity-50 hover:bg-slate-50"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Өмнөх
            </button>

            {/* vertical divider */}
            <div className="w-px bg-slate-200" />

            {/* Page numbers (first few) */}
            {Array.from(
              { length: Math.min(totalPages, 5) },
              (_, i) => i + 1
            ).map((n, idx, arr) => (
              <div key={n} className="flex">
                <button
                  onClick={() => setPage(n)}
                  className={`px-3 py-2 ${
                    page === n
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {n}
                </button>
                {/* divider between page pills (except last) */}
                {idx < arr.length - 1 && <div className="w-px bg-slate-200" />}
              </div>
            ))}

            {/* If there are more than 5 pages, show an ellipsis and the last page */}
            {totalPages > 5 && (
              <>
                <div className="w-px bg-slate-200" />
                <span className="px-2 py-2 text-slate-500 select-none">…</span>
                <div className="w-px bg-slate-200" />
                <button
                  onClick={() => setPage(totalPages)}
                  className={`px-3 py-2 ${
                    page === totalPages
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* divider */}
            <div className="w-px bg-slate-200" />

            {/* Next */}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-3 py-2 text-slate-700 disabled:opacity-50 hover:bg-slate-50"
            >
              Дараагийнх
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* Right: “2 / хуудас” pill (looks like a dropdown) */}
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 shadow-sm">
            <span>2 / хуудас</span>
            <svg
              className="h-4 w-4 text-slate-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 7h6l-3 4-3-4Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
