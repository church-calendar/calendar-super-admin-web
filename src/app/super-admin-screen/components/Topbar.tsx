import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 border-b px-6 flex items-center justify-between border-gray-200">
      <div className="flex items-center text-slate-500 text-sm gap-2">
        {/* church icon */}
        <Image
          src="/chuulgan_icon.png"
          alt="logo"
          width={18}
          height={24}
          priority
          className="invert"
        />

        {/* arrow icon */}
        <ChevronRight className="w-4 h-4 text-slate-300" />

        {/* label */}
        <span>Чуулган</span>
      </div>

      {/* user avatar */}
      <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-200">
        <Image
          src="/avatars/10.jpg"
          alt="user"
          width={32}
          height={32}
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  );
}
