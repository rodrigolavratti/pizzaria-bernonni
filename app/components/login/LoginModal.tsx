"use client";

import { useState } from "react";
import { useAuth } from "@/app/context";

export default function LoginModal() {
  const { isAuthModalOpen, closeAuthModal, authMode, login, register } =
    useAuth();
  const [mode, setMode] = useState<"login" | "register">(authMode);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (mode === "register") {
        await register(name.trim(), email.trim(), password);
      } else {
        await login(email.trim(), password);
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      window.alert(
        "Não foi possível autenticar. Confira os dados e tente novamente.",
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-neutral-900 p-6 shadow-2xl border border-neutral-800 text-white">
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white"
        >
          ✕
        </button>

        <div className="flex border-b border-neutral-800 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 pb-3 text-center font-semibold transition-colors ${
              mode === "login"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 pb-3 text-center font-semibold transition-colors ${
              mode === "register"
                ? "border-b-2 border-red-600 text-red-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Criar Conta
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome Completo"
                className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-red-600 hover:bg-red-700 font-bold rounded-lg transition-colors shadow-lg"
          >
            {mode === "login" ? "Entrar na Conta" : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
