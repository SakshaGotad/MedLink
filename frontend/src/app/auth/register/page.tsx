"use client";
import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Purple Spot */}
        <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-purple-400 opacity-30 rounded-full blur-[120px]" />

        {/* Blue Spot */}
        <div className="absolute bottom-[-100px] right-[-60px] w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full blur-[120px]" />

        {/* Pink Spot */}
        <div className="absolute top-[50%] left-[60%] w-[250px] h-[250px] bg-pink-400 opacity-25 rounded-full blur-[100px]" />
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">
          Join MedLink Today!   
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Create your account to start managing your healthcare effortlessly.
        </p>

        <div className="flex justify-center mb-4 gap-4">
          <button
            onClick={() => setRole("patient")}
            className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
              role === "patient"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <User size={16} /> Patient
          </button>
          <button
            onClick={() => setRole("doctor")}
            className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
              role === "doctor"
                ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <User size={16} /> Doctor
          </button>
        </div>

        <form className="space-y-4 flex flex-col   justify-center gap-3 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <User className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border rounded-lg pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90"
          >
            Create account →
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
