import { Compass } from "lucide-react";
import LanguageDropdown from "../ui/LanguageDropdown";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

export default function Verification() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email + generated code from ForgotPassword
  const email = location.state?.email || "";
  const generatedCode = location.state?.code || ""; // random code passed from ForgotPassword

  const [error, setError] = useState(false);
  const [enteredCode, setEnteredCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  // Mask email for display
  const maskEmail = (email) => {
    if (!email) return "";
    const [user, domain] = email.split("@");
    if (!domain) return email;
    return user[0] + "***@" + domain;
  };
  const maskedEmail = maskEmail(email);

  // Handle input changes
  const handleChange = (value, index) => {
    const newCode = [...enteredCode];
    newCode[index] = value.slice(-1); // only keep last digit
    setEnteredCode(newCode);

    if (value && index < enteredCode.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !enteredCode[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // Verify entered code
  const handleVerify = () => {
    const entered = enteredCode.join("");

    if (enteredCode.some((digit) => digit === "")) {
      setError(true);
      return;
    }

    if (entered !== generatedCode) {
      setError(true);
    } else {
      setError(false);
      navigate("/setpassword");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-800 overflow-hidden">
      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center z-50 px-10 py-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white">
            <Compass size={20} />
          </div>
          <span className="text-2xl font-bold">Pathfinder</span>
        </div>
        <LanguageDropdown />
      </header>

      {/* Main */}
      <main className="flex flex-col lg:flex-row h-full overflow-hidden">
        {/* LEFT SIDE */}
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

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center -mt-20 lg:-mt-32">
            <img
              className="w-[80%] max-h-[80%] object-contain mix-blend-luminosity opacity-90 mt-4"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ab378e51a5-6b98e91afc2453513772.png"
              alt="illustration"
            />
            <div className="max-w-xl mt-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 tracking-tight">
                Secure your account with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
                  two-step verification.
                </span>
              </h2>
              <p className="text-base text-slate-300 font-light">
                We take your privacy seriously. Verify your identity to continue exploring your personalized career path.
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="lg:w-[45%] w-full bg-[#f8fafc] flex items-center justify-center">
          <div className="w-full max-w-md relative z-10 flex flex-col items-center justify-center">
            <div className="glass-panel w-full rounded-[32px] p-8 lg:p-10 bg-white/80">
              <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
                Enter 6-digit code
              </h2>
              <p className="text-slate-500 text-center mb-6">
                We sent a verification code to <br />
                <span className="text-indigo-600 font-semibold">{maskedEmail}</span>
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleVerify();
                }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-center gap-3">
                  {enteredCode.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputsRef.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-12 h-12 text-center text-lg font-semibold border rounded-lg"
                    />
                  ))}
                </div>

                {error && (
                  <p className="text-center text-sm text-red-500">
                    Invalid code. Please try again.
                  </p>
                )}

                <button className="w-full py-3 rounded-[16px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold">
                  Verify
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
