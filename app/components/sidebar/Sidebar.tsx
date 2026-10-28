"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar, user, openAuthModal, logout } =
    useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let firstFrame: number | undefined;
    let secondFrame: number | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isSidebarOpen) {
      firstFrame = requestAnimationFrame(() => {
        setIsMounted(true);

        secondFrame = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      firstFrame = requestAnimationFrame(() => {
        setIsVisible(false);
      });

      timeout = setTimeout(() => {
        setIsMounted(false);
      }, 500);
    }

    return () => {
      if (firstFrame !== undefined) cancelAnimationFrame(firstFrame);
      if (secondFrame !== undefined) cancelAnimationFrame(secondFrame);
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [isSidebarOpen]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`fixed inset-y-0 right-0 z-10 flex w-full max-w-xs transform flex-col justify-between border-l border-neutral-800 bg-neutral-900 p-6 text-white shadow-2xl transition-transform duration-500 ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-wide">Menu</h2>
            <button
              onClick={closeSidebar}
              className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          {user ? (
            <div className="mb-6 flex items-center space-x-3 rounded-xl border border-neutral-700/50 bg-neutral-800/80 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-lg font-bold shadow-md">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <p className="truncate font-semibold leading-tight">
                  {user.name}
                </p>
                <p className="truncate text-xs text-neutral-400">
                  {user.email}
                </p>
              </div>
            </div>
          ) : (
            <div className="mb-6 rounded-xl border border-neutral-700/50 bg-neutral-800/60 p-4 text-center">
              <p className="mb-4 text-sm text-neutral-300">
                Faça login para realizar seus pedidos e ver seu histórico.
              </p>
              <button
                onClick={() => openAuthModal("login")}
                className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-bold shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700"
              >
                Entrar / Cadastrar
              </button>
            </div>
          )}

          {user && (
            <nav className="space-y-2 font-medium text-neutral-300">
              <a
                href="#cardapio"
                onClick={closeSidebar}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                🍕 Cardápio Completo
              </a>
              <a
                href="#pedidos"
                onClick={closeSidebar}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-neutral-800 hover:text-white"
              >
                📦 Meus Pedidos
              </a>
            </nav>
          )}
        </div>

        {user && (
          <button
            onClick={logout}
            className="w-full rounded-lg border border-neutral-700/50 bg-neutral-800 py-2.5 text-sm font-semibold text-red-400 transition-colors hover:bg-neutral-700"
          >
            Sair da Conta
          </button>
        )}
      </div>
    </div>
  );
}
