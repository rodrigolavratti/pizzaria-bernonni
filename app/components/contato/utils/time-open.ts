export interface BusinessHours {
  isOpen: boolean;
  message: string;
}

export function checkIsPizzeriaOpen(): BusinessHours {
  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Segunda, 2 = Terça, ..., 6 = Sábado
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours + minutes / 60;

  // 1. Segunda-feira (1): Fechado
  if (day === 1) {
    return {
      isOpen: false,
      message: "Fechado Hoje • Abrimos Terça às 18h",
    };
  }

  // 2. Sexta (5) e Sábado (6): 18:00 às 00:00 (24h)
  if (day === 5 || day === 6) {
    const isOpen = currentTime >= 18 && currentTime < 24;
    return {
      isOpen,
      message: isOpen
        ? "Aberto Agora • Forno a Todo Vapor"
        : "Fechado No Momento • Abrimos às 18h",
    };
  }

  // 3. Domingo (0): 18:00 às 23:30 (23.5)
  if (day === 0) {
    const isOpen = currentTime >= 18 && currentTime < 23.5;
    return {
      isOpen,
      message: isOpen
        ? "Aberto Agora • Forno a Todo Vapor"
        : "Fechado No Momento • Abrimos às 18h",
    };
  }

  // 4. Terça (2), Quarta (3) e Quinta (4): 18:00 às 23:00 (23.0)
  const isOpen = currentTime >= 18 && currentTime < 23;
  return {
    isOpen,
    message: isOpen
      ? "Aberto Agora • Forno a Todo Vapor"
      : "Fechado No Momento • Abrimos às 18h",
  };
}

export function getCurrentDayGroup(): "tue-thu" | "fri-sat" | "sun" | "mon" {
  const day = new Date().getDay(); // 0 = Dom, 1 = Seg, 2 = Ter, 3 = Qua, 4 = Qui, 5 = Sex, 6 = Sáb

  if (day === 1) return "mon";
  if (day === 5 || day === 6) return "fri-sat";
  if (day === 0) return "sun";
  return "tue-thu"; // 2, 3, 4 (Terça a Quinta)
}
