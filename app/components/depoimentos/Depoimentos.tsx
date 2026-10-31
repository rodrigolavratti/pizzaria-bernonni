import Image from "next/image";

export default function Depoimentos() {
  return (
    <section
      className="py-6 px-6 max-w-7xl mx-auto"
      aria-labelledby="testimonials-title"
    >
      <h2
        id="testimonials-title"
        className="text-black text-3xl font-bold mb-8"
      >
        Depoimentos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <figure className="relative">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/pizza-calabresa.jpeg"
              alt="Fatias de pizza de calabresa"
              fill
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </figure>

        <ul className="space-y-8">
          <li>
            <figure>
              <blockquote className="text-black italic text-sm md:text-base border-l-4 border-red-600 pl-4 py-1">
                <p>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus.
                </p>
              </blockquote>
              <figcaption className="mt-2 font-bold text-black text-sm">
                — <cite className="not-italic">Célia Almeida</cite>
              </figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <blockquote className="text-black italic text-sm md:text-base border-l-4 border-red-600 pl-4 py-1">
                <p>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus.
                </p>
              </blockquote>
              <figcaption className="mt-2 font-bold text-black text-sm">
                — <cite className="not-italic">Frank Kinney</cite>
              </figcaption>
            </figure>
          </li>

          <li>
            <figure>
              <blockquote className="text-black italic text-sm md:text-base border-l-4 border-red-600 pl-4 py-1">
                <p>
                  Proin sed libero enim sed faucibus turpis. At imperdiet dui
                  accumsan sit amet nulla facilisi morbi tempus.
                </p>
              </blockquote>
              <figcaption className="mt-2 font-bold text-black text-sm">
                — <cite className="not-italic">Phoebe Nelson</cite>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}
