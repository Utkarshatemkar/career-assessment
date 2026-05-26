import { useState } from "react";
import { ChevronDown } from "lucide-react";

function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ code: "EN", flag: "gb" });

  const languages = [
    { code: "EN", flag: "gb", label: "English" },
    { code: "FR", flag: "fr", label: "French" },
    { code: "HI", flag: "in", label: "Hindi" },
    { code: "ES", flag: "es", label: "Spanish" },
  ];

  return (
    <div className="relative">
      {/* Pill button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-full shadow-sm text-sm font-medium"
      >
        <img
          src={`https://flagcdn.com/w20/${selected.flag}.png`}
          alt={selected.label}
          className="w-5 h-3.5 rounded-[0.35rem]"
        />
        <span>{selected.code}</span>
        <ChevronDown size={14} />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50">
          <ul className="py-2 text-sm">
            {languages.map((lang) => (
              <li
                key={lang.code}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 cursor-pointer"
              >
                <img
                  src={`https://flagcdn.com/w20/${lang.flag}.png`}
                  alt={lang.label}
                  className="w-5 h-2.5 rounded-[0.35rem]"
                />
                {lang.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
