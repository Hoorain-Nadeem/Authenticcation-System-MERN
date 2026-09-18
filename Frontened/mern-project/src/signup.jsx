
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "https://mern-project-ten-lac.vercel.app/auth/signin",
        formData
      );

      console.log(res.data);

      if (res.data.status === false) {
        Swal.fire({
          title: "Account already exists",
          text: "This email is already registered.",
          icon: "error",
          confirmButtonColor: "#6366f1",
          background: "#ffffff",
        });
      } else {
        await Swal.fire({
          title: "Account Created!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonColor: "#6366f1",
          background: "#ffffff",
        });

        navigate("/login");
      }

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Something went wrong",
        text:
          error.response?.data?.message ||
          "Unable to create your account. Please try again.",
        icon: "error",
        confirmButtonColor: "#6366f1",
      });
    } finally {
      setLoading(false);
    }
  };

  const input = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

        {/* Purple Glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[140px]" />

        {/* Pink Glow */}
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-pink-600/25 blur-[150px]" />

        {/* Cyan Glow */}
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

      </div>

      {/* ================= MAIN CARD ================= */}

      <div className="relative z-10 w-full max-w-5xl">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-2xl">

          {/* ================= LEFT SIDE ================= */}

          <div className="hidden lg:flex relative flex-col justify-between p-12 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent">

            {/* Decorative Circle */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-purple-400/10" />

            <div className="relative">

              {/* Logo */}
              <div className="flex items-center gap-3 mb-12">

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

              <h1 className="text-4xl xl:text-5xl font-bold leading-tight text-white">

                Build your
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  digital identity.
                </span>

              </h1>

              <p className="mt-6 max-w-md text-gray-400 leading-relaxed">
                Create your account and get access to a secure,
                modern authentication experience designed for you.
              </p>

            </div>

            {/* Features */}

            <div className="relative space-y-4">

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-indigo-400 text-lg">✓</span>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Secure Authentication
                  </p>

                  <p className="text-sm text-gray-500">
                    Your account stays protected
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-purple-400 text-lg">⚡</span>
                </div>

                <div>
                  <p className="text-white font-medium">
                    Fast & Simple
                  </p>

                  <p className="text-sm text-gray-500">
                    Get started in seconds
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* ================= FORM SIDE ================= */}

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

            {/* Heading */}

            <div className="mb-8">

              <p className="text-sm font-semibold text-indigo-600 mb-2">
                GET STARTED
              </p>

              <h2 className="text-3xl font-bold text-gray-900">
                Create your account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Join us and start your journey today.
              </p>

            </div>

            {/* ================= FORM ================= */}

            <form onSubmit={submit} className="space-y-5">

              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    👤
                  </span>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={input}
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    ✉
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={input}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>

                <div className="relative">

                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    🔒
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={input}
                    required
                    placeholder="Create a strong password"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>

                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Use at least 8 characters for a stronger password.
                </p>

              </div>

              {/* Terms */}

              <div className="flex items-start gap-3">

                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />

                <p className="text-xs text-gray-500 leading-relaxed">
                  I agree to the{" "}
                  <span className="font-medium text-indigo-600 cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-indigo-600 cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </p>

              </div>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >

                <span className="relative z-10 flex items-center justify-center gap-2">

                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}

                </span>

              </button>

            </form>

            {/* Login */}

            <div className="relative my-7">

              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs text-gray-400">
                  ALREADY A MEMBER?
                </span>
              </div>

            </div>

            <p className="text-center text-sm text-gray-500">

              Already have an account?{" "}

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-indigo-600 hover:text-purple-600 transition"
              >
                Log in
              </button>

            </p>

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

