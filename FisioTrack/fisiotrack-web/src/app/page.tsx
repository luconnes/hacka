"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function TelaDeAcesso() {
  const { login } = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      router.replace("/dashboard");
    } else {
      setError("Usuário ou senha incorretos.");
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-surface">
      <div className="w-full max-w-[480px] flex flex-col items-center bg-surface-container-lowest p-10 rounded-2xl shadow-lg border border-outline-variant">

        <header className="w-full text-center mb-8">
          <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight">
            FisioTrack
          </h1>
          <p className="font-body-md text-on-surface-variant mt-1">
            Sua jornada de recuperação
          </p>
        </header>

        <section className="w-full flex justify-center mb-8">
          <div className="relative w-32 h-32 bg-primary-container rounded-full flex items-center justify-center">
            <span
              className="material-symbols-outlined text-[64px] text-on-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              medical_services
            </span>
            <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-surface-container-lowest rounded-xl shadow-md flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-[24px]">
                fitness_center
              </span>
            </div>
          </div>
        </section>

        <form onSubmit={handleLogin} className="w-full space-y-5">
          <div className="flex flex-col gap-1">
            <label className="font-label-lg text-on-surface ml-1" htmlFor="username">
              Usuário
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                person
              </span>
              <input
                className="w-full h-12 pl-10 pr-4 bg-surface-container-lowest border-2 border-outline-variant rounded-lg focus:border-primary outline-none text-body-md transition-colors"
                id="username"
                placeholder="admin"
                type="text"
                value={username}
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-label-lg text-on-surface ml-1" htmlFor="password">
              Senha
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                lock
              </span>
              <input
                className="w-full h-12 pl-10 pr-4 bg-surface-container-lowest border-2 border-outline-variant rounded-lg focus:border-primary outline-none text-body-md transition-colors"
                id="password"
                placeholder="••••"
                type="password"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="text-error font-body-md text-center text-sm">{error}</p>
          )}

          <div className="flex justify-end">
            <button type="button" className="font-label-lg text-primary hover:underline h-10 px-1 bg-transparent border-none">
              Esqueci minha senha
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-primary text-on-primary rounded-lg font-button shadow-sm hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-none"
          >
            Entrar
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>

        <footer className="w-full mt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-outline-variant"></div>
            <span className="font-label-lg text-on-surface-variant text-sm">ou</span>
            <div className="flex-1 h-px bg-outline-variant"></div>
          </div>
          <button type="button" className="w-full h-12 border-2 border-outline-variant text-on-surface rounded-lg font-button hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2 bg-transparent">
            <span className="material-symbols-outlined">person_add</span>
            Criar conta
          </button>
        </footer>
      </div>
    </div>
  );
}
