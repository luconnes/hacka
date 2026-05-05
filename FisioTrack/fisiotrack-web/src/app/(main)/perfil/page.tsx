import Link from "next/link";

export default function Perfil() {
  return (
    <main className="w-full px-8 py-8 max-w-5xl mx-auto space-y-8">
      <header className="mb-8">
        <h1 className="font-headline-xl text-primary font-bold">Meu Perfil</h1>
      </header>

      {/* Hero Profile Section */}
      <section className="flex flex-col items-center py-lg bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm mt-md">
        <div className="relative mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary-container shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Portrait of Maria Silva"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3UeYeXSNgQp_lMaFUcoXjqOc_Yzbk7LTRF_feeVVE0K3ygJsErX_GTEz9vJhp18RQFOXbUNg7sQ5lynXPsH1-aq4ZwUVE0kW-Zbj5pDYb4S04e8e1utIxP_B6Yar6frzS5M4lc_S6-HKDlyzgesD5PVwJBVm16kCF2_VjjwaBvRkDHvySZGCkrA6U59sDuumutIMfyEBeFIZnrc7HN57PbGCdkoUs8pD5DMEIGzSFo03AKNyxdmdMsjkf59UpCyWhr8i1tbDizK2d"
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full border-4 border-white cursor-pointer flex items-center justify-center">
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </div>
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-background">Maria Silva</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">68 anos • Feminino</p>
      </section>

      {/* Bento Grid for Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Accessibility Settings Card */}
        <section className="bg-white border-2 border-outline p-md rounded-xl space-y-md flex flex-col justify-between">
          <div className="flex items-center gap-base">
            <span className="material-symbols-outlined text-primary">trending_up</span>
            <h3 className="font-headline-md text-headline-md text-on-background">Meta de Exercícios Diários</h3>
          </div>
          <div className="space-y-sm">
            <div className="flex justify-between items-end mb-2">
              <span className="font-body-md text-on-surface-variant">Progresso</span>
              <span className="font-headline-md text-primary font-bold">70%</span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-4 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
          <p className="font-body-md text-on-surface-variant">
            Você completou <span className="font-bold text-primary">2 de 3</span> exercícios hoje
          </p>
        </section>

        {/* Consultation History Card */}
        <section className="bg-white border border-outline-variant p-md rounded-xl space-y-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-base mb-4">
              <span className="material-symbols-outlined text-primary text-[32px]">clinical_notes</span>
              <h3 className="font-headline-md text-headline-md text-on-background">Criar Plano Personalizado</h3>
            </div>
            <p className="font-body-md text-on-surface-variant">
              Desenvolva um programa de exercícios adaptado às suas necessidades clínicas e objetivos de saúde atuais.
            </p>
          </div>
          <Link href="/criar-plano" className="w-full h-12 mt-4 bg-primary text-white rounded-xl font-button text-button flex items-center justify-center gap-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">add_circle</span>
            Novo Plano
          </Link>
        </section>
      </div>
    </main>
  );
}
