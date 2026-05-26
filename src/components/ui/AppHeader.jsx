import { Compass } from "lucide-react";
import LanguageDropdown from "../ui/LanguageDropdown";

export default function AppHeader() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center z-50 px-4 sm:px-6 lg:px-10 py-4 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white">
          <Compass size={20} />
        </div>

        <span className="text-xl sm:text-2xl font-bold">
          Pathfinder
        </span>
      </div>

      <LanguageDropdown />
    </header>
  );
}