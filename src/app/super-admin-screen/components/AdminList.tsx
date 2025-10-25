"use client";
import { useState } from "react";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

type Admin = {
  id: number;
  name: string;
  phone: string;
  church: string;
  date: string;
  avatar?: string;
};

const mockAdmins: Admin[] = [
  { id: 1, name: "Дуламсүрэн", phone: "94112725", church: "Зүүн чуулган", date: "2025-01-20 13:12:00", avatar: "/avatars/1.jpg" },
  { id: 2, name: "Отгонбаяр", phone: "94112725", church: "Налайх чуулган", date: "2025-01-20 13:12:00", avatar: "/avatars/2.jpg" },
  { id: 3, name: "Бямбаа", phone: "94112725", church: "Налайх чуулган", date: "2025-01-20 13:12:00", avatar: "/avatars/3.jpg" },
  { id: 4, name: "Хулан", phone: "94112725", church: "Төв чуулган", date: "2025-01-20 13:12:00", avatar: "/avatars/4.jpg" },
  { id: 5, name: "Ичинхорлоо", phone: "94112725", church: "Төв чуулган", date: "2025-01-20 13:12:00", avatar: "/avatars/5.jpg" },
];

export default function AdminList() {
  const [search, setSearch] = useState("");

  const filtered = mockAdmins.filter((a) =>
    [a.name, a.phone].some((v) => v.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Админ жагсаалт</h1>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Нэр, утас"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left">Нэр</th>
              <th className="px-4 py-2 text-left">Утас</th>
              <th className="px-4 py-2 text-left">Чуулган</th>
              <th className="px-4 py-2 text-left">Бүртгүүлсэн огноо</th>
              <th className="px-4 py-2 text-center">Үйлдэл</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={a.avatar || "/default-avatar.png"}
                      alt={a.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {a.name}
                </td>
                <td className="px-4 py-2">{a.phone}</td>
                <td className="px-4 py-2">{a.church}</td>
                <td className="px-4 py-2">{a.date}</td>
                <td className="px-4 py-2 text-center flex justify-center gap-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <Pencil size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-600 border-t">
          <span>1–10</span>
          <div className="flex gap-2">
            <button className="px-2 py-1 border rounded hover:bg-gray-100">Өмнөх</button>
            <button className="px-2 py-1 border rounded bg-blue-500 text-white">1</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">2</button>
            <button className="px-2 py-1 border rounded hover:bg-gray-100">Дараагийнх</button>
          </div>
          <span>2 / хуудас</span>
        </div>
      </div>
    </div>
  );
}
