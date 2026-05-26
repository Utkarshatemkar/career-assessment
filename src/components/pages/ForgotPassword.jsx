import { useState } from "react";
import { Fingerprint, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import AppHeader from "../ui/AppHeader";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email or username");
      return;
    }

    const code = generateCode();

    emailjs
      .send(
        "service_bmdegep",
        "template_6amuhfr",
        { to_email: email, code },
        "qFyagjtUr_8pBT4Xh"
      )
      .then(() => {
        alert("Reset code sent!");
        navigate("/verification", { state: { email, code } });
      })
      .catch(() => {
        alert("Failed to send reset code");
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 overflow-x-hidden">
      {/* HEADER */}
      <AppHeader />

      {/* MAIN */}
      <main className="flex flex-col lg:flex-row flex-1 pt-20">

        {/* LEFT SIDE */}
        <section className="lg:w-[55%] w-full relative overflow-hidden bg-slate-900 flex items-center justify-center px-6 py-12 lg:px-16 lg:py-20">

          {/* Background */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90" />

            {/* controlled blobs */}
            <div className="absolute -top-20 -left-20 w-56 h-56 bg-indigo-500/20 rounded-full blur-[90px]" />
            <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-violet-600/20 rounded-full blur-[90px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-md w-full">

            <img
              className="w-full max-w-xs object-contain opacity-90"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e1294c26cb-d7276d6e2c0296384e0c.png"
              alt="illustration"
            />

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
                Get back on track <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
                  your career journey
                </span>
              </h2>

              <p className="text-slate-300 text-sm lg:text-base">
                Recover your access securely and continue exploring your future.
              </p>
            </div>

          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="lg:w-[45%] w-full relative flex items-center justify-center px-6 py-12 bg-[#f8fafc] overflow-hidden">

          {/* Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* small blobs (safe) */}
          <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-40" />
          <div className="absolute -top-16 -left-16 w-32 h-32 bg-violet-200 rounded-full blur-3xl opacity-30" />

          {/* FORM */}
          <div className="w-full max-w-md mx-auto relative z-10">

            <div className="rounded-[28px] p-8 lg:p-10 bg-white shadow-lg border border-slate-200">

              {/* Top bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600" />

              {/* ICON */}
              <div className="flex justify-center mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow">
                  <Fingerprint size={20} />
                </div>
              </div>

              {/* TEXT */}
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Forgot password?
                </h2>
                <p className="text-slate-500 text-sm">
                  We’ll send you reset instructions.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">
                    Email or Username
                  </label>

                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500"
                    required
                  />
                </div>

                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-md hover:opacity-90 transition">
                  Send reset code
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-indigo-600"
                >
                  <ArrowLeft size={14} />
                  Back to login
                </button>

              </form>
            </div>

            {/* SUPPORT */}
            <p className="text-center text-sm text-slate-500 mt-6">
              Having trouble?{" "}
              <span className="text-indigo-600 hover:underline cursor-pointer">
                Contact Support
              </span>
            </p>

          </div>
        </section>
      </main>
    </div>
  );
}