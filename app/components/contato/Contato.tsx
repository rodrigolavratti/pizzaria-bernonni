export default function Contato() {
  return (
    <section
      className="py-16 px-6 max-w-7xl mx-auto"
      aria-labelledby="info-title"
    >
      <h2 id="info-title" className="sr-only">
        Informações de Contato e Horários
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Endereço */}
        <article className="bg-white text-neutral-900 p-8 rounded-lg shadow-lg text-center">
          <h3 className="font-extrabold tracking-wider mb-4 text-sm uppercase">
            ENCONTRE-NOS
          </h3>
          <address className="not-italic text-sm text-neutral-600 leading-relaxed">
            121 Rock Street, 21 Avenue,
            <br />
            New York, NY 92103-9000
          </address>
        </article>

        {/* Horários */}
        <article className="bg-white text-neutral-900 p-8 rounded-lg shadow-lg text-center">
          <h3 className="font-extrabold tracking-wider mb-4 text-sm uppercase">
            HORAS
          </h3>
          <div className="text-sm text-neutral-600 space-y-2">
            <p>
              <strong>Segunda a Sábado</strong>
              <br />
              <time dateTime="09:00">9h</time> às{" "}
              <time dateTime="19:00">19h</time>
            </p>
            <p>
              <strong>Domingo</strong>
              <br />
              <time dateTime="10:00">10h</time> às{" "}
              <time dateTime="18:00">18h</time>
            </p>
          </div>
        </article>

        {/* Telefones */}
        <article className="bg-white text-neutral-900 p-8 rounded-lg shadow-lg text-center">
          <h3 className="font-extrabold tracking-wider mb-4 text-sm uppercase">
            LIGUE PARA NÓS
          </h3>
          <div className="text-sm text-neutral-600 space-y-2">
            <p>
              <a
                href="tel:+1234567891"
                className="text-red-600 font-bold hover:underline"
              >
                1 (234) 567-891
              </a>
            </p>
            <p>
              <a
                href="tel:+2345333897"
                className="text-red-600 font-bold hover:underline"
              >
                2 (345) 333-897
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
