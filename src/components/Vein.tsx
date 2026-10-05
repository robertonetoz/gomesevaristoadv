"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

// Veio de mármore: o mesmo desenho da parede do escritório, em ouro.
// O traçado é gerado uma única vez, com semente fixa, para ser idêntico
// no servidor e no navegador.

type Pt = [number, number];

function prng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

function veio(anchors: Pt[], seed: number, jitterX: number, jitterY: number, steps = 5): string {
  const rand = prng(seed);
  const pts: Pt[] = [];
  for (let i = 0; i < anchors.length - 1; i++) {
    const [x0, y0] = anchors[i];
    const [x1, y1] = anchors[i + 1];
    for (let s = 0; s < steps; s++) {
      const t = s / steps;
      const edge = s === 0 ? 0 : 1;
      pts.push([
        x0 + (x1 - x0) * t + (rand() - 0.5) * jitterX * edge,
        y0 + (y1 - y0) * t + (rand() - 0.5) * jitterY * edge,
      ]);
    }
  }
  pts.push(anchors[anchors.length - 1]);

  const f = (n: number) => n.toFixed(1);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2;
    const my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += `Q${f(pts[i][0])} ${f(pts[i][1])} ${f(mx)} ${f(my)}`;
  }
  const last = pts[pts.length - 1];
  return `${d}L${f(last[0])} ${f(last[1])}`;
}

const principal = veio(
  [
    [985, 0],
    [960, 70],
    [990, 130],
    [600, 172],
    [120, 205],
    [18, 250],
    [40, 340],
    [14, 420],
    [380, 462],
    [900, 498],
    [985, 545],
    [965, 640],
    [990, 705],
    [520, 742],
    [70, 775],
    [16, 830],
    [34, 905],
    [420, 948],
    [820, 1000],
  ],
  7,
  34,
  7,
);

const ramos = [
  veio([[990, 130], [940, 175], [975, 240], [950, 300]], 21, 22, 8, 4),
  veio([[18, 250], [150, 268], [300, 262], [430, 284]], 33, 16, 7, 4),
  veio([[14, 420], [50, 470], [22, 530], [46, 580]], 45, 20, 8, 4),
  veio([[985, 545], [860, 568], [720, 560], [610, 582]], 57, 16, 7, 4),
  veio([[16, 830], [130, 852], [250, 846]], 69, 16, 6, 4),
];

export function Vein({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.82", "end 0.82"] });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.6 });
  const clipPath = useTransform(progress, (p) => `inset(0 0 ${((1 - p) * 100).toFixed(2)}% 0)`);

  return (
    <div ref={ref} className="relative isolate overflow-x-clip">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 md:opacity-100"
        style={reduced ? undefined : { clipPath }}
      >
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" fill="none" className="size-full">
          <path d={principal} stroke="#c8a04a" strokeOpacity="0.38" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          {ramos.map((d) => (
            <path key={d} d={d} stroke="#c8a04a" strokeOpacity="0.2" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
      </motion.div>
      {children}
    </div>
  );
}
