export default function LogoutFab() {
  return (
    <div className="fixed left-4 bottom-4 z-40">
      <button className="flex items-center gap-2 text-[13px] text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg px-3 py-2 shadow-sm border border-rose-100">
        Программас гарах
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
        </svg>
      </button>
    </div>
  );
}
