"use client";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-56 border-r min-h-screen flex-col border-gray-200">
      <div className="px-4 py-4">
        <div className="flex justify-center">
          <Image src="/bird.png" alt="logo" width={59} height={55} priority />
        </div>
        <div className="my-4">
          <hr className="w-full border-t border-gray-200" />
        </div>

        <nav className="mt-2">
          <a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white font-medium bg-gradient-to-r from-[#0077FF] to-[#00AFFF]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M10 20H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
              <rect x="10" y="3" width="11" height="18" rx="2" />
            </svg>
            Админ
          </a>

          <a className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4V21a2 2 0 1 1-4 0v-1.6" />
            </svg>
            Тохиргоо
          </a>
        </nav>
      </div>
    </aside>
  );
}
