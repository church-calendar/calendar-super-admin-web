// ultra-short fake api using localStorage
export type Admin = { id: string; name: string; role: string; email: string; avatar?: string };
export type Church = {
  id: string;
  name: string;
  city: string; country: string;
  cover: string;
  status?: "pending" | "active";
  admins: Admin[];
};

const KEY = "demo_churches_v1";

const seed: Church[] = [
  { id:"c1", name:"Зүүн чуулган", city:"Улаанбаатар", country:"Монгол", cover:"/covers/1.jpg", status:"active",
    admins:[{ id:"a1", name:"Төгөлдөр", role:"Админ", email:"tuguldur@gmail.com", avatar:"/avatars/1.jpg" }] },
  { id:"c2", name:"Зүүн чуулган", city:"Улаанбаатар", country:"Монгол", cover:"/covers/2.jpg", status:"active", admins:[] },
  { id:"c3", name:"Зүүн чуулган", city:"Улаанбаатар", country:"Монгол", cover:"/covers/3.jpg", status:"active",
    admins:[{ id:"a2", name:"Төгөлдөр", role:"Админ", email:"tuguldur@gmail.com", avatar:"/avatars/2.jpg" }] },
  { id:"c4", name:"Зүүн чуулган", city:"Улаанбаатар", country:"Монгол", cover:"/covers/4.jpg", status:"active",
    admins:[{ id:"a3", name:"Төгөлдөр", role:"Админ", email:"tuguldur@gmail.com", avatar:"/avatars/3.jpg" }] },
  { id:"c5", name:"Зүүн чуулган", city:"Улаанбаатар", country:"Монгол", cover:"/covers/5.jpg", status:"pending", admins:[] },
  { id:"c6", name:"Зүүн чуулган", city:"Улаанбаатар", country:"Монгол", cover:"/covers/6.jpg", status:"active",
    admins:[{ id:"a4", name:"Төгөлдөр", role:"Админ", email:"tuguldur@gmail.com", avatar:"/avatars/4.jpg" }] },
];

function read(): Church[] {
  if (typeof window === "undefined") return seed;
  const raw = localStorage.getItem(KEY);
  if (!raw) { localStorage.setItem(KEY, JSON.stringify(seed)); return seed; }
  return JSON.parse(raw);
}
function write(v: Church[]) { if (typeof window !== "undefined") localStorage.setItem(KEY, JSON.stringify(v)); }

export async function getChurches(): Promise<Church[]> { return read(); }
export async function createChurch(data: Omit<Church,"id"|"admins">): Promise<Church> {
  const all = read(); const c = { ...data, id: crypto.randomUUID(), admins: [] as Admin[] };
  all.unshift(c); write(all); return c;
}
export async function addAdmin(churchId: string, admin: Omit<Admin,"id">): Promise<Church> {
  const all = read(); const idx = all.findIndex(c=>c.id===churchId); if (idx<0) throw new Error("not found");
  all[idx].admins.push({ ...admin, id: crypto.randomUUID() }); write(all); return all[idx];
}
