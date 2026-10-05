"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { mapsLink, reviews, site } from "@/content/site";
import { StarIcon } from "./icons";

const INTERVALO = 8000;

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const auto = !paused && !reduced;

  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % reviews.length), INTERVALO);
    return () => clearTimeout(t);
  }, [auto, index]);

  const review = reviews[index];

  return (
    <section id="avaliacoes" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <h2 className="titulo text-[clamp(2rem,1.2rem+3vw,3.75rem)] lg:col-span-8">
          Nota {site.google.rating} no Google, em {site.google.count} avaliações de clientes
        </h2>
        <div className="flex items-start gap-1.5 text-ouro lg:col-span-4 lg:justify-end lg:pt-5" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} className="size-5" />
          ))}
        </div>
      </div>

      <div
        className="mt-14 grid gap-x-10 gap-y-12 border-t border-fio pt-12 md:mt-20 md:pt-16 lg:grid-cols-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="min-h-[22rem] sm:min-h-[17rem] lg:col-span-8 lg:min-h-[19rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={review.author}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="titulo text-[clamp(1.6rem,1.1rem+1.9vw,2.75rem)] leading-[1.22]">
                <span aria-hidden="true" className="folha-texto">
                  “
                </span>
                {review.text}
                <span aria-hidden="true" className="folha-texto">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-8 text-pedra">
                <span className="text-marfim">{review.author}</span>, avaliação publicada no Google
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-3 lg:col-start-10">
          <ul aria-label="Escolher avaliação">
            {reviews.map((r, i) => {
              const current = i === index;
              return (
                <li key={r.author} className="relative border-b border-fio">
                  <button
                    type="button"
                    aria-current={current}
                    onClick={() => setIndex(i)}
                    className={`w-full py-3 text-left transition-colors ${
                      current ? "text-ouro-claro" : "text-pedra hover:text-marfim"
                    }`}
                  >
                    {r.author}
                  </button>
                  {current && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-px h-px origin-left bg-ouro-claro"
                      style={
                        reduced
                          ? undefined
                          : {
                              animation: `avanco ${INTERVALO}ms linear forwards`,
                              animationPlayState: paused ? "paused" : "running",
                            }
                      }
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b border-ouro/60 pb-1 text-ouro-claro transition-colors hover:border-ouro-claro"
          >
            Ler todas no Google
          </a>
        </div>
      </div>
    </section>
  );
}
