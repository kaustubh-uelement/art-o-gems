import type { Lot } from './data';

export function rng(seed: number): () => number {
  let s = (seed >>> 0) || 1;
  return () => { s = ((s * 1664525 + 1013904223) >>> 0); return s / 4294967296; };
}

const P = (x: number, y: number) => x.toFixed(1) + ',' + y.toFixed(1);
const esc = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

export interface PaintingOptions {
  seed: number;
  h?: number;
  colors: string[];
  fields: number;
  horizon?: boolean;
  line: string;
  strokes: number;
  marks?: number;
  cracks?: number;
  grain?: number;
  alt?: string;
}

export function painting(o: PaintingOptions): string {
  const r = rng(o.seed), W = 800, H = o.h || 800, c = o.colors, g = [];
  g.push(`<rect width="${W}" height="${H}" fill="${c[0]}"/>`);
  for (let i = 0; i < o.fields; i++) {
    const w = W * (.35 + r() * .75), h = H * (.18 + r() * .6), x = -40 + r() * (W - w * .4), y = -30 + r() * (H - h * .3);
    g.push(`<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="${c[1 + ((r() * (c.length - 1)) | 0)]}" opacity="${(.22 + r() * .5).toFixed(2)}" transform="rotate(${(r() * 6 - 3).toFixed(2)} ${(x + w / 2).toFixed(0)} ${(y + h / 2).toFixed(0)})"/>`);
  }
  if (o.horizon) { const y = H * (.42 + r() * .24); g.push(`<rect y="${y.toFixed(0)}" width="${W}" height="${(2 + r() * 5).toFixed(1)}" fill="${o.line}" opacity=".8"/>`); }
  for (let i = 0; i < o.strokes; i++) {
    const x1 = r() * W, y1 = r() * H, x2 = r() * W, y2 = r() * H;
    g.push(`<path d="M${P(x1, y1)} C${P(x1 + (r() * 400 - 200), y1 + (r() * 300 - 150))} ${P(x2 + (r() * 400 - 200), y2 + (r() * 300 - 150))} ${P(x2, y2)}" fill="none" stroke="${o.line}" stroke-width="${(1 + r() * 16).toFixed(1)}" opacity="${(.12 + r() * .4).toFixed(2)}" stroke-linecap="round"/>`);
  }
  for (let i = 0; i < (o.marks || 0); i++) {
    const x = r() * W, y = r() * H, s = 20 + r() * 130;
    g.push(r() > .5 ? `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(s / 2).toFixed(0)}" fill="none" stroke="${o.line}" stroke-width="${(1 + r() * 3).toFixed(1)}" opacity=".5"/>`
      : `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${s.toFixed(0)}" height="${s.toFixed(0)}" fill="${o.line}" opacity="${(.1 + r() * .3).toFixed(2)}"/>`);
  }
  let crack = ""; for (let i = 0; i < (o.cracks || 0); i++) {
    const x = r() * W, y = r() * H; let d = `M${P(x, y)}`, cx = x, cy = y;
    for (let k = 0; k < 3; k++) { cx += r() * 40 - 20; cy += r() * 40 - 20; d += `L${P(cx, cy)}`; }
    crack += `<path d="${d}" fill="none" stroke="#0C1512" stroke-width=".7" opacity=".4"/>`;
  }
  let grain = ""; for (let i = 0; i < (o.grain || 0); i++) {
    grain += `<circle cx="${(r() * W).toFixed(0)}" cy="${(r() * H).toFixed(0)}" r="${(.5 + r() * 2.4).toFixed(1)}" fill="${r() > .5 ? '#F7F2E6' : '#0C1512'}" opacity="${(.05 + r() * .4).toFixed(2)}"/>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(o.alt || 'Artwork')}">${g.join("")}${crack}${grain}</svg>`;
}

export interface StoneOptions {
  seed: number;
  hue: string;
  bg: string;
  alt?: string;
}

export function stone(o: StoneOptions): string {
  const r = rng(o.seed), S = 800, cx = S / 2, cy = S / 2, R = S * .43, rt = R * .44, f = [];
  const pt = (a: number, rad: number) => [cx + Math.cos(a * Math.PI / 180 - Math.PI / 2) * rad, cy + Math.sin(a * Math.PI / 180 - Math.PI / 2) * rad];
  const G = (a: number) => pt(a, R * (.985 + r() * .03)), T = (k: number) => pt(45 * k + 22.5, rt);
  const sh = (base: string, l: number) => { const n = parseInt(base.slice(1), 16), R0 = n >> 16, G0 = (n >> 8) & 255, B0 = n & 255, m = (v: number) => Math.max(0, Math.min(255, Math.round(v + l * 255))); return `rgb(${m(R0)},${m(G0)},${m(B0)})` };
  f.push(`<rect width="${S}" height="${S}" fill="${o.bg}"/>`);
  f.push(`<circle cx="${cx}" cy="${cy}" r="${(R * 1.17).toFixed(0)}" fill="${sh(o.hue, -.17)}" opacity=".38"/>`);
  for (let k = 0; k < 8; k++) {
    const T0 = T(k), T1 = T((k + 1) % 8);
    const kite = [T0, G(45 * k), G(45 * k + 22.5), G(45 * k + 45)];
    f.push(`<polygon points="${kite.map(p => P(p[0], p[1])).join(" ")}" fill="${sh(o.hue, (r() * .34 - .15))}" stroke="${sh(o.hue, .2)}" stroke-width=".6" stroke-opacity=".55"/>`);
    f.push(`<polygon points="${[T0, T1, G(45 * k + 45)].map(p => P(p[0], p[1])).join(" ")}" fill="${sh(o.hue, (r() * .4 - .24))}" stroke="${sh(o.hue, .18)}" stroke-width=".6" stroke-opacity=".5"/>`);
  }
  const table = [...Array(8)].map((_, k) => T(k)), tp = table.map(p => P(p[0], p[1])).join(" ");
  f.push(`<polygon points="${tp}" fill="${sh(o.hue, .05)}"/>`);
  f.push(`<polygon points="${tp}" fill="url(#gl${o.seed})"/>`);
  f.push(`<polygon points="${tp}" fill="none" stroke="${sh(o.hue, .3)}" stroke-width="1.2" stroke-opacity=".7"/>`);
  f.push(`<path d="M${P(cx - R * .34, cy - R * .3)} L${P(cx - R * .02, cy - R * .46)} L${P(cx + R * .06, cy - R * .3)} L${P(cx - R * .24, cy - R * .14)} Z" fill="#fff" opacity=".5"/>`);
  f.push(`<circle cx="${(cx + R * .3).toFixed(0)}" cy="${(cy + R * .28).toFixed(0)}" r="${(R * .08).toFixed(0)}" fill="#fff" opacity=".26"/>`);
  return `<svg viewBox="0 0 ${S} ${S}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(o.alt || 'Gemstone')}"><defs><radialGradient id="gl${o.seed}" cx="35%" cy="30%"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>${f.join("")}</svg>`;
}

export interface PearlOptions {
  seed: number;
  bg: string;
  body: string;
  mid: string;
  edge: string;
  over: string;
  alt?: string;
}

export function pearl(o: PearlOptions): string {
  const r = rng(o.seed), S = 800, f = [];
  f.push(`<rect width="${S}" height="${S}" fill="${o.bg}"/>`);
  f.push(`<defs><radialGradient id="pl${o.seed}" cx="36%" cy="30%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".28" stop-color="${o.body}"/><stop offset=".72" stop-color="${o.mid}"/><stop offset="1" stop-color="${o.edge}"/></radialGradient>
  <radialGradient id="ov${o.seed}" cx="62%" cy="72%"><stop offset="0" stop-color="${o.over}" stop-opacity=".55"/><stop offset="1" stop-color="${o.over}" stop-opacity="0"/></radialGradient></defs>`);
  f.push(`<circle cx="400" cy="400" r="288" fill="url(#pl${o.seed})"/>`);
  f.push(`<circle cx="400" cy="400" r="288" fill="url(#ov${o.seed})"/>`);
  for (let i = 0; i < 70; i++) { const a = r() * 6.283, d = r() * 286; f.push(`<circle cx="${(400 + Math.cos(a) * d).toFixed(0)}" cy="${(400 + Math.sin(a) * d).toFixed(0)}" r="${(.6 + r() * 1.6).toFixed(1)}" fill="#fff" opacity="${(.06 + r() * .2).toFixed(2)}"/>`); }
  f.push(`<ellipse cx="316" cy="300" rx="58" ry="40" fill="#fff" opacity=".72" transform="rotate(-22 316 300)"/>`);
  f.push(`<circle cx="400" cy="400" r="288" fill="none" stroke="#fff" stroke-opacity=".35"/>`);
  return `<svg viewBox="0 0 ${S} ${S}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(o.alt || 'Pearl')}">${f.join("")}</svg>`;
}

export function portrait(seed: number): string {
  const r = rng(seed), S = 800, H = 1000, f = [];
  const tone = ["#DCE3DE", "#CBD8CF", "#E2E0D2", "#D3DBDD"][seed % 4];
  f.push(`<rect width="${S}" height="${H}" fill="${tone}"/>`);
  f.push(`<circle cx="400" cy="${(380 + r() * 40).toFixed(0)}" r="${(150 + r() * 24).toFixed(0)}" fill="#0B6046" opacity=".16"/>`);
  f.push(`<path d="M150 ${H} Q400 ${(560 + r() * 80).toFixed(0)} 650 ${H} Z" fill="#0B6046" opacity=".22"/>`);
  for (let i = 0; i < 3; i++) f.push(`<circle cx="400" cy="400" r="${(180 + i * 46).toFixed(0)}" fill="none" stroke="#052E22" stroke-opacity=".1"/>`);
  return `<svg viewBox="0 0 ${S} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Portrait placeholder">${f.join("")}</svg>`;
}

export function artSvg(lot: Lot): string {
  if (lot.artType === 'painting') return painting(lot.artConfig as PaintingOptions);
  if (lot.artType === 'stone') return stone(lot.artConfig as StoneOptions);
  if (lot.artType === 'pearl') return pearl(lot.artConfig as PearlOptions);
  return '';
}

export function artHiSvg(lot: Lot): string {
  if (lot.artType === 'painting') {
    const cfg = { ...(lot.artConfig as PaintingOptions), grain: 1100, cracks: 170 };
    return painting(cfg);
  }
  return artSvg(lot);
}
