import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= GET PROFILE =================

  const profile = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://mern-project-ten-lac.vercel.app/auth/profile",
        {
          withCredentials: true,
        }
      );

      console.log("Profile:", res.data);

      setUser(res.data);
    } catch (error) {
      console.log("Profile error:", error.response?.data);

      if (error.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // ================= LOGOUT =================

  const logout = async () => {
    try {
      const res = await axios.post(
        "https://mern-project-ten-lac.vercel.app/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      console.log("Logout:", res.data);

      await Swal.fire({
        title: "Logged Out",
        text: "You have been successfully logged out.",
        icon: "success",
        confirmButtonColor: "#6366f1",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/login");

    } catch (error) {
      console.log("Logout error:", error.response?.data);

      Swal.fire({
        title: "Logout Failed",
        text: "Something went wrong while logging out.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    }
  };

  // ================= LOAD PROFILE =================

  useEffect(() => {
    profile();
  }, []);

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080812] flex items-center justify-center">

        <div className="text-center">

          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-indigo-500" />

          <p className="mt-5 text-gray-400 text-sm">
            Loading your profile...
          </p>

        </div>

      </div>
    );
  }

  // ================= UI =================

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080812] flex items-center justify-center px-4 py-10">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Purple glow */}

        <div className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full bg-purple-600/30 blur-[150px]" />

        {/* Pink glow */}

        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-pink-600/25 blur-[150px]" />

        {/* Cyan glow */}

        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      </div>

      {/* ================= PROFILE CARD ================= */}

      <div className="relative z-10 w-full max-w-5xl">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-2xl">

          {/* ================= LEFT SIDE ================= */}

          <div className="hidden lg:flex relative flex-col justify-between p-12 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent">

            {/* Decorative circles */}

            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/10" />

            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-purple-400/10" />

            <div className="relative">

              {/* Logo */}

              <div className="flex items-center gap-3 mb-14">

                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">

                  <span className="text-white font-black text-lg">
                    A
                  </span>

                </div>

                <div>

                  <p className="text-white font-bold tracking-wide">
                    AUTHENTICATION
                  </p>

                  <p className="text-xs text-gray-400">
                    Secure Access Platform
                  </p>

                </div>

              </div>

              {/* Heading */}

              <p className="text-sm font-semibold text-indigo-400 mb-3">
                ACCOUNT CENTER
              </p>

              <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-white">

                Your
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  digital identity.
                </span>

              </h1>

              <p className="mt-6 max-w-md text-gray-400 leading-relaxed">

                Manage your account information and securely
                access your personal dashboard.

              </p>

            </div>

            {/* Security */}

            <div className="relative">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">

                  <span className="text-green-400 text-lg">
                    ✓
                  </span>

                </div>

                <div>

                  <p className="text-white font-medium">
                    Account Secured
                  </p>

                  <p className="text-sm text-gray-500">
                    Your session is protected
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="bg-white/[0.97] p-7 sm:p-10 lg:p-12">

            {/* Mobile Logo */}

            <div className="lg:hidden flex items-center justify-center gap-3 mb-8">

              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">

                <span className="text-white font-black">
                  A
                </span>

              </div>

              <div>

                <p className="font-bold text-gray-900">
                  AUTHENTICATION
                </p>

                <p className="text-xs text-gray-500">
                  Secure Access Platform
                </p>

              </div>

            </div>

            {/* ================= PROFILE HEADER ================= */}

            <div className="flex flex-col items-center">

              {/* Avatar */}

              <div className="relative">

                <div className="w-28 h-28 rounded-full p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-indigo-500/20">

                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">

                    <span className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">

                      {user?.name?.charAt(0).toUpperCase()}

                    </span>

                  </div>

                </div>

                {/* Online indicator */}

                <div className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-green-500 border-4 border-white" />

              </div>

              <p className="mt-5 text-xs font-semibold tracking-widest text-indigo-600">
                MY ACCOUNT
              </p>

              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                {user?.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Welcome back to your account
              </p>

            </div>

            {/* ================= USER INFORMATION ================= */}

            <div className="mt-9 space-y-4">

              {/* Name */}

              <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-indigo-200 hover:bg-indigo-50/50">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center">

                    <span className="text-indigo-600">
                      👤
                    </span>

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Full Name
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-800 truncate">
                      {user?.name}
                    </p>

                  </div>

                </div>

              </div>

              {/* Email */}

              <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-purple-200 hover:bg-purple-50/50">

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center">

                    <span className="text-purple-600">
                      ✉
                    </span>

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                      Email Address
                    </p>

                    <p className="mt-1 text-base font-semibold text-gray-800 truncate">
                      {user?.email}
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= LOGOUT ================= */}

            <button
              onClick={logout}
              className="group w-full mt-8 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/30"
            >

              <span>
                Logout
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </button>

            {/* Security text */}

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">

              <span className="text-green-500">
                ●
              </span>

              Your account is securely authenticated

            </div>

          </div>

        </div>

        {/* Footer */}

        <p className="mt-6 text-center text-xs text-gray-500">
          © 2026 Authentication Platform. All rights reserved.
        </p>

      </div>

    </div>
  );
}

