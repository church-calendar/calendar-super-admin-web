// lib/fakeApi.ts (no persistence, just in-memory for this runtime)
export type Admin = { id: string; name: string; role: string; email: string; avatar?: string };
export type Church = {
  id: string;
  name: string;
  city: string;
  country: string;
  cover: string;
  status?: "pending" | "active";
  admins: Admin[];
};

const SEED: Church[] = [
  {
    id: "c1",
    name: "Зүүн чуулган",
    city: "Улаанбаатар",
    country: "Монгол",
    cover: "/covers/1.jpg",
    status: "active",
    admins: [
      { id: "a1", name: "Төгөлдөр", role: "Админ", email: "tuguldur@gmail.com", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
      { id: "a2", name: "Оюунгэрэл", role: "Туслах админ", email: "oyungerel@gmail.com", avatar: "/avatars/2.jpg" },
      { id: "a3", name: "Ганбат", role: "Санхүү", email: "ganbat@gmail.com", avatar: "/avatars/3.jpg" },
    ],
  },
  {
    id: "c2",
    name: "Налайх чуулган",
    city: "Улаанбаатар",
    country: "Монгол",
    cover: "/covers/2.jpg",
    status: "active",
    admins: [
      { id: "a4", name: "Солонго", role: "Админ", email: "solongo@gmail.com", avatar: "/avatars/4.jpg" },
      { id: "a5", name: "Батцэцэг", role: "Туслах админ", email: "batsetseg@gmail.com", avatar: "/avatars/5.jpg" },
      { id: "a6", name: "Цэрэн", role: "Гишүүн хариуцагч", email: "tseren@gmail.com", avatar: "/avatars/6.jpg" },
      { id: "a7", name: "Баяр", role: "Санхүү", email: "bayar@gmail.com", avatar: "/avatars/7.jpg" },
    ],
  },
  {
    id: "c3",
    name: "Яармаг чуулган",
    city: "Улаанбаатар",
    country: "Монгол",
    cover: "/covers/3.jpg",
    status: "active",
    admins: [
      { id: "a8", name: "Төгөлдөр", role: "Админ", email: "tuguldur@gmail.com", avatar: "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
      { id: "a9", name: "Энхжин", role: "Туслах админ", email: "enkhjin@gmail.com", avatar: "/avatars/8.jpg" },
    ],
  },
  {
    id: "c4",
    name: "Баянзүрх чуулган",
    city: "Улаанбаатар",
    country: "Монгол",
    cover: "/covers/4.jpg",
    status: "active",
    admins: [
      { id: "a10", name: "Гэрэлмаа", role: "Админ", email: "gerelmaa@gmail.com", avatar: "/avatars/9.jpg" },
      { id: "a11", name: "Мөнхбат", role: "Сургалтын хариуцагч", email: "munkhbat@gmail.com", avatar: "/avatars/10.jpg" },
      { id: "a12", name: "Энхзаяа", role: "Туслах админ", email: "enkhzayaa@gmail.com", avatar: "/avatars/11.jpg" },
    ],
  },
  {
    id: "c5",
    name: "Багануур чуулган",
    city: "Улаанбаатар",
    country: "Монгол",
    cover: "/covers/5.jpg",
    status: "pending",
    admins: [],
  },
  {
    id: "c6",
    name: "Сонгинохайрхан чуулган",
    city: "Улаанбаатар",
    country: "Монгол",
    cover: "/covers/6.jpg",
    status: "active",
    admins: [
      { id: "a13", name: "Содон", role: "Админ", email: "sodon@gmail.com", avatar: "/avatars/12.jpg" },
      { id: "a14", name: "Номин", role: "Туслах админ", email: "nomiin@gmail.com", avatar: "/avatars/13.jpg" },
      { id: "a15", name: "Мэндбаяр", role: "Гишүүн хариуцагч", email: "mendbayar@gmail.com", avatar: "/avatars/14.jpg" },
      { id: "a16", name: "Бямба", role: "Сургалтын хариуцагч", email: "byamba@gmail.com", avatar: "/avatars/15.jpg" },
    ],
  },
];


// Simple UUID that works on both server & client
const uuid = () =>
  typeof globalThis.crypto !== "undefined" && "randomUUID" in globalThis.crypto
    ? globalThis.crypto.randomUUID()
    : Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

// In-memory “DB” (reset each reload/HMR)
let db: Church[] = JSON.parse(JSON.stringify(SEED));

function clone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v));
}

export async function getChurches(): Promise<Church[]> {
  return clone(db);
}

export async function createChurch(data: Omit<Church, "id" | "admins">): Promise<Church> {
  const c: Church = { ...data, id: uuid(), admins: [] };
  db = [c, ...db];
  return clone(c);
}

export async function addAdmin(churchId: string, admin: Omit<Admin, "id">): Promise<Church> {
  const idx = db.findIndex(c => c.id === churchId);
  if (idx < 0) throw new Error("not found");
  db[idx] = clone({
    ...db[idx],
    admins: [...db[idx].admins, { ...admin, id: uuid() }],
  });
  return clone(db[idx]);
}

// Optional dev helper to reset to SEED
export function resetChurches(): void {
  db = JSON.parse(JSON.stringify(SEED));
}
