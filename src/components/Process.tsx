"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { steps } from "@/content/site";

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 26 });

  return (
    <section id="atendimento" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <h2 className="titulo text-[clamp(2rem,1.2rem+3vw,3.75rem)] lg:col-span-7">
          Como funciona o atendimento
        </h2>
        <p className="max-w-[30rem] text-pedra lg:col-span-5 lg:pt-4">
          Do primeiro contato ao fim do processo, você sabe em que etapa está e o que vem a seguir.
        </p>
      </div>

      <ol ref={ref} className="relative mt-14 grid gap-x-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
        <motion.span
          aria-hidden="true"
          className="folha absolute inset-x-0 top-0 hidden h-px origin-left lg:block"
          style={{ scaleX }}
        />
        {steps.map((step, i) => (
          <li key={step.title} className="border-t border-fio py-8 lg:border-t-0 lg:pt-10">
            <span aria-hidden="true" className="titulo folha-texto block text-6xl italic">
              {i + 1}
            </span>
            <h3 className="mt-6 text-xl font-medium text-marfim">{step.title}</h3>
            <p className="mt-3 max-w-[22rem] text-pedra">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
