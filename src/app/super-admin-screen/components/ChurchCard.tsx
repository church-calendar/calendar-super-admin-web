"use client";

import { Pin, UserPlus } from "./Icons";
import type { Church } from "@/lib/fakeApi";
import Image from "next/image";

export default function ChurchCard({
  church,
  onAddAdmin,
}: {
  church: Church;
  onAddAdmin: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* cover */}
      <div className="relative">
        <Image
          src="https://blog.cph.org/hubfs/_blogs/CPH_blog/Serve/2023/church-exterior.jpg"
          alt={church.name}
          width={380}
          height={192}
          className="h-40 w-full object-cover rounded-t-2xl"
        />
        {church.status === "pending" && (
          <span className="absolute bottom-2 left-2 rounded-full bg-amber-400 text-amber-900 text-[12px] font-medium px-3 py-1 shadow">
            Хүлээгдэж буй
          </span>
        )}
      </div>

      {/* body */}
      <div className="p-4 space-y-3">
        <div className="text-[18px] font-semibold leading-6">{church.name}</div>

        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Pin className="h-4 w-4 text-slate-400" />
          {church.country}, {church.city}
        </div>

        {/* admins */}
        {church.admins.length === 0 ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-medium text-amber-700">
                Хүлээгдэж буй
              </span>
            </div>
            <p className="mt-1 text-[13px] text-amber-800">
              Энэ чуулганд админ хараахан нэмээгүй байна.
            </p>
          </div>
        ) : (
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-2">
            {/* horizontal scroll list */}
            <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {church.admins.map((a) => (
                <div
                  key={a.id}
                  className="shrink-0 flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2"
                >
                  <Image
                    src={a.avatar || "/avatars/10.jpg"}
                    alt={a.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-[14px] font-medium leading-5">
                      {a.name}
                    </div>
                    <div className="text-[12px] text-slate-500 leading-4">
                      {a.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* always show Add Admin button */}
        <button
          onClick={() => onAddAdmin(church.id)}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white w-full bg-gradient-to-r from-[#0077FF] to-[#00AFFF]"
        >
          <UserPlus className="h-4 w-4 text-white" /> Админ нэмэх
        </button>
      </div>
    </div>
  );
}
