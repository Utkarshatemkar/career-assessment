import { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  Mail,
  ArrowRight,
  Check,
} from "lucide-react";
import { Card } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AppHeader from "../ui/AppHeader";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call backend login API
    alert("Login submitted!");
    navigate("/roles");
  };

  return (
   <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Header */}
     <AppHeader/>

      {/* Main */}
     <main className="flex flex-col lg:flex-row flex-1 pt-20 min-h-[calc(100vh-80px)]">
        {/* Illustration panel (left) */}
    <section
  id="illustration_panel"
  className="lg:w-[56%] w-full relative overflow-hidden bg-slate-900 flex flex-col justify-center items-center p-8 lg:p-20 min-h-[300px] lg:min-h-full"
>
  {/* Background Elements (UNCHANGED) */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90" />
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" />
    <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px]" />

    <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-[24px] bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-20 rotate-12 backdrop-blur-3xl" />
    <div className="absolute bottom-[25%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 backdrop-blur-xl" />
    <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-[16px] border border-white/10 rotate-45" />
  </div>

  {/* ✅ GROUPED CONTENT */}
 <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 max-w-xl">

    {/* IMAGE */}
    <img
      className="w-[90%] h-auto max-h-[90%] object-contain mix-blend-luminosity opacity-90"
      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/76e3f8bc4f-819b4b1102b3ab229cf0.png"
      alt="illustration"
      loading="lazy"
    />

    {/* TEXT */}
    <div className="max-w-xl mt-2">
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
        Welcome back to your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
          career journey.
        </span>
      </h2>
      <p className="text-lg text-slate-300 font-light">
        Log in to access your personalized insights, track your progress,
        and continue discovering your potential.
      </p>
    </div>

  </div>
</section>
        {/* Right side: use the provided "glass-panel" styling converted to JSX */}
       <section className="w-full lg:w-[44%] flex items-center justify-center px-6 py-10 overflow-y-auto">
        <div className="w-full max-w-md mx-auto">
          <Card className="glass-panel rounded-[32px] p-8 lg:p-10 shadow-soft shadow-indigo-900/5 relative overflow-hidden bg-white/10 backdrop-blur-xl border-white/20 w-full max-w-md">
            {/* Card Top Highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-80" />

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                Log In
              </h2>
              <p className="text-slate-500 font-medium text-sm">
                Enter your credentials to access your account.
              </p>
            </div>

            {/* Auth Form Fields */}
            <form
              id="auth_form_fields"
              className="flex flex-col gap-5 mb-8"
              onSubmit={handleSubmit}
            >
              {/* Email/Username Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 ml-1"
                >
                  Email or Username
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-[16px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 shadow-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700 ml-1"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Lock size={18} />
                  </div>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    className="w-full h-12 pl-11 pr-12 py-3.5 bg-white border border-slate-200 rounded-[16px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300 shadow-sm"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-indigo-600 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between mt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={form.remember}
                      onChange={handleChange}
                      className="peer sr-only"
                      id="remember"
                    />
                    <div className="w-5 h-5 rounded-[6px] border-2 border-slate-300 bg-white peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all duration-200" />
                    <div className="absolute">
                      <Check
                        size={12}
                        className={`text-white transition-opacity duration-200 ${
                          form.remember ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                    Remember me
                  </span>
                </label>

                <button
                  type="button"
                  onClick={() => navigate("/forgotpass")}
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Primary CTA */}
              <button
                type="submit"
                className="w-full py-4 px-6 mt-2 rounded-[16px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Log In</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Social Auth Actions */}
            <div id="social_auth_actions" className="flex flex-col gap-4">
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200" />
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Or continue with
                </span>
                <div className="flex-grow border-t border-slate-200" />
              </div>

              <div className="grid grid-cols-2 gap-3">
               <button
  type="button"
  onClick={() => window.open("https://www.google.com", "_blank")}
  className="w-full py-3 px-4 rounded-[16px] bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
>
  <svg
    className="w-4 h-4 text-rose-500"
    viewBox="0 0 488 512"
    fill="currentColor"
    aria-hidden
  >
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  </svg>
  Google
</button>


                <button
                  type="button"
                  onClick={() => window.open("https://www.microsoft.com", "_blank")}
                  className="w-full py-3 px-4 rounded-[16px] bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
                  </svg>
                  Microsoft
                </button>
              </div>
            </div>

            <p className="text-center text-sm font-medium text-slate-600 mt-8">
              Dont have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-indigo-600 font-semibold hover:underline"
              >
                Create account
              </button>
            </p>
          </Card></div>
        </section>
      </main>
    </div>
  );
}
