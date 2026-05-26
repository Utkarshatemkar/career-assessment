import AppHeader from "../ui/AppHeader";
import { useNavigate } from "react-router-dom";


export default function ResetSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen lg:h-screen flex flex-col bg-slate-50 text-slate-800 overflow-y-auto lg:overflow-hidden">

      {/* HEADER */}
      <AppHeader/>

      <main className="flex flex-col lg:flex-row flex-1 pt-20 lg:h-[calc(100vh-80px)]">

        {/* LEFT SIDE */}
       <section
  id="illustration_panel"
  className="w-full lg:w-[55%] relative overflow-hidden bg-slate-900 flex flex-col justify-center p-6 sm:p-8 lg:p-20 min-h-[40vh] lg:h-full"
>
  {/* Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90" />
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" />
    <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px]" />

    <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-[24px] bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-20 rotate-12 backdrop-blur-3xl" />
    <div className="absolute bottom-[25%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 backdrop-blur-xl" />
    <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-[16px] border border-white/10 rotate-45" />
  </div>
  {/* CONTENT (centered + slightly lifted like roles) */}
  <div className="relative z-10 flex flex-col items-center text-center -mt-0 lg:-mt-0">

    {/* IMAGE */}
    <img
      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5288f5aa7f-aa66a6477d865acf5bbd.png"
      alt="Success Illustration"
      className="w-[65%] h-auto max-h-[65%] object-contain mix-blend-luminosity opacity-90 mt-6"
    />

    {/* TEXT */}
    <div className="max-w-xl mt-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 tracking-tight">
        You`re all set to <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
          explore your future.
        </span>
      </h2>

      <p className="text-base text-slate-300 font-light">
        Your password has been successfully updated. Let’s get back to shaping your personalized career pathway.
      </p>
    </div>

  </div>
</section>
        {/* RIGHT SIDE */}
       <section
  id="success_state_section"
  className="lg:w-[45%] w-full bg-[#f8fafc] relative flex items-center justify-center px-4 sm:px-6 py-10 lg:py-0 lg:h-full overflow-y-auto lg:overflow-hidden"
>
  {/* Background pattern */}
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  {/* CENTER WRAPPER (perfect centering) */}
  <div className="w-full max-w-md relative z-10 flex flex-col justify-center">

    {/* GLASS CARD */}
    <div className="glass-panel rounded-[32px] p-8 lg:p-12 shadow-soft shadow-indigo-900/5 relative overflow-hidden bg-white/80 w-full text-center">

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-80" />

      {/* Success Icon */}
      <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping"></div>

        <div className="relative w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10">
          <span className="text-white text-3xl">✓</span>
        </div>
      </div>

      {/* TEXT */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          Password Reset!
        </h2>
        <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
          Your password has been successfully updated. You can now log in with your new credentials.
        </p>
      </div>

      {/* NEXT STEPS */}
      <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-8 text-left">
        <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
          Next Steps
        </h4>

        <ul className="flex flex-col gap-3">
          {[ 
            "Log in with your new password",
            "Review your recent career assessments",
            "Continue building your pathway"
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-indigo-600">{i + 1}</span>
              </div>
              <span className="text-sm font-medium text-slate-600">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => navigate("/login")}
        className="w-full py-3.5 px-4 rounded-[16px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium text-[16px] shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        Go to login
        <span className="text-sm group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>

    </div>
  </div>

  {/* Decorative blobs */}
  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply blur-3xl opacity-50 pointer-events-none" />
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply blur-3xl opacity-30 pointer-events-none" />
</section>
      </main>
    </div>
  );
}