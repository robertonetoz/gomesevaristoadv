"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <h2 className="titulo text-[clamp(2rem,1.2rem+3vw,3.75rem)] lg:col-span-4">Dúvidas frequentes</h2>

        <ul className="border-t border-fio lg:col-span-7 lg:col-start-6">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className="border-b border-fio">
                <h3>
                  <button
                    type="button"
                    id={`duvida-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`resposta-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-medium transition-colors hover:text-ouro-claro md:text-xl"
                  >
                    {item.q}
                    <span aria-hidden="true" className="relative size-9 shrink-0 rounded-full border border-ouro/60">
                      <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 bg-ouro-claro" />
                      <span
                        className={`absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 bg-ouro-claro transition-transform duration-500 ease-saida ${
                          isOpen ? "rotate-0" : "rotate-90"
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`resposta-${i}`}
                      role="region"
                      aria-labelledby={`duvida-${i}`}
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      <p className="max-w-[38rem] pb-7 text-pedra">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
