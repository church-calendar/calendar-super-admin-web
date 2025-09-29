import Image from "next/image";

export default function LoginPage() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/sup-admin-image.webp')" }}
    >
      <div className="bg-white shadow-lg rounded-3xl p-8 w-[400px] flex flex-col items-start">
        {/* Logo */}
          <div className="mb-4 ml-20">
          <Image
            src="/bird.png"
            alt="logo"
            width={72}
            height={64} 
            priority
          />
        </div>

        {/* Нэвтрэх нэр */}
        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Нэвтрэх нэр</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Нууц үг */}
        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-1 font-medium">Нууц үг</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Сануулах checkbox */}
        <div className="flex items-center w-full mb-4">
          <input id="remember" type="checkbox" className="mr-2" />
          <label htmlFor="remember" className="text-gray-600">
            Сануулах
          </label>
        </div>

        {/* Нэвтрэх button */}
        <button className="w-full h-13 bg-[#00B4D8] text-white py-2 rounded-lg transition">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}
