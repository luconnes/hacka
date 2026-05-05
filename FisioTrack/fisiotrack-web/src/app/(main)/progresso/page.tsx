export default function Progresso() {
  return (
    <main className="w-full px-8 py-8 max-w-5xl mx-auto space-y-8">
      {/* My Progress Header Section */}
      <header className="mb-8">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">Meu Progresso</h1>
        <p className="font-body-lg text-on-surface-variant">Acompanhando sua jornada de recuperação com o Dr. Silva</p>
      </header>

      {/* Progress Dashboard Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Chart Card: Range of Motion */}
        <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary text-3xl">show_chart</span>
              <h2 className="font-headline-md text-on-surface">Amplitude de Movimento</h2>
            </div>
            <span className="font-label-lg bg-primary-container text-on-primary-container px-3 py-1 rounded-full">Melhora de +14°</span>
          </div>
          
          {/* Mock Line Chart Implementation */}
          <div className="relative h-[280px] w-full mt-4 border-l border-b border-outline-variant">
            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
              <path d="M 0 180 Q 50 160 100 130 T 200 110 T 300 70 T 400 40" fill="none" stroke="#006d44" strokeLinecap="round" strokeWidth="4"></path>
              <path d="M 0 180 Q 50 160 100 130 T 200 110 T 300 70 T 400 40 V 200 H 0 Z" fill="url(#chartGradient)" opacity="0.1"></path>
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#006d44"></stop>
                  <stop offset="100%" stopColor="transparent"></stop>
                </linearGradient>
              </defs>
              {/* Data Points */}
              <circle cx="0" cy="180" fill="#006d44" r="5"></circle>
              <circle cx="100" cy="130" fill="#006d44" r="5"></circle>
              <circle cx="200" cy="110" fill="#006d44" r="5"></circle>
              <circle cx="300" cy="70" fill="#006d44" r="5"></circle>
              <circle cx="400" cy="40" fill="#006d44" r="5"></circle>
            </svg>
            {/* Grid Labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 pt-2 translate-y-full font-label-lg text-on-surface-variant">
              <span>Sem. 1</span><span>Sem. 2</span><span>Sem. 3</span><span>Sem. 4</span>
            </div>
          </div>
          <p className="font-body-md text-on-surface-variant mt-lg italic">Melhora consistente observada nas medições de flexão do joelho</p>
        </div>

        {/* Summary Stats Card */}
        <div className="bg-primary text-on-primary rounded-xl p-md flex flex-col justify-between shadow-lg min-h-[300px]">
          <div>
            <span className="material-symbols-outlined text-4xl mb-sm">task_alt</span>
            <h2 className="font-headline-md mb-xs">Taxa de Conclusão</h2>
            <div className="flex items-baseline gap-xs mt-4">
              <span className="text-6xl font-bold font-headline-xl">92%</span>
            </div>
          </div>
          <div className="space-y-sm mt-8">
            <div className="h-3 w-full bg-on-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-primary-fixed w-[92%] rounded-full"></div>
            </div>
            <p className="font-body-md">Você está 8% acima da sua meta mensal! Excelente trabalho.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Physiotherapist Connection Section */}
        <section className="bg-surface-container border border-primary/30 rounded-xl p-md flex flex-col items-center gap-md text-center">
          <div className="w-20 h-20 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center border-2 border-primary shrink-0">
            <span className="material-symbols-outlined text-4xl">medical_services</span>
          </div>
          <div className="flex-grow">
            <h3 className="font-headline-md text-primary mb-2">Compartilhar com meu Fisioterapeuta</h3>
            <p className="font-body-md text-on-surface-variant mb-4">Mantenha o Dr. Silva atualizado sobre seus exercícios</p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <span className="flex items-center gap-1 font-label-lg text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">verified_user</span> Certificação</span>
              <span className="flex items-center gap-1 font-label-lg text-on-surface-variant text-sm"><span className="material-symbols-outlined text-primary text-[18px]">schedule</span> Revisão: 12 Out</span>
            </div>
          </div>
          <button className="w-full h-12 bg-primary text-on-primary rounded-full font-button shadow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-sm border-none">
            <span className="material-symbols-outlined">send</span> Enviar Relatório
          </button>
        </section>

        {/* Action Tiles */}
        <div className="flex flex-col gap-6">
          <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant flex items-center gap-md hover:bg-surface-container transition-colors cursor-pointer group flex-1">
            <div className="bg-tertiary-container text-on-tertiary-container w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl">description</span>
            </div>
            <div>
              <h4 className="font-label-lg">Relatórios Anteriores</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Veja todo o histórico médico compartilhado</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-sm rounded-xl border border-outline-variant flex items-center gap-md hover:bg-surface-container transition-colors cursor-pointer group flex-1">
            <div className="bg-primary-container text-on-primary-container w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-2xl">forum</span>
            </div>
            <div>
              <h4 className="font-label-lg">Mensagem para o Dr. Silva</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Tire dúvidas sobre sua rotina</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
