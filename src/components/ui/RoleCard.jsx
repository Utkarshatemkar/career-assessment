import { Check } from "lucide-react";

export function RoleCard({ icon, title, selected, onClick, desc }) {
  return (
    <div
      onClick={onClick}
      className={`w-full p-5 rounded-[24px] border-2 flex items-center gap-4 cursor-pointer transition-all duration-300
      ${
        selected
          ? "border-indigo-500 bg-white shadow-md"
          : "border-slate-100 bg-white hover:border-indigo-200 hover:shadow-sm hover:-translate-y-0.5"
      }`}
    >
      {/* ICON */}
      <div
        className={`w-12 h-12 rounded-[16px] flex items-center justify-center transition-all duration-300
        ${
          selected
            ? "bg-indigo-100 text-indigo-600"
            : "bg-slate-50 text-indigo-500"
        }`}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <h3 className="text-base font-bold text-slate-800 tracking-tight">
          {title}
        </h3>
        {desc && (
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            {desc}
          </p>
        )}
      </div>

      {/* CHECK ICON */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
        ${
          selected
            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white scale-100 opacity-100"
            : "scale-50 opacity-0"
        }`}
      >
        <Check size={12} />
      </div>
    </div>
  );
}