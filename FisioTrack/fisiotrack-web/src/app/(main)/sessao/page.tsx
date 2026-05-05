"use client";

import { useRouter } from "next/navigation";

export default function Sessao() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen max-h-screen bg-background overflow-hidden p-6 gap-6">
      {/* Header Panel */}
      <header className="bg-white border border-outline-variant rounded-xl p-4 flex items-center justify-between shadow-sm shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors bg-transparent border-none"
          >
            <span className="material-symbols-outlined text-primary text-[28px]">arrow_back</span>
          </button>
          <div>
            <h1 className="font-headline-md text-primary">Sessão: Extensão de Joelho</h1>
            <p className="font-body-md text-on-surface-variant text-sm">Vitality Flow ativado</p>
          </div>
        </div>
        <div className="bg-primary-container/20 text-on-primary-container px-4 py-2 rounded-lg border border-primary-container/30 flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>timer</span>
          <span className="font-label-lg font-bold">04:12</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        
        {/* Camera Feed Area */}
        <section className="flex-1 relative bg-inverse-surface rounded-2xl overflow-hidden shadow-lg border border-outline-variant">
          <img
            alt="Paciente realizando exercício de fisioterapia com sobreposição de visão computacional"
            className="w-full h-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-SS1EQoLxfaiTk0RVMBPuLbm0KVfLw-BjWdbyxIRwGwe8FyKtTyTcBptbAGkHx_eqVmYNIujXQ1rKRfjFmwV9AGotwspD_2e4cfnX6wl_E71L37ox9tsvhbfrb34C9pZp0jq084aSBONkP6H13-ReKaL4XP2c7VxYx2N0rrZu-owMJNCkQsjReQf2wLlEX8RRUuFnMGnL7ZVSIYPSSLMb5G5BZq3vcC9AOYVZ5Fn0k47xYCu9gKKBFfWuZnxApAHy6KOxq8Aoxg3n"
          />
          {/* Computer Vision Overlays */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <g fill="none" stroke="#2dce89" strokeWidth="4">
              <circle cx="400" cy="150" fill="#2dce89" r="8"></circle>
              <line x1="400" x2="440" y1="150" y2="350"></line>
              <circle cx="440" cy="350" fill="#2dce89" r="10"></circle>
              <line x1="440" x2="360" y1="350" y2="520"></line>
              <circle cx="360" cy="520" fill="#2dce89" r="8"></circle>
            </g>
            <g transform="translate(440, 350)">
              <path d="M 0,-60 A 60,60 0 0,1 50,30" fill="none" stroke="#2dce89" strokeLinecap="round" strokeWidth="8"></path>
              <rect fill="#005232" height="36" rx="8" width="70" x="60" y="-18"></rect>
              <text fill="white" fontFamily="Lexend" fontSize="18" fontWeight="600" textAnchor="middle" x="95" y="8">120°</text>
            </g>
          </svg>
          {/* Active Badge */}
          <div className="absolute top-6 left-6 bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl border border-primary/20 shadow-md flex items-center gap-3">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="font-label-lg text-on-surface">Câmera Ativa</span>
          </div>
        </section>

        {/* Vitality Flow Side Panel */}
        <aside className="w-full lg:w-[400px] bg-white rounded-2xl shadow-sm border border-outline-variant p-6 flex flex-col justify-between shrink-0 overflow-y-auto">
          
          <div className="space-y-8">
            {/* Real-time Feedback */}
            <div className="bg-primary-container/10 border border-primary-container/30 p-4 rounded-xl flex items-start gap-3 shadow-inner">
              <span className="material-symbols-outlined text-primary text-[28px] mt-1">check_circle</span>
              <div>
                <h3 className="font-headline-md text-on-surface mb-1">Ótima postura</h3>
                <p className="font-body-md text-on-surface-variant text-sm">Mantenha as costas eretas e continue com esse ritmo de respiração.</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-end justify-between mb-2">
                <span className="font-label-lg text-outline uppercase tracking-widest text-[14px]">Progresso da Série</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-xl text-primary font-bold">6</span>
                  <span className="font-headline-md text-outline">/ 10</span>
                </div>
              </div>
              <div className="w-full bg-surface-container-high h-4 rounded-full overflow-hidden shadow-inner">
                <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: "60%" }}></div>
              </div>
            </div>
            
            {/* Repetition details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-center">
                <span className="block font-label-lg text-on-surface-variant mb-1">Série Atual</span>
                <span className="font-headline-lg text-on-surface font-bold">2 / 3</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-center">
                <span className="block font-label-lg text-on-surface-variant mb-1">Ritmo Médio</span>
                <span className="font-headline-lg text-on-surface font-bold">Lento</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-outline-variant">
            <button className="h-14 rounded-xl bg-surface-container-highest text-on-surface-variant font-button flex items-center justify-center gap-2 hover:brightness-95 transition-all border-none">
              <span className="material-symbols-outlined">pause_circle</span>
              Pausar
            </button>
            <button className="h-14 rounded-xl bg-error text-white font-button flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 shadow-md transition-all border-none">
              <span className="material-symbols-outlined">stop_circle</span>
              Encerrar
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
