import AddToCartButton from "@/app/components/menu-pizzas/add-to-cart-button/AddToCartButton";
import { pizzas } from "@/app/constants";
import Image from "next/image";

export default function MenuSection() {
  return (
    <section
      className="relative z-10 -mt-24 px-6 py-16"
      aria-labelledby="menu-title"
    >
      <div className="mx-auto max-w-7xl">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza) => (
            <li key={pizza.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white text-neutral-900 shadow-lg">
                <div className="relative h-80 w-full">
                  <Image
                    src={pizza.imagem}
                    alt={pizza.imagemAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                <div className="flex grow flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{pizza.nome}</h3>
                    <p className="mb-4 text-sm text-neutral-600">
                      {pizza.descricao}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
                    <span className="text-2xl font-bold text-black-900">
                      R$ {pizza.preco.toFixed(2).replace(".", ",")}
                    </span>
                    <AddToCartButton />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
