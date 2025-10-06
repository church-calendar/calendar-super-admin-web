"use client";
import { useMemo, useState } from "react";
import type { AdminRow } from "../super-admin-screen/type/admin";
import Sidebar from "../super-admin-screen/components/Sidebar";
import Topbar from "../super-admin-screen/components/Topbar";
import SearchAddBar from "../super-admin-screen/components/Searchaddbar";
import AdminTable from "../super-admin-screen/components/AdminTable";
import LogoutFab from "../super-admin-screen/components/LogoutFab";

export default function SuperAdminListPage() {
  const allAdmins: AdminRow[] = useMemo(() => ([
    { id:"1", name:"Дуламсүрэн", phone:"94112725", district:"Баянгол", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/1.jpg" },
    { id:"2", name:"Отгонбаяр", phone:"94112725", district:"Хан-Уул", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/2.jpg" },
    { id:"3", name:"Бямбаа", phone:"94112725", district:"Налайх", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/3.jpg" },
    { id:"4", name:"Хулан", phone:"94112725", district:"Баянзүрх", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/4.jpg" },
    { id:"5", name:"Ичинхорлоо", phone:"94112725", district:"Сонгино-Хайрхан", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/5.jpg" },
    { id:"6", name:"Алтанцэцэг", phone:"94112725", district:"Чингэлтэй", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/6.jpg" },
    { id:"7", name:"Батбаяр", phone:"94112725", district:"Сүхбаатар", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/7.jpg" },
    { id:"8", name:"Батбаяр", phone:"94112725", district:"Сүхбаатар", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/8.jpg" },
    { id:"9", name:"Энхжин", phone:"94112725", district:"—", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/9.jpg" },
    { id:"10", name:"Оюунчимэг", phone:"94112725", district:"—", createdAt:"2025-01-20 13:12:00", avatar:"/avatars/10.jpg" },
  ]), []);

  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Topbar />
          <main className="px-6 py-8">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-[32px] leading-9 font-[600] mb-6">Админ жагсаалт</h1>

              <div className="rounded-2xl border border-slate-200 shadow-sm">
                <SearchAddBar query={query} setQuery={(v)=>setQuery(v)} onAdd={() => alert("➕ Нэмэх")} />
                <AdminTable rowsAll={allAdmins} query={query} />
              </div>
            </div>
          </main>
        </div>
      </div>

      <LogoutFab />
    </div>
  );
}
