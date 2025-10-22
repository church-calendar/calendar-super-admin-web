"use client";
import Image from "next/image";

type SidebarProps = {
  active: "church" | "settings";
  onSelect: (key: "church" | "settings") => void;
};

export default function Sidebar({ active, onSelect }: SidebarProps) {
  const baseItem = "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all";
  const activeItem =
    "text-white font-normal bg-gradient-to-r from-[#0077FF] to-[#00AFFF]";
  const inactiveItem = "text-slate-600 hover:bg-slate-50";

  // CSS filter for white vs black icon
  const whiteFilter = "brightness-0 invert"; // makes icon white
  const blackFilter = "brightness-0"; // makes icon black

  return (
    <aside className="hidden md:flex w-56 border-r min-h-screen flex-col border-gray-200">
      <div className="px-4 py-4">
        <div className="flex justify-center">
          <Image src="/bird.png" alt="logo" width={60} height={55} priority />
        </div>
        <div className="my-4">
          <hr className="w-full border-t border-gray-200" />
        </div>

        <nav className="mt-2 space-y-1">
          {/* Чуулган */}
          <button
            type="button"
            className={`${baseItem} ${
              active === "church" ? activeItem : inactiveItem
            } w-full text-left`}
            onClick={() => onSelect("church")}
          >
            <Image
              src="/ad.png"
              alt="church"
              width={18}
              height={24}
              priority
              className={active === "church" ? whiteFilter : blackFilter}
            />
            Админ
          </button>

          {/* Чуулган */}
          <button
            type="button"
            className={`${baseItem} ${
              active === "church" ? activeItem : inactiveItem
            } w-full text-left`}
            onClick={() => onSelect("church")}
          >
            <Image
              src="/chuulgan_icon.png"
              alt="church"
              width={18}
              height={24}
              priority
              className={active === "church" ? whiteFilter : blackFilter}
            />
            Чуулган
          </button>

          {/* Тохиргоо */}
          <button
            type="button"
            className={`${baseItem} ${
              active === "settings" ? activeItem : inactiveItem
            } w-full text-left`}
            onClick={() => onSelect("settings")}
          >
            <Image
              src="/settings.png"
              alt="settings"
              width={18}
              height={24}
              priority
              className={active === "settings" ? whiteFilter : blackFilter}
            />
            Тохиргоо
          </button>
        </nav>
      </div>
    </aside>
  );
}
