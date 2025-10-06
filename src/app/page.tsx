"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => router.push("super-admin-screen"), 600);
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/sup-admin-image.webp')" }}
    >
      <div className="bg-white shadow-lg rounded-3xl p-8 w-[400px] flex flex-col items-start">
        {/* Logo */}
        <div className="mb-4 ml-20">
          <Image src="/bird.png" alt="logo" width={72} height={64} priority />
        </div>

        {/* Нэвтрэх нэр */}
        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Нэвтрэх нэр
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-[#667085] text-gray-700"
          />
        </div>

        {/* Нууц үг */}
        <div className="w-full mb-4">
          <label className="block text-gray-700 mb-1 font-medium">
            Нууц үг
          </label>

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 placeholder:text-[#667085] pr-10 text-gray-700"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                // Eye-slash
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 3l18 18" />
                  <path d="M10.73 5.08A10.55 10.55 0 0 1 12 5c5.52 0 9.77 4.1 10.94 6.06a1.3 1.3 0 0 1 0 1.88c-.54.81-1.43 1.95-2.65 3.03M6.53 6.53C4.3 8.17 2.77 10.12 2.06 11.06a1.3 1.3 0 0 0 0 1.88C3.23 14.9 7.48 19 13 19c.68 0 1.35-.06 2-.18" />
                  <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
                </svg>
              ) : (
                // Eye
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Сануулах checkbox */}
        {/* Login action: button OR loader */}
        {isLoading ? (
          <div
            className="w-full h-13 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#0077FF] to-[#00AFFF]"
            aria-busy="true"
            aria-live="polite"
          >
            <span className="inline-block w-6 h-6 rounded-full border-2 border-gray-300 border-t-transparent animate-spin" />
            <span className="ml-2 text-white">Түр хүлээнэ үү…</span>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            type="button"
            className="w-full h-13 bg-gradient-to-r from-[#0077FF] to-[#00AFFF] text-white py-2 rounded-lg transition hover:opacity-95 active:scale-[.99]"
          >
            Нэвтрэх
          </button>
        )}
      </div>
    </div>
  );
}
