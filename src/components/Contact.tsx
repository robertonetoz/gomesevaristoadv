"use client";

import { useState } from "react";
import { mapsLink, site, whatsappLink } from "@/content/site";
import { InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const assuntos = ["Cível", "Trabalhista", "Família", "Ainda não sei"];

const campo =
  "mt-2 w-full border-b border-fio bg-transparent pb-3 pt-1 text-lg text-marfim placeholder:text-pedra/60 transition-colors focus:border-ouro-claro focus:outline-none";

export function Contact() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState(assuntos[0]);
  const [relato, setRelato] = useState("");
  const [erros, setErros] = useState<{ nome?: string; relato?: string }>({});

  function abrirConversa(e: React.FormEvent) {
    e.preventDefault();
    const novos = {
      nome: nome.trim() ? undefined : "Escreva seu nome para começar a conversa.",
      relato: relato.trim() ? undefined : "Conte em poucas linhas o que aconteceu.",
    };
    setErros(novos);
    if (novos.nome || novos.relato) return;

    const area = assunto === "Ainda não sei" ? "ainda não sei qual é a área" : `área ${assunto.toLowerCase()}`;
    const mensagem = `Olá! Meu nome é ${nome.trim()}. Preciso de orientação (${area}).\n\n${relato.trim()}`;
    window.open(whatsappLink(mensagem), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="mx-auto max-w-[84rem] px-6 py-24 md:px-10 md:py-36">
      <div className="grid gap-x-10 gap-y-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="titulo text-[clamp(2.4rem,1rem+5.2vw,5.25rem)]">Conte o que aconteceu.</h2>
          <p className="mt-6 max-w-[32rem] text-lg text-pedra">
            Preencha abaixo e a conversa abre no WhatsApp do escritório com a sua mensagem pronta. Nada
            é enviado antes de você confirmar por lá.
          </p>

          <form onSubmit={abrirConversa} noValidate className="mt-12 max-w-[38rem] space-y-9">
            <div>
              <label htmlFor="nome" className="text-[0.9375rem] text-pedra">
                Seu nome
              </label>
              <input
                id="nome"
                name="nome"
                autoComplete="name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                aria-invalid={!!erros.nome}
                aria-describedby={erros.nome ? "erro-nome" : undefined}
                className={campo}
              />
              {erros.nome && (
                <p id="erro-nome" className="mt-2 text-[0.9375rem] text-ouro-claro">
                  {erros.nome}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="text-[0.9375rem] text-pedra">Assunto</legend>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {assuntos.map((a) => (
                  <label
                    key={a}
                    className="cursor-pointer rounded-full border border-fio px-5 py-2 text-[0.9375rem] transition-colors hover:border-ouro has-checked:border-ouro-claro has-checked:bg-ouro-claro has-checked:text-nanquim has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-ouro-claro"
                  >
                    <input
                      type="radio"
                      name="assunto"
                      value={a}
                      checked={assunto === a}
                      onChange={() => setAssunto(a)}
                      className="sr-only"
                    />
                    {a}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="relato" className="text-[0.9375rem] text-pedra">
                O que aconteceu
              </label>
              <textarea
                id="relato"
                name="relato"
                rows={3}
                value={relato}
                onChange={(e) => setRelato(e.target.value)}
                aria-invalid={!!erros.relato}
                aria-describedby={erros.relato ? "erro-relato" : undefined}
                placeholder="Ex.: fui demitido e não recebi as verbas da rescisão."
                className={`${campo} resize-y`}
              />
              {erros.relato && (
                <p id="erro-relato" className="mt-2 text-[0.9375rem] text-ouro-claro">
                  {erros.relato}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="folha inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 font-semibold text-nanquim"
            >
              <WhatsAppIcon className="size-5" strokeWidth={1.5} />
              Abrir conversa no WhatsApp
            </button>
          </form>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 lg:pt-6">
          <ul className="border-t border-fio">
            {site.phones.map((phone, i) => (
              <li key={phone.tel} className="border-b border-fio">
                <a
                  href={i === 0 ? whatsappLink() : `tel:${phone.tel}`}
                  target={i === 0 ? "_blank" : undefined}
                  rel={i === 0 ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-5"
                >
                  {i === 0 ? (
                    <WhatsAppIcon className="size-5 shrink-0 text-ouro" />
                  ) : (
                    <PhoneIcon className="size-5 shrink-0 text-ouro" />
                  )}
                  <span>
                    <span className="block text-[0.9375rem] text-pedra">{phone.label}</span>
                    <span className="titulo block text-2xl transition-colors group-hover:text-ouro-claro">
                      {phone.display}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="border-b border-fio">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-4 py-5">
                <MailIcon className="size-5 shrink-0 text-ouro" />
                <span>
                  <span className="block text-[0.9375rem] text-pedra">E-mail</span>
                  <span className="block break-all transition-colors group-hover:text-ouro-claro">{site.email}</span>
                </span>
              </a>
            </li>
            <li className="border-b border-fio">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5">
                <PinIcon className="size-5 shrink-0 text-ouro" />
                <span>
                  <span className="block text-[0.9375rem] text-pedra">Endereço</span>
                  <span className="block transition-colors group-hover:text-ouro-claro">
                    {site.address.street}, {site.address.district}, {site.address.cityState}
                  </span>
                </span>
              </a>
            </li>
          </ul>

          <ul className="mt-8 flex gap-3">
            {[
              { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
              { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
              { label: "TikTok", href: site.social.tiktok, Icon: TikTokIcon },
            ].map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-14 w-10 items-center justify-center rounded-full border border-ouro/60 text-ouro-claro transition-colors hover:bg-ouro-claro hover:text-nanquim"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
