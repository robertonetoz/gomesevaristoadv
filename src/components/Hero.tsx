"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { site } from "@/content/site";
import { StarIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";

const lines = ["Advocacia", "cível, trabalhista", "e de família."];
const saida = [0.2, 0.8, 0.2, 1] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const fotoY = useTransform(scrollY, [0, 900], [0, 46]);
  const ecoY = useTransform(scrollY, [0, 900], [0, -70]);

  return (
    <section id="topo" className="relative mx-auto max-w-[84rem] px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
      <div className="grid items-end gap-x-10 gap-y-16 lg:grid-cols-12">
        <div className="lg:col-span-8 lg:pb-6">
          <h1 className="titulo text-[clamp(2.1rem,0.9rem+5.4vw,5.5rem)]">
            {lines.map((line, i) => (
              <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.16em]">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.25 + i * 0.11, ease: saida }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="mt-8 max-w-[34rem] text-lg text-pedra md:text-xl">
              Em Araguari, Minas Gerais, e online para todo o Brasil. Esther Evaristo e Diego Ventura
              explicam cada etapa do seu caso em linguagem simples.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
              <WhatsAppButton />
              <a
                href="#areas"
                className="border-b border-ouro/60 pb-1 text-marfim transition-colors hover:border-ouro-claro hover:text-ouro-claro"
              >
                Ver áreas de atuação
              </a>
            </div>

            <a href="#avaliacoes" className="group mt-14 inline-flex items-center gap-4 text-[0.9375rem] text-pedra">
              <span className="flex gap-1 text-ouro" aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} className="size-3.5" />
                ))}
              </span>
              <span className="transition-colors group-hover:text-marfim">
                Nota {site.google.rating} no Google, em {site.google.count} avaliações
              </span>
            </a>
          </motion.div>
        </div>

        {/* A cápsula do logo, usada como janela para os advogados. */}
        <div className="lg:col-span-4">
          <figure className="relative mx-auto w-[min(68vw,21.5rem)] lg:ml-auto lg:mr-0">
            <motion.svg
              viewBox="0 0 360 640"
              fill="none"
              aria-hidden="true"
              className="absolute -left-7 -top-7 w-full overflow-visible md:-left-10 md:-top-10"
              style={{ y: ecoY }}
            >
              <motion.rect
                x="1"
                y="1"
                width="358"
                height="638"
                rx="179"
                stroke="#c8a04a"
                strokeOpacity="0.35"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.4, delay: 0.5, ease: saida }}
              />
            </motion.svg>

            <div className="relative aspect-[9/16]">
              <motion.div
                className="absolute inset-[4.5%] overflow-hidden rounded-full bg-carvao"
                initial={{ clipPath: "inset(100% 0 0 0 round 999px)" }}
                animate={{ clipPath: "inset(0% 0 0 0 round 999px)" }}
                transition={{ duration: 1.5, delay: 0.55, ease: saida }}
              >
                <motion.div className="absolute -inset-y-[7%] inset-x-0" style={{ y: fotoY }}>
                  <Image
                    src="/images/advge.webp"
                    alt="Esther Evaristo e Diego Ventura em frente ao painel de mármore do escritório"
                    fill
                    preload
                    sizes="(min-width: 1024px) 344px, 68vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-nanquim/55 via-transparent to-transparent" />
              </motion.div>

              <svg viewBox="0 0 360 640" fill="none" aria-hidden="true" className="absolute inset-0 size-full">
                <defs>
                  <linearGradient id="folha-capsula" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8c6a1f" />
                    <stop offset="0.3" stopColor="#c8a04a" />
                    <stop offset="0.5" stopColor="#f3dc9a" />
                    <stop offset="0.72" stopColor="#c8a04a" />
                    <stop offset="1" stopColor="#8c6a1f" />
                  </linearGradient>
                </defs>
                <motion.rect
                  x="1.5"
                  y="1.5"
                  width="357"
                  height="637"
                  rx="178.5"
                  stroke="url(#folha-capsula)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.9, delay: 0.15, ease: saida }}
                />
              </svg>
            </div>

            <motion.figcaption
              className="mt-6 text-center text-sm text-pedra"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              Esther Evaristo e Diego Ventura
            </motion.figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
