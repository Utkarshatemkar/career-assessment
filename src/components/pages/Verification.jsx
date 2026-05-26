import GradientBackground from "@/components/ui/GradientBackground";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import AppHeader from "@/components/ui/AppHeader";
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
 <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
  
  {/* Header */}
  <AppHeader />

  {/* Main */}
<main className="flex flex-col lg:flex-row flex-1 pt-20">
    {/* ✅ pt-20 fixes overlap with fixed header */}

    {/* LEFT SIDE */}
    <section className="w-full lg:w-[55%] relative overflow-hidden bg-slate-900 flex flex-col justify-center p-6 sm:p-8 lg:p-20 min-h-[40vh] lg:min-h-full">
      
      {/* Background */}
      <GradientBackground />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-10 lg:-mt-24">
        <img
          className="w-[80%] max-h-[70%] object-contain mix-blend-luminosity opacity-90"
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ab378e51a5-6b98e91afc2453513772.png"
          alt="illustration"
        />

        <div className="max-w-xl mt-4 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
            Secure your account with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
              two-step verification.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Verify your identity to continue your journey.
          </p>
        </div>
      </div>
    </section>

    {/* RIGHT SIDE */}
<section className="lg:w-[45%] w-full flex items-start lg:items-center justify-center px-4 sm:px-6 py-10 lg:py-0">
      
      <div className="w-full max-w-md mx-auto">
        <div className="glass-panel w-full rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 lg:p-8 bg-white/80 shadow-md">
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 text-center">
            Enter 6-digit code
          </h2>

          <p className="text-slate-500 text-center mb-6 text-sm sm:text-base">
            We sent a verification code to <br />
            <span className="text-indigo-600 font-semibold">{maskedEmail}</span>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVerify();
            }}
            className="flex flex-col gap-5 sm:gap-6"
          >
            {/* OTP */}
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3 max-w-[260px] sm:max-w-full mx-auto">
              {enteredCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputsRef.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 text-center text-base sm:text-lg font-semibold border rounded-lg"
                />
              ))}
            </div>

            {error && (
              <p className="text-center text-sm text-red-500">
                Invalid code. Please try again.
              </p>
            )}

            <button className="w-full py-3 rounded-[14px] sm:rounded-[16px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold">
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
