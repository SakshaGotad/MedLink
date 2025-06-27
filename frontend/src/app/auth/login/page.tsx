/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react'
import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff,User } from 'lucide-react';
import Link from 'next/link';
const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"patient" | "doctor">("patient");
  return (
    <div className='min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4 gap-3   overflow-hidden'>

      <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-md '>
      <h1 className="text-2xl font-bold text-center mb-2">
          Welcome Back!   
        </h1>
     
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
        <form className="space-y-4">
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
              type={showPassword ? 'text' : 'password'}
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

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90"
          >
            Log in →
          </button>
        </form>
       
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link href="/auth/register" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      
    </div>
  )
}

export default page
