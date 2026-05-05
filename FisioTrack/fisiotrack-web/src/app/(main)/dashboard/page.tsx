export default function Dashboard() {
  return (
    <main className="w-full px-8 py-8 max-w-5xl mx-auto space-y-8">
      <header className="mb-8">
        <h1 className="font-headline-xl text-primary font-bold">Dashboard</h1>
        <p className="font-body-lg text-on-surface-variant">Visão geral da sua recuperação</p>
      </header>

      {/* Progress Summary Section */}
      <section>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
          <div className="flex justify-between items-end mb-sm">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Progresso Semanal</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">4 de 7 metas atingidas</p>
            </div>
            <span className="font-headline-xl text-headline-xl text-primary">57%</span>
          </div>
          <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-[57%]"></div>
          </div>
          <div className="flex justify-between mt-sm">
            <span className="font-label-lg text-label-lg text-on-surface-variant">Seg</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant">Ter</span>
            <span className="font-label-lg text-label-lg text-on-surface-variant">Qua</span>
            <span className="font-label-lg text-label-lg text-primary font-bold underline decoration-2 underline-offset-4">Qui</span>
            <span className="font-label-lg text-label-lg text-outline">Sex</span>
            <span className="font-label-lg text-label-lg text-outline">Sáb</span>
            <span className="font-label-lg text-label-lg text-outline">Dom</span>
          </div>
        </div>
      </section>

      {/* Primary Action Card: Exercises */}
      <section>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative h-64 md:h-auto">
            <img
              alt="Exercise Instruction"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBINKp0mx5QwnR67nTlqk7ZMbea5MFNty37VcdzvQBlay7RUTPDBdmz2cLQKSsOlpxS7nNWMXtdaKHWzSMBVh0jj_QTh33IFO1BRSDYgp4uauhB6MwXxMPuo4qFyDrARaQA7cq705ZNpXDPWqRc8fjU-MaRRFqgeiwLDnqVqDS_yyMGXYxjf8OUfPH7C_sWWNzanICXZqld8jIFu3SxvhHRrmQ9OMmzQe12Ra3lAR9j0xElLEEFwbZhsewiDjWPQe-TanzvlaTdyGZe"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-primary-container text-on-primary-container px-sm py-1 rounded-lg">
              <span className="material-symbols-outlined !text-[20px]">timer</span>
              <span className="font-label-lg text-label-lg">15 Minutos</span>
            </div>
          </div>
          <div className="p-md w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-xs mb-xs">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Exercício de Hoje</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Foco: Extensão de Joelho e Quadríceps</p>
            <button className="w-full h-touch-target bg-primary text-on-primary font-button text-button rounded-xl flex items-center justify-center gap-sm active:scale-95 transition-transform duration-200 border-none">
              <span className="material-symbols-outlined">videocam</span>
              Iniciar Câmera
            </button>
          </div>
        </div>
      </section>

      {/* Secondary Section: Health Tips */}
      <section>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Dicas Diárias</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
          <div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl flex flex-col justify-between min-h-[140px] shadow-sm">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1", fontSize: "28px" }}>join_inner</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
            </div>
            <div className="mt-4">
              <h4 className="font-label-lg text-label-lg text-on-surface">Mobilidade Articular</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">Rotina de alongamentos matinais</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
