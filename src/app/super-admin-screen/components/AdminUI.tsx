import { useState } from "react";
import {
  Pencil,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function AdminUI() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const admins = [
    {
      name: "Дуламсүрэн",
      phone: "94112725",
      church: "Зүүн чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dulamsuren",
    },
    {
      name: "Отгонбаяр",
      phone: "94112725",
      church: "Налайх чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Otgonbayar",
    },
    {
      name: "Бямбаа",
      phone: "94112725",
      church: "Налайх чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Byambaa",
    },
    {
      name: "Хулан",
      phone: "94112725",
      church: "Төв чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Khulan",
    },
    {
      name: "Инжинорлоо",
      phone: "94112725",
      church: "Төв чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Injinorloo",
    },
    {
      name: "Алтанцэцэг",
      phone: "94112725",
      church: "Баганuur чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Altantsetseg",
    },
    {
      name: "Батбаяр",
      phone: "94112725",
      church: "Хархорин чуулган",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Batbayar",
    },
    {
      name: "Батбаяр",
      phone: "94112725",
      church: "",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Batbayar2",
    },
    {
      name: "Энхжин",
      phone: "94112725",
      church: "",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Enkhjin",
    },
    {
      name: "Өсөнчимэг",
      phone: "94112725",
      church: "",
      date: "2025-01-20 13:12:00",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Osonchimeg",
    },
  ];

  const filtered = admins.filter((a) =>
    [a.name, a.phone].some((v) =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen px-35">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          Админ жагсаалт
        </h1>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative max-w-xs">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Нэр, утас"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left px-6 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      Нэр
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </th>
                  <th className="text-left px-6 text-sm font-medium text-gray-700">
                    Утас
                  </th>
                  <th className="text-left px-6 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      Чуулган
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </th>
                  <th className="text-left px-6 text-sm font-medium text-gray-700">
                    <div className="flex items-center gap-2">
                      Бүртгүүлсэн огноо
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </th>
                  <th className="text-right px-6 py-3 text-sm font-medium text-gray-700">
                    Үйлдэл
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((admin, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6">
                      <div className="flex items-center gap-3">
                        <Image
                          src={admin.avatar}
                          alt={admin.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          {admin.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 text-sm text-gray-700">
                      {admin.phone}
                    </td>
                    <td className="px-6 py-2 text-sm text-gray-700">
                      {admin.church}
                    </td>
                    <td className="px-6 py-2 text-sm text-gray-700">
                      {admin.date}
                    </td>
                    <td className="px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                          <Pencil size={18} className="text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                          <Trash2 size={18} className="text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-600">1-10</span>

            <div className="flex items-center gap-2">
              <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-1">
                <ChevronLeft size={16} />
                Өмнөх
              </button>

              <button className="px-3 py-2 text-sm bg-blue-50 text-blue-600 font-medium rounded-md">
                1
              </button>
              <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                2
              </button>

              <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-1">
                Дараагийнх
                <ChevronRight size={16} />
              </button>
            </div>

            <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-1">
              2 / хуудас
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
