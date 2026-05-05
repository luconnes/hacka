"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const navLinks = [
    { href: "/dashboard", icon: "home", label: "Dashboard" },
    { href: "/biblioteca", icon: "fitness_center", label: "Exercícios" },
    { href: "/progresso", icon: "analytics", label: "Progresso" },
    { href: "/saude", icon: "monitor_heart", label: "Saúde" },
    { href: "/perfil", icon: "person", label: "Perfil" },
  ];

  const quickLinks = [
    { href: "/criar-plano", icon: "add_circle", label: "Novo Plano" },
    { href: "/sessao", icon: "play_circle", label: "Iniciar Sessão" },
  ];

  return (
    <aside className="w-64 h-screen bg-surface-container-lowest border-r border-outline-variant flex flex-col fixed left-0 top-0 z-50 select-none">
      {/* Brand */}
      <div className="h-20 flex items-center px-6 border-b border-outline-variant shrink-0">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container">medical_services</span>
          </div>
          <h1 className="font-headline-lg text-[24px] text-primary font-bold tracking-tight">
            FisioTrack
          </h1>
        </Link>
      </div>

      {/* Navigation — fixed, no scroll */}
      <nav className="flex-1 py-6 px-4 space-y-1">
        <p className="px-4 text-[11px] font-bold text-outline uppercase tracking-wider mb-3">Menu Principal</p>

        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: isActive ? '"FILL" 1' : '"FILL" 0' }}
              >
                {link.icon}
              </span>
              <span className="font-label-lg">{link.label}</span>
            </Link>
          );
        })}

        <div className="mt-6 pt-4 border-t border-outline-variant">
          <p className="px-4 text-[11px] font-bold text-outline uppercase tracking-wider mb-3">Ações Rápidas</p>
          {quickLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-bold"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: isActive ? '"FILL" 1' : '"FILL" 0' }}
                >
                  {link.icon}
                </span>
                <span className="font-label-lg">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Profile & Logout — always at bottom */}
      <div className="p-4 border-t border-outline-variant shrink-0">
        <div className="flex items-center justify-between mb-3 px-2">
          <button className="text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>

        <div className="flex items-center gap-3 bg-surface-container p-3 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden shrink-0">
            <img
              alt="Foto do usuário"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZw8fqLkDt4BnvLXks6IaxiaemIkt2j2NaRN3uJENfqU1-B99Yov17VgHKNqFSdGJHeERzpET9ZKcBwAAHIkLQMlac5qA_F6WDz7Tnqrqf047DH2yDPJgHY8wRJNZM4azJQilEFSd67bSujmmtAqtvK8UHPYeTrRrVY0IgUXEfiIgqiyO3pxQ4hAH1IyTvSCzC6HAQqn3ytcBqLwZxRrieJwoUK2-SKG0JnkEsRO--aUzoxSO3IKJFRvpmcahBV7vDV1ZmB1-Zdbj9"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-label-lg text-sm text-on-surface truncate">Admin</p>
            <p className="font-body-md text-xs text-on-surface-variant truncate">admin@fisiotrack.com</p>
          </div>
          <button
            onClick={logout}
            className="text-error hover:bg-error-container/30 p-2 rounded-lg transition-colors bg-transparent border-none cursor-pointer"
            title="Sair"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
