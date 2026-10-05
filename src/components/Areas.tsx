"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { areas, whatsappLink } from "@/content/site";
import { AreaIcon } from "./icons";

export function Areas() {
  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="areas" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <h2 className="titulo text-[clamp(2rem,1.2rem+3vw,3.75rem)] lg:col-span-7">Áreas de atuação</h2>
        <p className="max-w-[30rem] text-pedra lg:col-span-5 lg:pt-4">
          O escritório atua em três frentes. Escolha a que mais se parece com a sua situação para ver
          os assuntos mais comuns.
        </p>
      </div>

      <ul className="mt-14 border-t border-fio md:mt-20">
        {areas.map((area, i) => {
          const isOpen = open === i;
          const active = isOpen || hover === i;
          return (
            <li key={area.id} className="border-b border-fio">
              <h3>
                <button
                  type="button"
                  id={`area-${area.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`painel-${area.id}`}
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-9"
                >
                  <span
                    className={`titulo text-[clamp(2.4rem,1rem+5.2vw,5.25rem)] transition-colors duration-500 ${
                      active ? "text-marfim" : "text-pedra/55"
                    }`}
                  >
                    {area.name}
                  </span>
                  <AreaIcon
                    id={area.id}
                    active={active}
                    className={`h-18 w-auto shrink-0 transition-colors duration-500 md:h-24 ${
                      active ? "text-ouro-claro" : "text-pedra"
                    }`}
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`painel-${area.id}`}
                    role="region"
                    aria-labelledby={`area-${area.id}`}
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <div className="grid gap-x-10 gap-y-8 pb-10 md:pb-14 lg:grid-cols-12">
                      <div className="lg:col-span-5">
                        <p className="max-w-[30rem] text-lg text-marfim/90">{area.summary}</p>
                        <a
                          href={whatsappLink(`Olá! Preciso de orientação sobre um ${area.caseLabel}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-block border-b border-ouro/60 pb-1 text-ouro-claro transition-colors hover:border-ouro-claro"
                        >
                          Falar sobre um {area.caseLabel}
                        </a>
                      </div>
                      <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
                        {area.matters.map((m) => (
                          <li key={m} className="flex gap-4 border-t border-fio py-4 text-marfim/90">
                            <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-ouro" />
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
