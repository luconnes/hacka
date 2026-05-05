export default function CriarPlano() {
  return (
    <main className="w-full px-8 py-8 max-w-5xl mx-auto space-y-8">
      <header className="mb-8">
        <h1 className="font-headline-xl text-primary font-bold">Novo Exame Personalizado</h1>
        <p className="font-body-lg text-on-surface-variant">Crie um plano de recuperação detalhado</p>
      </header>

      {/* Professional & Date Section (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Name */}
        <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
          <label className="block font-headline-md text-label-lg mb-2">Nome do Profissional</label>
          <div className="relative">
            <input
              className="w-full h-12 px-4 rounded-lg border-2 border-outline focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-on-surface bg-surface-container-lowest outline-none"
              placeholder="Dr. Guilherme Silva"
              type="text"
            />
            <span className="material-symbols-outlined absolute right-4 top-3 text-outline">clinical_notes</span>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="bg-primary-container/10 border-2 border-primary-container rounded-xl p-6 flex items-center justify-center gap-4">
          <span className="material-symbols-outlined text-primary text-5xl">event_available</span>
          <p className="font-headline-md text-primary font-bold">Plano Ativo</p>
        </div>

        {/* Start Date */}
        <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
          <label className="block font-headline-md text-label-lg mb-2">Início</label>
          <input
            className="w-full h-12 px-4 rounded-lg border-2 border-outline focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-on-surface bg-surface-container-lowest outline-none"
            type="date"
          />
        </div>

        {/* End Date */}
        <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm">
          <label className="block font-headline-md text-label-lg mb-2">Finalização</label>
          <input
            className="w-full h-12 px-4 rounded-lg border-2 border-outline focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-on-surface bg-surface-container-lowest outline-none"
            type="date"
          />
        </div>
      </section>

      {/* Weekly Pattern Selection */}
      <section className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm mt-8">
        <h2 className="font-headline-md text-headline-md mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">calendar_view_week</span>
          Padrão Semanal
        </h2>
        <div className="flex flex-wrap gap-4">
          {/* Day Chips */}
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day) => {
            const isChecked = ["Seg", "Ter", "Qua", "Qui", "Sex"].includes(day);
            return (
              <label key={day} className="cursor-pointer group flex-1 min-w-[60px]">
                <input defaultChecked={isChecked} className="hidden peer" type="checkbox" />
                <div className="w-full h-14 rounded-xl border-2 border-outline flex items-center justify-center font-button text-button transition-all peer-checked:bg-primary peer-checked:border-primary peer-checked:text-on-primary group-hover:bg-surface-container-high">
                  {day}
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* Exercise Prescription Section */}
      <section className="space-y-6 mt-8">
        <div className="flex justify-between items-end">
          <h2 className="font-headline-md text-headline-md flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">fitness_center</span>
            Exercícios por Dia
          </h2>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-xl font-button text-button flex items-center gap-2 hover:bg-surface-container-highest transition-all border-none">
            <span className="material-symbols-outlined">add</span>
            Adicionar Exercício
          </button>
        </div>
        
        {/* Exercise List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm hover:border-primary/50 transition-all group flex gap-6 items-center">
            <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvkGhoRNWJ3wgL5HRJ0eJnhiLezz3HS6FeGsxNx3xToQecCPg4bm0I8eayAO-Fagrej1vw4kpsgO5dICTDOLcGEI3qKOB1KGL-9vyoGhfBteY4cak8hNjQubbhSHZchw4sqHQdI_mb6_brYLqeqbWVLXa7Ra6LpxnPBiFTTnoejYd6q2p1pL45nK0yyD0nv4fZBHwskh5LuVHN7HYWbR2UKzO82L0UJAjkJpysSoFNFXTMZm4VQ3awDqpgWg7IDltK26APp-CbR3RW"
                alt="Alongamento Lateral"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Alongamento Lateral</h3>
                <button className="text-error material-symbols-outlined hover:bg-error-container/20 p-2 rounded-full border-none bg-transparent">delete</button>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant flex items-center gap-2">
                  <span className="font-label-lg text-sm">3 Séries</span>
                </div>
                <div className="bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant flex items-center gap-2">
                  <span className="font-label-lg text-sm">15 Reps</span>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-outline-variant rounded-xl p-6 shadow-sm hover:border-primary/50 transition-all group flex gap-6 items-center">
            <div className="w-24 h-24 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoDfIy-LCA9cPXFAPtksIPk7lnQelBcuYOFIlsQVa8kxXL9e-HijNSk05Ci3eI_6gqw2NAJyP0_SkILS4eBsU0geBHI-0JTBXQ5UNOfQIrA8cWL-7EEAwubF2uKiexFYf65SzA8HNwrD0K-c3XHm8VIsfVxFFzsav1cQ1W1sPtBNxDmUCBgdxm4VN9uiVm-s_Q8qtsIuTiAoqUN8CihEWSyGS9U3OhkhcPkM-bO1YO-KIlERRqaqEkgMVDVH5wy64PfZLp58IDbvwp"
                alt="Fortalecimento Lombar"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-lg text-on-surface">Fortalecimento Lombar</h3>
                <button className="text-error material-symbols-outlined hover:bg-error-container/20 p-2 rounded-full border-none bg-transparent">delete</button>
              </div>
              <div className="flex gap-4">
                <div className="bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant flex items-center gap-2">
                  <span className="font-label-lg text-sm">2 Séries</span>
                </div>
                <div className="bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant flex items-center gap-2">
                  <span className="font-label-lg text-sm">12 Reps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Button */}
      <div className="pt-8">
        <button className="w-full md:w-auto md:px-12 h-14 bg-primary text-on-primary rounded-xl font-button text-button shadow-lg hover:bg-surface-tint transition-all flex items-center justify-center gap-3 border-none">
          <span className="material-symbols-outlined">save</span>
          Salvar Plano
        </button>
      </div>
    </main>
  );
}
