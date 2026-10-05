import { lawyers } from "@/content/site";

export function Lawyers() {
  return (
    <section id="advogados" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <h2 className="titulo text-[clamp(2rem,1.2rem+3vw,3.75rem)]">Quem atende você</h2>

      <div className="mt-14 grid gap-x-10 gap-y-16 md:mt-20 lg:grid-cols-2">
        {lawyers.map((person) => (
          <article key={person.name} className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div
              role="img"
              aria-label={`Retrato de ${person.name}`}
              className="aspect-[9/15] w-40 shrink-0 rounded-full border border-ouro/70 bg-carvao bg-no-repeat md:w-48"
              style={{
                backgroundImage: "url(/images/advge.webp)",
                backgroundSize: person.crop.size,
                backgroundPosition: person.crop.position,
              }}
            />
            <div>
              <h3 className="titulo text-4xl md:text-5xl">{person.name}</h3>
              <p className="mt-3 text-ouro-claro">
                {person.role}
                {person.oab && <span className="text-pedra">, {person.oab}</span>}
              </p>
              <p className="mt-4 max-w-[26rem] text-pedra">{person.bio}</p>
              {person.links.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {person.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-ouro/60 pb-0.5 text-[0.9375rem] transition-colors hover:border-ouro-claro hover:text-ouro-claro"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
