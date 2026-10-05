"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { mapsEmbed, mapsLink, site } from "@/content/site";
import { ClockIcon, PinIcon } from "./icons";

function Frame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className={`relative aspect-[16/9] overflow-hidden rounded-full border border-ouro/70 bg-carvao ${className}`}>
      <motion.div className="absolute -inset-y-[9%] inset-x-0" style={{ y }}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 700px, 92vw" className="object-cover" />
      </motion.div>
    </div>
  );
}

export function Office() {
  return (
    <section id="escritorio" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <h2 className="titulo text-[clamp(2rem,1.2rem+3vw,3.75rem)] lg:col-span-7">O escritório</h2>
        <p className="max-w-[30rem] text-pedra lg:col-span-5 lg:pt-4">
          Um espaço reservado no bairro Goiás, em Araguari, para conversar com calma sobre o seu caso.
        </p>
      </div>

      <div className="mt-14 grid items-center gap-x-10 gap-y-6 md:mt-20 lg:grid-cols-12">
        <Frame
          src="/images/escritorioge2.webp"
          alt="Sala de atendimento com mesa de madeira e o logo Gomes Evaristo no painel de mármore"
          className="lg:col-span-7"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:pl-8">
          <Frame
            src="/images/escritorioge.webp"
            alt="Mesa de reunião e duas estações de trabalho do escritório"
            className="lg:w-[88%]"
          />
          <Frame
            src="/images/escritorioge3.webp"
            alt="Vista da mesa de trabalho para a sala de reunião"
            className="lg:ml-auto lg:w-[88%]"
          />
        </div>
      </div>

      <div className="mt-16 grid gap-x-10 gap-y-10 md:mt-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <address className="not-italic">
            <p className="flex gap-4">
              <PinIcon className="mt-1 size-5 shrink-0 text-ouro" />
              <span>
                <span className="titulo block text-3xl">{site.address.street}</span>
                <span className="mt-2 block text-pedra">
                  {site.address.district}, {site.address.cityState}, CEP {site.address.zip}
                </span>
              </span>
            </p>
            <p className="mt-6 flex gap-4 text-marfim/90">
              <ClockIcon className="mt-1 size-5 shrink-0 text-ouro" />
              {site.hours}
            </p>
          </address>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-9 mt-8 inline-block border-b border-ouro/60 pb-1 text-ouro-claro transition-colors hover:border-ouro-claro"
          >
            Traçar rota no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-fio lg:col-span-7">
          <iframe
            title="Mapa com a localização do escritório Gomes Evaristo em Araguari"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-72 w-full md:h-80 [filter:grayscale(1)_invert(0.92)_contrast(0.88)]"
          />
        </div>
      </div>
    </section>
  );
}
