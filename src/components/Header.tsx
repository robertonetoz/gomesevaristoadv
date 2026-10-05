"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/content/site";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open ? "border-fio bg-nanquim/85 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[84rem] items-center justify-between gap-6 px-6 md:px-10">
        <a href="#topo" className="flex items-center gap-4" aria-label="Gomes Evaristo Advocacia, início">
          <Image src="/images/monograma.png" alt="" width={143} height={232} className="h-11 w-auto" preload />
          <span className="wordmark hidden text-marfim sm:block">Gomes Evaristo</span>
        </a>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.9375rem] text-pedra">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ouro-claro">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppButton compact className="max-[359px]:hidden" />
          <button
            type="button"
            className="relative size-11 rounded-full border border-fio lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-px w-4.5 -translate-x-1/2 bg-ouro-claro transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-px w-4.5 -translate-x-1/2 bg-ouro-claro transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movel"
            aria-label="Seções"
            className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-nanquim px-6 pb-10 pt-6 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul>
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  className="border-b border-fio"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <a href={item.href} className="titulo block py-4 text-4xl" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8" />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
