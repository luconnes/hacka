export default function Saude() {
  return (
    <main className="w-full px-8 py-8 max-w-5xl mx-auto space-y-8">
      {/* Welcome Section */}
      <header className="mb-8">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-2">Saúde e Bem-estar</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Mantenha seus hábitos saudáveis hoje.</p>
      </header>

      {/* Hydration Tracker: Bento Style */}
      <section className="bg-white rounded-xl border border-outline-variant p-md shadow-sm">
        <div className="flex justify-between items-center mb-md">
          <div className="flex items-center gap-base">
            <span className="material-symbols-outlined text-primary text-headline-lg" style={{ fontVariationSettings: '"FILL" 1' }}>water_drop</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Rastreador de Hidratação</h2>
          </div>
          <div className="bg-primary/10 px-sm py-xs rounded-full">
            <span className="text-primary font-bold text-label-lg">4 de 10 copos</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-4 py-md">
          {/* Completed Cups */}
          {[1, 2, 3, 4].map((i) => (
            <button key={`full-${i}`} className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary text-white transition-transform active:scale-95 shadow-md border-none">
              <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>water_full</span>
            </button>
          ))}
          {/* Pending Cups */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <button key={`empty-${i}`} className="w-14 h-14 flex items-center justify-center rounded-xl border-2 border-outline-variant text-outline-variant hover:border-primary hover:text-primary transition-all active:scale-95 bg-transparent">
              <span className="material-symbols-outlined text-[32px]">water_ec</span>
            </button>
          ))}
        </div>
        <div className="mt-md bg-surface-container-low p-sm rounded-lg flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary">info</span>
          <p className="font-body-md text-on-surface-variant text-sm">Beber água ajuda na lubrificação das suas articulações.</p>
        </div>
      </section>

      {/* Health Goals Progress */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-outline-variant p-md flex items-center gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-variant" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="75.36" strokeWidth="8"></circle>
            </svg>
            <span className="absolute font-bold text-primary text-xl">70%</span>
          </div>
          <div>
            <h3 className="font-headline-md text-on-surface mb-2">Atividade Física</h3>
            <p className="text-base text-on-surface-variant">21/30 min hoje</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-outline-variant p-md flex items-center gap-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-variant" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-secondary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="113.04" strokeWidth="8"></circle>
            </svg>
            <span className="absolute font-bold text-secondary text-xl">55%</span>
          </div>
          <div>
            <h3 className="font-headline-md text-on-surface mb-2">Qualidade do Sono</h3>
            <p className="text-base text-on-surface-variant">6h 12min dormidos</p>
          </div>
        </div>
      </section>

      {/* Health Tips Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-md text-headline-md text-on-surface">Dicas de Saúde</h2>
          <button className="text-primary font-bold hover:underline bg-transparent border-none">Ver tudo</button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {/* Tip Card 1 */}
          <article className="bg-white rounded-xl border border-outline-variant overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 bg-surface-container">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD38X4jivbFJZerOZyJlnK3RbTQeSXx4uASTrpMEaHN1UZUJdZfZw22oejuW_rAiA1s1Gtgil3sbHm_ZcoCq7pBHaB35I-ls4ApRCnXmunq1XYZ0yQyRsq6Y3uuI3p_1KB4n8j2IjnjaSYLgm8tkwxzMXuFzMzAE26xq5u8188wxJzZEz_rgrzxrElx6qdV88d4MX-Wag29Y9XWxypMI0SqapEL4nR9XpMx_Ch97PNx197KuMOm5zYAhWMUNxAqg3Dps_vbTv_da45s" alt="Alimentos" />
            </div>
            <div className="p-md flex flex-grow flex-col justify-between">
              <div>
                <div className="flex gap-xs mb-xs">
                  <span className="bg-primary/10 text-primary px-xs py-[2px] rounded text-[12px] font-bold uppercase tracking-wider">Alimentação</span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-xs mt-2">Alimentos que combatem a inflamação</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-2">Descubra como uma dieta rica em ômega-3 pode acelerar sua recuperação muscular e reduzir dores articulares.</p>
              </div>
              <button className="mt-md font-button text-primary flex items-center gap-xs w-fit bg-transparent border-none">
                Ler artigo completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </article>

          {/* Tip Card 2 */}
          <article className="bg-white rounded-xl border border-outline-variant overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="w-full md:w-56 h-48 md:h-auto flex-shrink-0 bg-surface-container">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbXzqu_YIH0OQ0hYvhTzyaBH8dzkzpcdu_ZRoOzwM49jMWuajiWVTbcfrgSUviAm06oFuqaQI9ZWrVvViY8oUNc6LfkXChzyEEzNYKMjvZSap3NYQUkUu9tGk0hwl_nit8BuFhGaz6JsChTpHBlA5dbAMy7qYkv0gL3vFijYm7ZUTEA1ao5BGbHftqqzhxyScyQL_UwYoz6l5PuBJUzP3QnLtLLBmp0W0niVl2f1vLktBqpwY2OkoMjYYbQTUl4idUd-j95k2FWwfI" alt="Sono" />
            </div>
            <div className="p-md flex flex-grow flex-col justify-between">
              <div>
                <div className="flex gap-xs mb-xs">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed px-xs py-[2px] rounded text-[12px] font-bold uppercase tracking-wider">Sono</span>
                </div>
                <h3 className="font-headline-md text-on-surface mb-xs mt-2">Higiene do sono para pacientes em fisioterapia</h3>
                <p className="font-body-md text-on-surface-variant line-clamp-2">A regeneração dos tecidos acontece durante o sono profundo. Aprenda a preparar seu quarto para o descanso ideal.</p>
              </div>
              <button className="mt-md font-button text-primary flex items-center gap-xs w-fit bg-transparent border-none">
                Ler artigo completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
