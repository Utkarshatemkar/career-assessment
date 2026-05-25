import { Compass, Lock, Eye, EyeOff } from "lucide-react";
import LanguageDropdown from "../ui/LanguageDropdown";
import { useNavigate,useLocation } from "react-router-dom";
import { useState } from "react";

export default function SetPassword() {
  const navigate = useNavigate();

  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
const location = useLocation();
const sentCode = location.state?.code; //
  // PASSWORD STRENGTH
  let strength = 0;
  let strengthText = "";

  if (password.length > 0) {
    strength = 1;
    strengthText = "Weak";
  }

  if (password.length >= 6) {
    strength = 2;
    strengthText = "Fair";
  }

  if (password.length >= 8 && /[A-Z]/.test(password)) {
    strength = 3;
    strengthText = "Good";
  }

  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[0-9!@#$%^&*]/.test(password)
  ) {
    strength = 4;
    strengthText = "Strong";
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">

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
      <main className="flex flex-col lg:flex-row h-screen overflow-hidden">

        {/* LEFT SIDE */}
       <section className="hidden lg:flex w-[55%] relative bg-slate-900 flex-col justify-center px-20 py-16 h-screen overflow-hidden">

 
  {/* Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90" />
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" />
    <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px]" />

    <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-[24px] bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-20 rotate-12 backdrop-blur-3xl" />
    <div className="absolute bottom-[25%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 backdrop-blur-xl" />
    <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-[16px] border border-white/10 rotate-45" />
  </div>

  {/* CONTENT WRAPPER (MOVE UP CONTROL HERE) */}
  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center -translate-y-28 lg:-translate-y-36">

    {/* IMAGE */}
   <div className="relative z-10 w-full h-full flex flex-col items-center text-center px-10 pt-20 lg:pt-28">

  {/* IMAGE (keeps natural center but slightly above due to padding-top) */}
  <img
    className="w-[75%] max-h-[55vh] object-contain mix-blend-luminosity opacity-90"
    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e1294c26cb-d7276d6e2c0296384e0c.png"
    alt="3D illustration"
  />

  {/* TEXT (naturally below image) */}
  <div className="mt-8 max-w-xl">
    <h1 className="text-4xl font-bold mb-4 leading-tight text-white">
      Secure your future with
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
        a strong new key
      </span>
    </h1>

    <p className="text-lg text-slate-300">
      Create a robust password to protect your personalized career pathways and academic progress.
    </p>
  </div>

</div>

  </div>
</section>
        

       
        {/* RIGHT SIDE */}
<section className="lg:w-[45%] w-full h-screen overflow-y-auto bg-[#f8fafc] relative flex items-start justify-center p-6 lg:p-12">

  {/* Background pattern */}
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  <div className="w-full max-w-md relative z-10 mt-16 lg:mt-0 flex flex-col justify-center">

    {/* CARD */}
    <div className="relative rounded-[32px] p-8 lg:p-10 bg-white/80 backdrop-blur-xl shadow-lg border border-slate-100 overflow-hidden">

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600" />

      {/* ICON */}
      <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-xl bg-white shadow-sm border">
        <Lock className="text-slate-700" size={20} />
      </div>

      {/* TITLE */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          Set new password
        </h2>
        <p className="text-slate-500 text-[15px]">
          Must be at least 8 characters long.
        </p>
      </div>

      {/* FORM */}
      <form className="flex flex-col gap-5">

        {/* OTP */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            Verification Code
          </label>

          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter 6-digit code sent to email"
            className="auth-input tracking-widest font-mono w-full h-12 px-4 rounded-lg border border-slate-200 shadow-sm focus:ring-4 focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            New Password
          </label>

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="auth-input w-full h-12 px-4 pr-10 rounded-lg border border-slate-200 shadow-sm focus:ring-4 focus:ring-indigo-200 focus:outline-none"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* STRENGTH */}
        <div className="flex flex-col gap-2 mt-1">
          <div className="flex gap-1 w-full">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded ${
                  i < strength
                    ? strength === 1
                      ? "bg-red-500"
                      : strength === 2
                      ? "bg-yellow-500"
                      : strength === 3
                      ? "bg-green-400"
                      : "bg-green-600"
                    : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          <span className="text-xs text-right text-slate-500 font-medium">
            {strengthText}
          </span>
        </div>

        {/* RULES */}<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-3">
  <p className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
    Password must contain:
  </p>
  <ul className="flex flex-col gap-2 text-sm text-slate-500">
    {/* Rule: Length */}
    <li className="rule-item flex items-center gap-2" id="rule_length">
      {password.length >= 8 ? (
        <i className="fa-solid fa-circle-check text-green-500 text-xs"></i>
      ) : (
        <i className="fa-regular fa-circle text-slate-400 text-xs"></i>
      )}
      <span>At least 8 characters</span>
    </li>

    {/* Rule: Uppercase */}
    <li className="rule-item flex items-center gap-2" id="rule_upper">
      {/[A-Z]/.test(password) ? (
        <i className="fa-solid fa-circle-check text-green-500 text-xs"></i>
      ) : (
        <i className="fa-regular fa-circle text-slate-400 text-xs"></i>
      )}
      <span>One uppercase letter</span>
    </li>

    {/* Rule: Number or Symbol */}
    <li className="rule-item flex items-center gap-2" id="rule_number">
      {/[0-9!@#$%^&*]/.test(password) ? (
        <i className="fa-solid fa-circle-check text-green-500 text-xs"></i>
      ) : (
        <i className="fa-regular fa-circle text-slate-400 text-xs"></i>
      )}
      <span>One number or symbol</span>
    </li>
  </ul>
</div>


        {/* CONFIRM */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="auth-input w-full h-12 px-4 rounded-lg border border-slate-200 shadow-sm focus:ring-4 focus:ring-indigo-200 focus:outline-none"
          />
        </div>

        {/* BUTTON */}
       <button
  onClick={() => {
    if (verificationCode !== sentCode) {
      alert("Invalid verification code");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate("/reset-success");
  }}
  className="w-full mt-2 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium shadow-lg hover:-translate-y-0.5 transition"
>
  Reset password
</button>


      </form>

    </div>
  </div>
</section>
      </main>
    </div>
  );
}