type Props = {
  query: string;
  setQuery: (v: string) => void;
  onAdd: () => void;
};
export default function SearchAddBar({ query, setQuery, onAdd }: Props) {
  return (
    <div className="flex items-center gap-3 p-4 border-b">
      <div className="relative flex-1">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Нэр, утас"
          className="w-full h-[44px] rounded-lg border px-10 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
        />
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>

      <button onClick={onAdd} className="inline-flex items-center gap-2 h-[44px] rounded-lg bg-sky-500 hover:bg-sky-600 text-white px-4">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 11h3a1 1 0 0 0 0-2h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0Z" />
        </svg>
        Нэмэх
      </button>
    </div>
  );
}
