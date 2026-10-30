"use client";

import { useAuth } from "@/app/context";
import LoginModalContent from "./LoginModalContent";

export default function LoginModal() {
  const { isAuthModalOpen } = useAuth();

  if (!isAuthModalOpen) return null;

  return <LoginModalContent />;
}
