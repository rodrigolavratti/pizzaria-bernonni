import Contato from "@/app/components/contato/Contato";
import Footer from "@/app/components/footer/Footer";
import Header from "@/app/components/header/Header";
import MenuSection from "@/app/components/menu-pizzas/MenuPizzas";
import Testemunhos from "@/app/components/testemunhos/Testemunhos";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-200 text-neutral-100 font-sans">
      <main>
        {/* HEADER */}
        <Header />

        {/* 2. CARDÁPIO DE PIZZAS */}
        <MenuSection />

        {/* 3. TESTEMUNHOS */}
        <Testemunhos />

        {/* 4. INFORMAÇÕES E CONTATO */}
        <Contato />
      </main>

      {/* 5. RODAPÉ */}
      <Footer />
    </div>
  );
}
