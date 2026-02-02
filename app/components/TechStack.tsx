import { Cpu, Code, Layers, Box } from 'lucide-react';

export default function TechStack() {
  return (
    <div className="border-y border-[var(--border)] bg-[#0d1117]/50 backdrop-blur-sm py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider whitespace-nowrap">
          Engineered for performance with:
        </span>
        
        <div className="flex items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Rust */}
            <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#DEA584] transition-colors">
                    <span className="font-bold text-[#DEA584]">R</span>
                </div>
                <span className="font-bold text-[#c9d1d9] group-hover:text-white">Rust</span>
            </div>

            {/* Tauri */}
            <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FFC131] transition-colors">
                    <span className="font-bold text-[#FFC131]">T</span>
                </div>
                <span className="font-bold text-[#c9d1d9] group-hover:text-white">Tauri</span>
            </div>

            {/* Python */}
            <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#3776AB] transition-colors">
                     <span className="font-bold text-[#3776AB]">Py</span>
                </div>
                <span className="font-bold text-[#c9d1d9] group-hover:text-white">Python</span>
            </div>

             {/* React */}
             <div className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#61DAFB] transition-colors">
                     <span className="font-bold text-[#61DAFB]">Re</span>
                </div>
                <span className="font-bold text-[#c9d1d9] group-hover:text-white">React</span>
            </div>
        </div>
      </div>
    </div>
  );
}
