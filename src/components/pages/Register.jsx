import {
  ArrowRight, User, Users, Lock, Eye, EyeOff
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AppHeader from "../ui/AppHeader";
export default function Register() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // strength level (0–4)
  let strength = 0;
  let strengthText = "";

  if (password.length >= 1) strength = 1;
  if (password.length >= 4 && /\d/.test(password)) strength = 2;
  if (password.length >= 5 && /\d/.test(password) && /[!@#$%^&*]/.test(password)) strength = 3;
  if (password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password)) strength = 4;

  if (strength === 1) strengthText = "Weak";
  if (strength === 2) strengthText = "Fair";
  if (strength === 3) strengthText = "Good";
  if (strength === 4) strengthText = "Strong";

  ;
  const colors = [
  "bg-red-400",
  "bg-yellow-400",
  "bg-green-400",
  "bg-green-500",
];
  return (
   <div className="min-h-screen lg:h-screen flex flex-col bg-slate-50 text-slate-800 overflow-y-auto lg:overflow-hidden">
      {/* Header */}
     <AppHeader/>

      {/* Main */}
    <main className="flex flex-col lg:flex-row flex-1 pt-20 lg:h-[calc(100vh-80px)]">
        {/* LEFT SIDE */}
<section className="flex w-full lg:w-[55%] relative overflow-hidden bg-slate-900 flex-col justify-center items-center px-6 sm:px-10 lg:px-20 py-10 lg:py-0">

  {/* Background */}
  <AppHeader/>

  {/* CONTENT (centered but lifted upward ~2cm) */}
  <div className="relative z-10 flex flex-col items-center text-center">

    {/* IMAGE */}
     <img
      className="w-[80%] sm:w-[60%] lg:w-[80%] max-h-[280px] lg:max-h-[80%] object-contain opacity-90"
      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3ecdb9a8c2-5148df2577600d87fcc4.png"
      alt="illustration"
    />

    {/* TEXT */}
    <div className="max-w-md lg:max-w-xl mt-6 lg:mt-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
        Create your account to <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
          unlock your potential.
        </span>
      </h1>
       <p className="text-sm sm:text-base text-slate-300">
        Join thousands of students and educators discovering their ideal career paths.
      </p>
    </div>

  </div>
</section>


        {/* RIGHT SIDE */}
   <section className="w-full lg:w-[45%] relative flex justify-center items-center p-6 lg:p-12 overflow-y-auto">

          {/* Background subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Bottom decorative blobs */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />

          {/* Wrapper (IMPORTANT for alignment) */}
         <div className="w-full max-w-md relative z-10 my-auto">

            {/* Glass Card */}
             <div className="glass-panel rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-soft shadow-indigo-900/5 relative overflow-hidden bg-white backdrop-blur-xl border border-white/20">

              {/* Top highlight bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-80" />

              {/* Header */}
              <div className="mb-8">
               <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold tracking-wide">
                    Student Role
                  </span>

                  <span
                    onClick={() => navigate("/roles")}
                    className="text-xs text-slate-400 hover:text-indigo-500 underline cursor-pointer"
                  >
                    Change role
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
                  Sign up
                </h2>

                <p className="text-slate-500 font-medium text-sm">
                  Enter your details to create your student account.
                </p>
              </div>

              {/* FORM */}
             <form onSubmit={(e) => {
    e.preventDefault();

    // success logic (API call later)
    alert("Account created successfully!");

    navigate("/login"); // 👈 THIS is what you want
  }}
  className="flex flex-col gap-5">

  {/* Full Name */}
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      Full Name
    </label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input type="text" placeholder="John Doe" className="input-field" />
    </div>
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      Email Address
    </label>
    <div className="relative">
      <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input type="email" placeholder="john@example.com" className="input-field" />
    </div>
  </div>

  {/* Grade + School */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4 mt-2">

    <div>
  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
    Grade Level
  </label>

  <select
    className="input-field cursor-pointer appearance-none 
    bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%22292.4%22%20height=%22292.4%22%3E%3Cpath%20fill=%22%2394a3b8%22%20d=%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] 
    bg-[length:0.7rem_auto] 
    bg-no-repeat 
    bg-[position:right_1rem_center]"
    defaultValue=""
  >
    <option value="" disabled>
      Select Grade
    </option>
    <option value="9">Grade 9</option>
    <option value="10">Grade 10</option>
    <option value="11">Grade 11</option>
    <option value="12">Grade 12</option>
    <option value="college">College</option>
  </select>
</div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        School Name
      </label>
      <input type="text" placeholder="High School" className="input-field" />
    </div>

  </div>

  {/* Password */}
  <div className="border-t border-slate-100 pt-4 mt-2">
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      Password
    </label>

    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />

      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field pr-10"
      />

      <div
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </div>
    </div>

    {/* Strength bars */}
    {password && (
      <>
        <div className="flex gap-1.5 mt-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i < strength ? colors[i] : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <p className="text-xs mt-1 text-slate-500">
          Password strength:{" "}
          <span className="text-indigo-600 font-medium">{strengthText}</span>
        </p>
      </>
    )}
  </div>

  {/* Confirm Password */}
  <div>
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
      Confirm Password
    </label>

    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
      <input type="password" className="input-field" />
    </div>
  </div>

  {/* Terms */}
  <div className="flex items-start gap-2 mt-2">
    <input type="checkbox" className="mt-1" />
    <label className="text-sm text-slate-600">
      I agree to the{" "}
      <span className="text-indigo-600 font-semibold">Terms</span> and{" "}
      <span className="text-indigo-600 font-semibold">Privacy Policy</span>
    </label>
  </div>

  <button
  type="submit"
  className="w-full py-4 rounded-[16px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg hover:-translate-y-0.5 transition"
>
  Create account <ArrowRight className="inline ml-2" size={16} />
</button>

  {/* Login */}
  

<p className="text-center text-sm text-slate-500">
  Already have an account?{" "}
  <Link 
    to="/login" 
    className="text-indigo-600 font-semibold cursor-pointer hover:underline"
  >
    Log in
  </Link>
</p>

</form>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
