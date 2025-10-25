"use client";
import { useState } from "react";
import Sidebar from "../super-admin-screen/components/Sidebar";
import Topbar from "../super-admin-screen/components/Topbar";
import ChurchesUI from "../super-admin-screen/components/ChurchesUI";
import LogoutFab from "../super-admin-screen/components/LogoutFab";
import AdminUI from "./components/AdminUI";

export default function SuperAdminListPage() {
  // ✅ now includes 'admin'
  const [active, setActive] = useState<"admin" | "church" | "settings">("admin");

  return (
    <div className="h-screen flex bg-white text-slate-800">
      {/* Sidebar (fixed, non-scrollable) */}
      <div className="w-56 flex-shrink-0 border-r border-gray-200">
        <Sidebar active={active} onSelect={setActive} />
      </div>

      {/* Main content area (scrollable) */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto px-6 py-8">
          {active === "admin" && <AdminUI />} {/* ✅ Admin section */}
          {active === "church" && <ChurchesUI />}
          {active === "settings" && (
            <>
              <h1 className="text-[32px] leading-9 font-[600] mb-6">Тохиргоо</h1>
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="text-slate-600">Энд тохиргооны хэсгийн контент байрлана.</div>
                <button
                  className="rounded-xl px-4 py-2 bg-gradient-to-r from-[#0077FF] to-[#00AFFF] text-white"
                  onClick={() => alert("Тохиргоо хадгаллаа")}
                >
                  Хадгалах
                </button>
              </div>
            </>
          )}
        </main>
      </div>

      {/* Floating logout button */}
      <LogoutFab />
    </div>
  );
}
