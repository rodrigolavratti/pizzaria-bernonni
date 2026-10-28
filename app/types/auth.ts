export interface User {
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isSidebarOpen: boolean;
  isAuthModalOpen: boolean;
  authMode: "login" | "register";
  openSidebar: () => void;
  closeSidebar: () => void;
  openAuthModal: (mode?: "login" | "register") => void;
  closeAuthModal: () => void;
  login: (userData: User) => void;
  logout: () => void;
}
