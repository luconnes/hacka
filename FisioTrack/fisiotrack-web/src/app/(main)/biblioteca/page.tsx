export default function Biblioteca() {
  return (
    <main className="w-full px-8 py-8 max-w-5xl mx-auto space-y-8">
      {/* Page Title */}
      <header className="mb-8">
        <h1 className="font-headline-xl text-primary font-bold mb-2">Biblioteca de Exercícios</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Exercícios focados na reabilitação e mobilidade das mãos. Execute lentamente e respeite seus limites.
        </p>
      </header>

      {/* Tab Switches */}
      <div className="flex flex-wrap gap-gutter mb-xl">
        <button className="bg-primary text-on-primary px-xl py-md rounded-full font-button text-button shadow-lg flex items-center gap-2 border-none">
          <span className="material-symbols-outlined">assignment</span>
          Meu Exame Físico
        </button>
        <button className="bg-surface-container-highest text-on-surface-variant px-xl py-md rounded-full font-button text-button hover:bg-surface-container-high flex items-center gap-2 border-2 border-transparent">
          <span className="material-symbols-outlined">directions_walk</span>
          Mantenha-se Ativo
        </button>
      </div>

      {/* Progress Overview */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md mb-xl flex flex-col md:flex-row items-center gap-lg shadow-sm">
        <div className="relative w-[120px] h-[120px] flex items-center justify-center flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            <circle className="text-surface-container-high" cx="60" cy="60" fill="transparent" r="54" stroke="currentColor" strokeWidth="10"></circle>
            <circle className="text-primary-container" cx="60" cy="60" fill="transparent" r="54" stroke="currentColor" strokeDasharray="339" strokeDashoffset="101" strokeWidth="12"></circle>
          </svg>
          <span className="absolute font-headline-md text-headline-md text-primary">70%</span>
        </div>
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Meta do Dia</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Você concluiu 2 de 3 exercícios de mão prescritos para hoje. Continue assim!</p>
        </div>
      </div>

      {/* Exercise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1: Flexão de Dedos */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="h-48 bg-surface-container overflow-hidden">
            <img
              alt="Flexão de Dedos"
              className="w-full h-full object-cover"
              src="/flexao_dedos.png"
            />
          </div>
          <div className="p-md flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-base">
                <h3 className="font-headline-md text-[20px] text-on-surface">Flexão de Dedos</h3>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg font-label-lg text-[14px]">3x15</span>
              </div>
              <div className="flex flex-col gap-2 mb-lg text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span className="font-body-md text-[14px]">10 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                  <span className="font-body-md text-[14px]">Leve</span>
                </div>
              </div>
            </div>
            <button className="w-full h-12 bg-primary text-on-primary rounded-xl font-button flex items-center justify-center gap-md hover:bg-on-primary-container transition-colors active:scale-95 border-none">
              <span className="material-symbols-outlined text-[24px]">play_circle</span>
              Iniciar
            </button>
          </div>
        </div>

        {/* Card 2: Aperto com Bola */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="h-48 bg-surface-container overflow-hidden">
            <img
              alt="Aperto com Bola"
              className="w-full h-full object-cover"
              src="/aperto_bola.png"
            />
          </div>
          <div className="p-md flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-base">
                <h3 className="font-headline-md text-[20px] text-on-surface">Aperto com Bola</h3>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg font-label-lg text-[14px]">2x20</span>
              </div>
              <div className="flex flex-col gap-2 mb-lg text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span className="font-body-md text-[14px]">12 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                  <span className="font-body-md text-[14px]">Moderado</span>
                </div>
              </div>
            </div>
            <button className="w-full h-12 bg-primary text-on-primary rounded-xl font-button flex items-center justify-center gap-md hover:bg-on-primary-container transition-colors active:scale-95 border-none">
              <span className="material-symbols-outlined text-[24px]">play_circle</span>
              Iniciar
            </button>
          </div>
        </div>

        {/* Card 3: Extensão de Dedos com Elástico */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div className="h-48 bg-surface-container overflow-hidden">
            <img
              alt="Extensão de Dedos com Elástico"
              className="w-full h-full object-cover"
              src="/extensao_elastico.png"
            />
          </div>
          <div className="p-md flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-base">
                <h3 className="font-headline-md text-[20px] text-on-surface">Extensão com Elástico</h3>
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-lg font-label-lg text-[14px]">3x12</span>
              </div>
              <div className="flex flex-col gap-2 mb-lg text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span className="font-body-md text-[14px]">08 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                  <span className="font-body-md text-[14px]">Leve</span>
                </div>
              </div>
            </div>
            <button className="w-full h-12 bg-primary text-on-primary rounded-xl font-button flex items-center justify-center gap-md hover:bg-on-primary-container transition-colors active:scale-95 border-none">
              <span className="material-symbols-outlined text-[24px]">play_circle</span>
              Iniciar
            </button>
          </div>
        </div>

        {/* Dica do Fisioterapeuta */}
        <div className="bg-tertiary-container text-on-tertiary-container rounded-xl p-lg flex flex-col justify-between border border-outline-variant md:col-span-2 lg:col-span-3 lg:w-2/3 mt-4">
          <div>
            <span className="material-symbols-outlined text-[48px] mb-md" style={{ fontVariationSettings: '"FILL" 1' }}>medical_information</span>
            <h3 className="font-headline-md text-headline-md mb-base">Dica do Fisioterapeuta</h3>
            <p className="font-body-md text-body-md mb-lg">
              Lembre-se de manter a respiração constante durante os movimentos das mãos. Não force além do confortável. Se sentir qualquer dor aguda nos dedos ou punho, pare imediatamente e nos avise.
            </p>
          </div>
          <button className="w-fit px-8 h-touch-target bg-surface-container-lowest text-tertiary rounded-xl font-button text-button border-2 border-tertiary hover:bg-surface-container-low transition-colors">
            Ler todas as recomendações
          </button>
        </div>

      </div>
    </main>
  );
}
