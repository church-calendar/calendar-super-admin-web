export default function Topbar() {
  return (
    <header className="h-14 border-b px-6 flex items-center justify-between border-gray-200">
      <div className="flex items-center text-slate-500 text-sm gap-2">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span>Админ</span>
      </div>

      <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-200">
        <img src="/avatars/10.jpg" alt="user" className="h-full w-full object-cover" />
      </div>
    </header>
  );
}
