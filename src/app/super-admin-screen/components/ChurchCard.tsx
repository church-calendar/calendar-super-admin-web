import Image from "next/image";
import { Pin, Mail, UserPlus } from "./Icons";
import type { Church } from "@/lib/fakeApi";

export default function ChurchCard({
  church,
  onAddAdmin,
}: {
  church: Church;
  onAddAdmin: (id: string) => void;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative">
        <Image
          src={church.cover}
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

      <div className="p-4 space-y-3">
        <div className="text-[18px] font-semibold leading-6">{church.name}</div>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Pin className="h-4 w-4 text-slate-400" />
          {church.country}, {church.city}
        </div>

        {church.admins.length === 0 ? (
          <button
            onClick={() => onAddAdmin(church.id)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white w-full bg-gradient-to-r from-[#0077FF] to-[#00AFFF]"
          >
            <UserPlus className="h-4 w-4 text-white" /> Админ нэмэх
          </button>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <Image
                src={church.admins[0].avatar || "/avatars/10.jpg"}
                alt="admin"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <div className="text-[14px] font-medium">{church.admins[0].name}</div>
                <div className="text-[12px] text-slate-500">{church.admins[0].role}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[12px] text-slate-500">
              <Mail className="h-4 w-4 text-slate-400" />
              {church.admins[0].email}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
