import Image from "next/image";
import { lawyers, nav, site } from "@/content/site";

export function Footer() {
  const oabs = lawyers.filter((l) => l.oab).map((l) => `${l.name}, ${l.oab}`);

  return (
    <footer className="border-t border-fio">
      <div className="mx-auto grid max-w-[84rem] gap-x-10 gap-y-12 px-6 py-16 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Image src="/images/logo.png" alt="Gomes Evaristo Advocacia" width={443} height={328} className="h-auto w-44" />
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-6">
          <ul className="space-y-2 text-pedra">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ouro-claro">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="space-y-2 not-italic text-pedra lg:col-span-4">
          <p>
            {site.address.street}, {site.address.district}
            <br />
            {site.address.cityState}, CEP {site.address.zip}
          </p>
          {site.phones.map((p) => (
            <p key={p.tel}>
              <a href={`tel:${p.tel}`} className="transition-colors hover:text-ouro-claro">
                {p.display}
              </a>
            </p>
          ))}
          <p>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-ouro-claro">
              {site.email}
            </a>
          </p>
        </address>
      </div>

      <div className="border-t border-fio">
        <div className="mx-auto flex max-w-[84rem] flex-col gap-2 px-6 py-6 text-sm text-pedra md:flex-row md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} {site.name}
            {oabs.length > 0 && `. ${oabs.join(". ")}`}
          </p>
          <p>Este site tem caráter informativo e não substitui uma consulta jurídica.</p>
        </div>
      </div>
    </footer>
  );
}
