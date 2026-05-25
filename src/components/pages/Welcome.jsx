import {
  Compass,
 
  Brain,
  PieChart,
  User,
  Users,
  Briefcase,
  School,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import LanguageDropdown  from "../ui/LanguageDropdown";
import { useNavigate } from "react-router-dom"
export default function Welcome() {
    const [selectedRole, setSelectedRole] = useState("Student");
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 overflow-hidden">

      {/* Header */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center z-50 px-10 pt-6 pb-3">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white">
      <Compass size={20} />
    </div>
   <span className="text-2xl font-bold">
  Pathfinder
</span>
  </div>

  {/* Instead of the static pill */}
  <LanguageDropdown />
</header>
      {/* Main */}
      <main className="flex flex-col lg:flex-row flex-1">

        {/* LEFT SIDE */}
        <section className="lg:w-[55%] relative overflow-hidden bg-slate-900 flex flex-col justify-center p-8 lg:p-20 min-h-[50vh] lg:min-h-screen">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-violet-900 opacity-90"></div>
                <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/20 blur-[120px]"></div>
                <div className="absolute bottom-[10%] right-[0%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px]"></div>
                <div className="absolute top-[20%] right-[15%] w-24 h-24 rounded-[24px] bg-gradient-to-tr from-indigo-500 to-violet-400 opacity-20 rotate-12 backdrop-blur-3xl"></div>
                <div className="absolute bottom-[25%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 backdrop-blur-xl"></div>
                <div className="absolute top-[40%] left-[20%] w-16 h-16 rounded-[16px] border border-white/10 rotate-45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl -translate-y-14 lg:-translate-y-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-indigo-200 text-sm font-medium mb-8">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    Next-Gen EdTech Platform
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
                    Discover your true <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-300">career potential.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl font-light">
                    Join over 50,000 students using AI-driven insights to map their academic journey and find the perfect career fit.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                    <Feature
                        icon={<Brain className="text-indigo-300 text-xl" />}
                        iconWrapperClass="bg-indigo-500/20 border-indigo-500/30"
                        title="AI Career Tests"
                        desc="Deep psychometric analysis tailored to your unique traits."
                    />
                    <Feature
                        icon={<PieChart className="text-violet-300 text-xl" />}
                        iconWrapperClass="bg-violet-500/20 border-violet-500/30"
                        title="Smart Insights"
                        desc="Data-driven roadmaps bridging education to employment."
                    />
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[60%] h-[60%] pointer-events-none opacity-80 mix-blend-luminosity hidden lg:block">
               <img className="w-full h-full object-contain object-bottom" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/780f81fab2-979ae1b97ff7c7e5589e.png" alt="3D modern minimalist abstract illustration of a glowing compass and ascending career stairs, premium edtech SaaS style, dark background context" />
            </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="w-full lg:w-[45%] flex items-start justify-center px-6 py-12">
          <Card className="glass-panel w-full max-w-md rounded-[32px] p-8 lg:p-10 shadow-[0_32px_120px_-30px_rgba(15,23,42,0.12)] border border-slate-200/70 bg-white/95 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 opacity-80"></div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Get Started</h2>
              <p className="text-slate-500 font-medium">Choose your role to personalize your experience.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <Feature
                icon={<User className="text-indigo-600" />}
                iconWrapperClass="bg-indigo-100"
                title="Student"
                selected={selectedRole === "Student"}
                onClick={() => setSelectedRole("Student")}
                role
              />
              <Feature
                icon={<Users className="text-emerald-600" />}
                iconWrapperClass="bg-emerald-100"
                title="Parent"
                selected={selectedRole === "Parent"}
                onClick={() => setSelectedRole("Parent")}
                role
              />
              <Feature
                icon={<Briefcase className="text-amber-600" />}
                iconWrapperClass="bg-amber-100"
                title="Counsellor"
                selected={selectedRole === "Counsellor"}
                onClick={() => setSelectedRole("Counsellor")}
                role
              />
              <Feature
                icon={<School className="text-rose-600" />}
                iconWrapperClass="bg-rose-100"
                title="School"
                selected={selectedRole === "School"}
                onClick={() => setSelectedRole("School")}
                role
              />
            </div>

            <div className="flex flex-col gap-4">
              <Button
                className="w-full py-4 px-6 rounded-[16px] bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => navigate("/register")}
              >
                Create Account
                <ArrowRight size={16} />
              </Button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">or</span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              <Button
                variant="outline"
                className="w-full py-4 px-6 rounded-[16px] bg-white border border-slate-200 text-slate-700 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() => navigate("/login")}
              >
                Log in to existing account
              </Button>
            </div>

            <p className="text-center text-xs text-slate-400 mt-8">
              By continuing, you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
            </p>
          </Card>
        </section>


      </main>
    </div>
  );
}

/* Reusable components */

function Feature({ icon, title, desc, iconWrapperClass, selected, onClick, role }) {
  if (role) {
    return (
      <div
        onClick={onClick}
        className={`relative h-full p-5 rounded-[20px] border-2 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 cursor-pointer ${selected ? "border-indigo-500 bg-indigo-50/80 shadow-md" : "border-slate-100 bg-white hover:border-indigo-200 hover:bg-indigo-50/50"}`}
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 ${iconWrapperClass}`}>
          {icon}
        </div>
        <span className="font-semibold text-slate-700">{title}</span>
        {selected && (
          <div className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-indigo-500 bg-indigo-500 flex items-center justify-center text-white transition-colors">
            <Check size={10} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 p-5 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${iconWrapperClass}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        {desc && <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}

