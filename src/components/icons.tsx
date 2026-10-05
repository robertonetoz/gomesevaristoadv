"use client";

import { motion } from "motion/react";
import type { AreaId } from "@/content/site";

type IconProps = React.SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2Z" />
      <path d="M9 8.2c-.4 0-.8.3-1 .8-.4 1 0 2.4 1.200 3.900 1.300 1.600 2.900 2.500 4.200 2.600.6 0 1.200-.3 1.500-.9l.2-.6-1.700-1-.7.700c-.7-.2-1.800-1.100-2.300-2.100l.6-.8-.9-1.700Z" />
    </Icon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M8 10.6v5.900M8 7.700v.1M11.600 16.500v-5.900M11.600 13.300c0-1.600 1-2.700 2.300-2.700s2.100 1 2.100 2.500v3.400" />
    </Icon>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M13.400 3.800v10.900a3.300 3.300 0 1 1-3.300-3.300" />
      <path d="M13.400 3.800c.3 2.500 1.900 4.100 4.400 4.300" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.600 4.300h2.500l1.300 3.700-1.800 1.300a10.400 10.400 0 0 0 5 5l1.300-1.800 3.700 1.300v2.500c0 .9-.7 1.600-1.600 1.600C10.300 17.600 5.400 12.700 5 6c0-.9.700-1.700 1.600-1.700Z" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.500" y="5.500" width="17" height="13" rx="2.500" />
      <path d="m4.500 7.500 7.500 5.500 7.500-5.500" />
    </Icon>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s6.200-5.500 6.200-10.400a6.200 6.200 0 0 0-12.400 0C5.800 15.500 12 21 12 21Z" />
      <circle cx="12" cy="10.500" r="2.200" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.500" />
      <path d="M12 7.300V12l3 1.900" />
    </Icon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="m12 3 2.600 5.700 6.200.7-4.600 4.200 1.300 6.100L12 16.600l-5.500 3.100 1.300-6.100-4.600-4.200 6.200-.7Z"
      />
    </svg>
  );
}

const areaShapes: Record<AreaId, string[]> = {
  // Carteira de trabalho
  trabalhista: [
    "M17 30h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H17Z",
    "M21 30v28",
    "M33.200 40a3.200 3.200 0 1 1-6.400 0 3.200 3.200 0 0 1 6.400 0Z",
    "M26 48.500h9M26 52.500h5.500",
  ],
  // Contrato assinado
  civel: [
    "M18 30h13.500l6.500 6.500V58H18Z",
    "M31.500 30v6.500H38",
    "M22.500 46.500c1.800-3.600 3 3.200 5 0s3.200 3.200 5.500-.5",
    "M22.500 52.500h7",
  ],
  // Alianças e o filho
  familia: [
    "M30.700 40.500a6.700 6.700 0 1 1-13.400 0 6.700 6.700 0 0 1 13.400 0Z",
    "M38.700 40.500a6.700 6.700 0 1 1-13.400 0 6.700 6.700 0 0 1 13.400 0Z",
    "M31.800 53.500a3.800 3.800 0 1 1-7.600 0 3.800 3.800 0 0 1 7.600 0Z",
  ],
};

/** Ícone de área dentro da cápsula do logo. Redesenha o traço quando fica ativo. */
export function AreaIcon({ id, active, className }: { id: AreaId; active: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 56 88"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="1" y="1" width="54" height="86" rx="27" opacity={active ? 1 : 0.45} />
      {areaShapes[id].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          initial={false}
          animate={active ? { pathLength: [0, 1], opacity: 1 } : { pathLength: 1, opacity: 0.55 }}
          transition={{ duration: active ? 0.9 : 0.3, delay: active ? 0.12 * i : 0, ease: [0.2, 0.8, 0.2, 1] }}
        />
      ))}
    </svg>
  );
}
