import { useState } from "react";
import { Compass, Fingerprint, ArrowLeft } from "lucide-react";
import LanguageDropdown from "../ui/LanguageDropdown";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!email.trim()) {
    alert("Please enter your email or username");
    return;
  }

  const code = generateCode();

  // Send email via EmailJS
  emailjs.send(
    "service_bmdegep",
    "template_6amuhfr",
    { to_email: email, code },
    "qFyagjtUr_8pBT4Xh"
  ).then(() => {
    alert("Reset code sent to your email!");
    navigate("/verification", { state: { email, code } });
  }).catch((err) => {
    console.error(err);
    alert("Failed to send reset code");
  });
};
const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
};
  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-800 overflow-hidden">
      
      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center z-50 px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white">
            <Compass size={20} />
          </div>
          <span className="text-2xl font-bold">Pathfinder</span>
        </div>
        <LanguageDropdown />
      </header>

      {/* MAIN */}
      <main className="flex flex-col lg:flex-row h-full overflow-hidden">

        {/* LEFT SIDE (FINAL CORRECT) */}
        <section className="lg:w-[55%] relative overflow-hidden bg-slate-900 flex flex-col justify-center p-8 lg:p-20 h-full hidden lg:flex">

          {/* Background */}
         <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90" />
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" />
    <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px]" />

    <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-[24px] bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-20 rotate-12 backdrop-blur-3xl" />
    <div className="absolute bottom-[25%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 backdrop-blur-xl" />
    <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-[16px] border border-white/10 rotate-45" />
  </div>

          {/* IMAGE CENTER */}
  <div className="relative z-10 flex flex-col items-center justify-center gap-4">

  <img
    className="w-[75%] max-h-[70%] object-contain mix-blend-luminosity opacity-90"
    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e1294c26cb-d7276d6e2c0296384e0c.png"
    alt="illustration"
  />

  <div className="text-center max-w-xl">
    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
      Get back on track with <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
        your career journey.
      </span>
    </h2>

    <p className="text-lg text-slate-300">
      Recover your access securely and continue exploring personalized pathways designed for your future.
    </p>
  </div>

</div>
        </section>

        {/* RIGHT SIDE (FORM) */}
        <section className="lg:w-[45%] w-full bg-[#f8fafc] relative flex items-center justify-center h-full overflow-hidden">

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* CENTER WRAPPER */}
<div className="w-full max-w-md relative z-10 mt-16 lg:mt-0 flex flex-col h-full justify-center">

  {/* CARD */}
  <div className="glass-panel rounded-[32px] p-8 lg:p-10 shadow-soft shadow-indigo-900/5 relative overflow-hidden bg-white/80">

    {/* Top bar */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-80" />

    {/* ICON */}
    <div className="flex justify-center mb-5">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white shadow-md">
        <Fingerprint size={20} className="text-slate-700" />
      </div>
    </div>

    {/* TEXT */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
        Forgot password?
      </h2>
      <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
        No worries, we’ll send you reset instructions.
      </p>
    </div>

    {/* FORM */}
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

     <div className="flex flex-col gap-2">
  <label className="text-sm font-medium text-slate-700">
    Email or Username
  </label>

  <input
    type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email or username"
    className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-white text-slate-900
               focus:outline-none focus:ring-4 focus:ring-indigo-100
               focus:border-slate-500
               transition-all duration-200"
    required
    
  />
</div>
      {/* ACTIONS */}
      <div className="mt-2 flex flex-col gap-6">

        {/* BUTTON */}
        <button className="w-full py-3 px-4 rounded-[8px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium text-[15px] shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300">
          Send reset code/link
        </button>

        {/* BACK */}
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex items-center justify-center gap-2 text-[14px] font-medium text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to log in
        </button>
      </div>

    </form>
  </div>

  {/* SUPPORT TEXT */}
  <div className="mt-8 text-center">
    <p className="text-sm text-slate-500">
      Having trouble?{" "}
      <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
        Contact Support
      </span>
    </p>
  </div>

</div>
          {/* BLOBS */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-200 rounded-full blur-3xl opacity-30" />
        </section>

      </main>
    </div>
  );
}