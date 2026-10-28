"use client";

import React, { createContext, useContext, useState } from "react";
import { AuthContextType, User } from "@/app/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const openAuthModal = (mode: "login" | "register" = "login") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsSidebarOpen(false);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const login = (userData: User) => {
    setUser(userData);
    closeAuthModal();
  };

  const logout = () => {
    setUser(null);
    closeSidebar();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isSidebarOpen,
        isAuthModalOpen,
        authMode,
        openSidebar,
        closeSidebar,
        openAuthModal,
        closeAuthModal,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
