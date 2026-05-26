import {
  User,
  Users,
  Briefcase,
  School,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { RoleCard } from "../ui/RoleCard"; // ✅ import your RoleCard
import AppHeader from "../ui/AppHeader";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState("Student");
  const navigate = useNavigate();

  return (
   <div className="min-h-screen lg:h-screen flex flex-col bg-slate-50 text-slate-800 overflow-y-auto lg:overflow-hidden">
      {/* Header */}
      <AppHeader/>

      {/* Main */}
      <main className="flex flex-col lg:flex-row flex-1 pt-20 lg:h-[calc(100vh-80px)]">
        {/* LEFT SIDE */}
  <section className="w-full lg:w-[55%] relative overflow-hidden bg-slate-900 flex flex-col justify-center p-6 sm:p-8 lg:p-20 min-h-[40vh] lg:h-full">
  {/* Background Elements */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90" />
    <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]" />
    <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px]" />

    <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-[24px] bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-20 rotate-12 backdrop-blur-3xl" />
    <div className="absolute bottom-[25%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 backdrop-blur-xl" />
    <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-[16px] border border-white/10 rotate-45" />
  </div>

  {/* ✅ MORE UP + LESS GAP */}
 <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

    {/* IMAGE */}
    <img
      className="w-[100%] max-h-[100%] object-contain mix-blend-luminosity opacity-90"
      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3ecdb9a8c2-5148df2577600d87fcc4.png"
      alt="illustration"
    />

    {/* TEXT */}
    <div className="max-w-xl mt-0.5">
      <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-1 tracking-tight">
        Tell us who you are to <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">
          personalize your experience.
        </span>
      </h2>
      <p className="text-base text-slate-300 font-light">
        We tailor our assessment tools and insights specifically for your
        unique role in the educational ecosystem.
      </p>
    </div>

  </div>
</section>
       
       {/* RIGHT SIDE */}
<section className="lg:w-[45%] w-full bg-[rgb(248,250,252)] relative flex items-center justify-center px-4 sm:px-6 py-10 lg:py-0 lg:h-full overflow-y-auto lg:overflow-hidden">

  {/* Background pattern */}
  <div
    className="absolute inset-0 opacity-[0.03] pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  <div className="w-full max-w-md relative z-10 mt-16 lg:mt-0 mx-auto">

    {/* Glass Card 
*/}
    <div className="glass-panel rounded-[32px] p-8 lg:p-10 shadow-soft shadow-indigo-900/5 relative overflow-hidden bg-white backdrop-blur-xl border border-white/20">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-80" />

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">
          Select your role
        </h2>
        <p className="text-slate-500 font-medium text-sm">
          Choose how you`ll be using Pathfinder.
        </p>
      </div>

      {/* Roles */}
      <div className="flex flex-col gap-4">

  <RoleCard
    icon={<User className="text-indigo-600" />}
    title="Student"
    desc="I want to discover my career path."
    selected={selectedRole === "Student"}
    onClick={() => setSelectedRole("Student")}
  />

  <RoleCard
    icon={<Users className="text-green-600" />}
    title="Parent"
    desc="I want to support my child's journey."
    selected={selectedRole === "Parent"}
    onClick={() => setSelectedRole("Parent")}
  />

  <RoleCard
    icon={<Briefcase className="text-yellow-500" />}
    title="Counsellor"
    desc="I guide multiple students' paths."
    selected={selectedRole === "Counsellor"}
    onClick={() => setSelectedRole("Counsellor")}
  />

  <RoleCard
    icon={<School className="text-red-600" />}
    title="School / Org"
    desc="I manage institutional access."
    selected={selectedRole === "School / Org"}
    onClick={() => setSelectedRole("School / Org")}
  />

</div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4">

        <button
  disabled={!selectedRole}
  onClick={() =>
    navigate("/register", { state: { role: selectedRole } })
  }
  className={`w-full py-4 px-6 rounded-[16px] text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300
  ${
    selectedRole
      ? "bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
      : "bg-slate-300 cursor-not-allowed"
  }`}
>
  Continue
  <ArrowRight className="text-sm" />
</button>

        <button
          onClick={() => navigate("/login")}
          className="w-full py-3 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2"
        >
          ← Back to login
        </button>
      </div>
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
