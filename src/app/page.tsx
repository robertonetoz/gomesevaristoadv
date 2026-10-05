import { Areas } from "@/components/Areas";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Lawyers } from "@/components/Lawyers";
import { Office } from "@/components/Office";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Vein } from "@/components/Vein";

export default function Home() {
  return (
    <>
      <a
        href="#areas"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ouro-claro focus:px-5 focus:py-2 focus:text-nanquim"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <Vein>
        <main>
          <Hero />
          <Areas />
          <Process />
          <Lawyers />
          <Office />
          <Reviews />
          <Faq />
          <Contact />
        </main>
      </Vein>
      <Footer />
    </>
  );
}
