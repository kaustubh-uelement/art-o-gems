export interface Lot {
  no: string;
  cat: string;
  artist: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  lo: number;
  hi: number;
  desc: string;
  prov: string;
  cond: string;
  flag?: string;
  artType: 'painting' | 'stone' | 'pearl';
  artConfig: any;
}

export interface Sale {
  slug: string;
  name: string;
  when: string;
  view: string;
  lots: number;
  state: string;
  blurb: string;
}

export interface Result {
  sale: string;
  lot: string;
  what: string;
  est: string;
  ham: string;
}

export interface TeamMember {
  n: string;
  r: string;
  b: string;
}

export interface Exhibition {
  when: string;
  t: string;
  s: string;
  d: string;
  st: string;
}

export type NavItem = [string, string];

export const LOTS: Lot[] = [
  { no: "03", cat: "art", artist: "Meher Anand", title: "Monsoon Interval III", year: "2019", medium: "Oil and marble dust on linen", size: "152 × 122 cm", lo: 1800000, hi: 2400000, desc: "Signed and dated on the reverse. From the second Monsoon Interval group, in which Anand worked the marble dust into the ground while it was still wet, leaving a surface that reads as stone from a distance and as weather up close.", prov: "Acquired directly from the artist, Bombay, 2019; private collection, Pune.", cond: "Overall good. Fine drying craquelure in the upper green passage, stable. Unlined, on original stretcher. UV shows no retouching.", artType: "painting", artConfig: { seed: 7, fields: 5, strokes: 5, marks: 2, grain: 150, cracks: 26, colors: ["#12201C","#2E8C7A","#3D5A52","#9E6B3A","#1B3A34"], line: "#E8E2D2", alt: "Monsoon Interval III", horizon: true, h: 1000 } },
  { no: "07", cat: "art", artist: "Devika Rao Naik", title: "Salt Ledger", year: "2016", medium: "Ink, gouache and thread on Sanganer paper", size: "76 × 56 cm", lo: 600000, hi: 900000, desc: "One of nine ledger sheets, each recording a week of tidal readings from the Konkan coast as a grid of stitched marks.", prov: "Private consignment, Bombay; thence by descent.", cond: "Minor foxing lower left, visible in raking light. Thread intact throughout. Hinged, not laid down.", artType: "painting", artConfig: { seed: 23, fields: 3, strokes: 2, marks: 9, grain: 150, cracks: 26, colors: ["#E6E2D6","#C7412F","#1B2B3A","#D9B24C"], line: "#1B2B3A", alt: "Salt Ledger" } },
  { no: "12", cat: "jewels", artist: "Kashmir sapphire, unheated", title: "Cushion-cut, 4.16 carats", year: "", medium: "Unmounted stone", size: "4.16 ct · 9.8 × 8.6 × 6.1 mm", lo: 11000000, hi: 16000000, desc: "Velvety cornflower blue with the fine silk typical of the Padar workings. Even saturation, no zoning visible face-up.", prov: "From a Bombay family collection, by descent. Laboratory report, 2024.", cond: "No indication of heating. Minor abrasion to one girdle facet, not visible mounted.", flag: "Lab report", artType: "stone", artConfig: { seed: 12, hue: "#2A5BA8", bg: "#0A1424", alt: "Kashmir sapphire" } },
  { no: "15", cat: "art", artist: "Jehangir Mistry", title: "Ballast (Study for a Harbour)", year: "1994", medium: "Bronze with brown patina, edition 2 of 6", size: "Height 61 cm", lo: 1200000, hi: 1800000, desc: "Cast at the sculptor's Baroda foundry. Stamped, numbered and dated on the underside of the base.", prov: "The sculptor's estate; private collection, Ahmedabad.", cond: "Patina even and original. Light surface dust. No casting faults noted.", artType: "painting", artConfig: { seed: 31, fields: 5, strokes: 8, marks: 1, grain: 150, cracks: 26, colors: ["#171412","#4A3A28","#7A5C34","#2A2420"], line: "#C99A56", alt: "Ballast" } },
  { no: "18", cat: "jewels", artist: "Old mine-cut diamond rivière", title: "Approximately 22.40 carats total", year: "Late 19th century", medium: "Silver-topped gold, 41 stones", size: "Length 39 cm", lo: 8500000, hi: 12000000, desc: "Forty-one graduated old mine-cut stones in cut-down collets, the largest approximately 1.20 carats.", prov: "Property of a lady, Hyderabad.", cond: "Later clasp, well matched. Two collets with old solder repairs. Stones bright, no chips seen under 10× loupe.", artType: "stone", artConfig: { seed: 18, hue: "#C9CBD0", bg: "#14171C", alt: "Old mine-cut diamond rivière" } },
  { no: "21", cat: "art", artist: "Ayesha Qureshi", title: "Nine Rooms, One Window", year: "2021", medium: "Acrylic and screenprint on canvas", size: "183 × 183 cm", lo: 2200000, hi: 3000000, desc: "The largest canvas from the Rooms series, screenprinted in nine passes over a hand-painted violet ground.", prov: "The artist's studio, Lahore; private collection, Singapore. Exhibited Colombo, 2022.", cond: "Excellent. Unvarnished, as intended.", flag: "Exhibited", artType: "painting", artConfig: { seed: 44, fields: 7, strokes: 2, marks: 6, grain: 150, cracks: 26, colors: ["#1A1622","#D2436E","#3E3160","#E2CDA6","#2E8C7A"], line: "#F4F3ED", alt: "Nine Rooms, One Window" } },
  { no: "24", cat: "jewels", artist: "Paraíba-type tourmaline", title: "Oval, 3.02 carats", year: "", medium: "Unmounted stone", size: "3.02 ct · 10.1 × 7.4 mm", lo: 4000000, hi: 6000000, desc: "Copper-bearing tourmaline of Mozambique origin, the colour a saturated neon blue-green that holds under incandescent light.", prov: "Acquired Bangkok, 2018; private collection.", cond: "Minor clarity enhancement noted in the laboratory report. Well cut, no window.", flag: "Lab report", artType: "stone", artConfig: { seed: 24, hue: "#17A9A2", bg: "#04191C", alt: "Paraíba-type tourmaline" } },
  { no: "27", cat: "art", artist: "Rustom Kharas", title: "Godhuli, No. 4", year: "1971", medium: "Oil on board", size: "61 × 91 cm", lo: 900000, hi: 1400000, desc: "A late dusk landscape from the Panchgani years, worked wet-into-wet in a single sitting.", prov: "Gift of the artist to the present owner's father, 1972.", cond: "Board slightly bowed, stable. Small loss at upper right edge, retouched.", artType: "painting", artConfig: { seed: 52, fields: 4, strokes: 5, marks: 2, grain: 150, cracks: 26, colors: ["#2A1D14","#B4541F","#D9A441","#5A3A22"], line: "#F1E3C4", alt: "Godhuli, No. 4", horizon: true } },
  { no: "31", cat: "jewels", artist: "Natural saltwater pearl necklace", title: "Single strand, 61 pearls", year: "c. 1920", medium: "Natural pearls, diamond-set clasp", size: "Length 46 cm · 4.1–8.9 mm", lo: 5500000, hi: 7500000, desc: "Graduated Basra pearls of fine lustre and pale cream body colour with a rose overtone, well matched throughout.", prov: "By repute assembled in Bombay in the 1920s; by descent.", cond: "Natural, untreated, confirmed by X-radiography. Restrung 2023. Clasp with old-cut diamonds.", flag: "Natural", artType: "pearl", artConfig: { seed: 31, bg: "#131A19", body: "#F5EFE2", mid: "#E4DFD3", edge: "#B9B7AC", over: "#E7B7C8", alt: "Natural pearl" } },
  { no: "34", cat: "art", artist: "Kabir Sengupta", title: "Untitled (Standing Figure)", year: "1988", medium: "Charcoal and wash on paper", size: "104 × 71 cm", lo: 350000, hi: 550000, desc: "A large single-session drawing from the Santiniketan period.", prov: "Private collection, Calcutta.", cond: "Light time-staining at the sheet edges. Two small pinholes in the margins.", artType: "painting", artConfig: { seed: 61, fields: 2, strokes: 9, marks: 0, grain: 150, cracks: 26, colors: ["#EDE7DA","#2A2A28","#6E6A5E"], line: "#1C1B19", alt: "Untitled (Standing Figure)" } },
  { no: "38", cat: "jewels", artist: "Imperial jadeite bangle", title: "Natural, untreated (Type A)", year: "", medium: "Jadeite jade", size: "55.2 mm inner diameter", lo: 3000000, hi: 4500000, desc: "Even, saturated green with fine translucency and a smooth, waxy polish.", prov: "Private collection, Singapore.", cond: "Natural colour, no polymer impregnation, per laboratory report. No cracks or repairs.", flag: "Lab report", artType: "stone", artConfig: { seed: 38, hue: "#2F8F52", bg: "#08160E", alt: "Imperial jadeite bangle" } },
  { no: "41", cat: "art", artist: "Nilufer Damania", title: "The Long Verandah", year: "2003", medium: "Egg tempera on gesso panel", size: "46 × 122 cm", lo: 750000, hi: 1100000, desc: "A horizontal panel of shuttered light, built in some forty tempera layers.", prov: "Acquired from the artist's Bombay dealer, 2004.", cond: "Excellent. Panel sound, no cradling required.", artType: "painting", artConfig: { seed: 70, fields: 6, strokes: 1, marks: 2, grain: 150, cracks: 26, colors: ["#EFE6D2","#7FA08E","#C3B291","#3E4F46"], line: "#2C3A33", alt: "The Long Verandah", horizon: true } },
  { no: "46", cat: "jewels", artist: "Burmese ruby and diamond ring", title: "Cushion-cut, 2.51 carats", year: "c. 1960", medium: "Platinum, ruby and diamond", size: "2.51 ct centre stone", lo: 6500000, hi: 9000000, desc: "Pigeon's-blood red, no indication of heating, flanked by two tapered baguette diamonds.", prov: "Property of a gentleman, Delhi.", cond: "No indication of heating per laboratory report. Shank resized once; setting secure.", flag: "Unheated", artType: "stone", artConfig: { seed: 46, hue: "#B01F3C", bg: "#1A0A0E", alt: "Burmese ruby ring" } },
  { no: "49", cat: "art", artist: "Thomas Ambrose Fernandes", title: "Ferry, Late Crossing", year: "1996", medium: "Watercolour on handmade paper", size: "38 × 56 cm", lo: 180000, hi: 280000, desc: "A quick harbour study, signed lower right.", prov: "Private collection, Goa.", cond: "Slight cockling from original mounting. Colours fresh, no fading.", artType: "painting", artConfig: { seed: 83, fields: 3, strokes: 6, marks: 1, grain: 150, cracks: 26, colors: ["#E9EAE2","#4E7A8C","#2C4653","#C9A15A"], line: "#22323A", alt: "Ferry, Late Crossing" } },
  { no: "53", cat: "jewels", artist: "Colombian emerald, minor oil", title: "Octagonal step-cut, 6.84 carats", year: "", medium: "Unmounted stone", size: "6.84 ct · 13.2 × 10.6 mm", lo: 9000000, hi: 13000000, desc: "Muzo-type green of exceptional openness for the size, with the typical garden visible only under magnification.", prov: "Acquired Geneva, 2011.", cond: "Minor clarity enhancement (oil), per laboratory report. Two small girdle nicks.", flag: "Lab report", artType: "stone", artConfig: { seed: 53, hue: "#0E7A4E", bg: "#04150F", alt: "Colombian emerald" } },
  { no: "57", cat: "art", artist: "Ranjana Bhatt", title: "Wall Study (Dhrangadhra)", year: "2014", medium: "Pigment and lime on canvas", size: "122 × 91 cm", lo: 450000, hi: 700000, desc: "Lime and raw pigment applied as a fresco would be, on stretched canvas.", prov: "The artist; private collection, Baroda.", cond: "Some inherent surface friability at the lower edge, consistent with the medium. Stable.", artType: "painting", artConfig: { seed: 91, fields: 5, strokes: 3, marks: 3, grain: 150, cracks: 26, colors: ["#E5DCCB","#B98C5A","#7E6547","#3B3227"], line: "#F6F0E2", alt: "Wall Study" } },
  { no: "61", cat: "jewels", artist: "Art Deco diamond bracelet", title: "Geometric line, approx. 14.60 carats", year: "c. 1928", medium: "Platinum and diamond", size: "Length 18 cm", lo: 4500000, hi: 6500000, desc: "Old European and baguette-cut diamonds in a stepped geometric line, French assay marks.", prov: "Property of a lady, Bombay.", cond: "One baguette replaced. Tongue clasp with figure-of-eight safeties, working.", artType: "stone", artConfig: { seed: 61, hue: "#DDE2E8", bg: "#101418", alt: "Art Deco diamond bracelet" } },
  { no: "64", cat: "art", artist: "Ismail Pathan", title: "Notation for a Crowd", year: "2018", medium: "Screenprint and graphite on paper, 8/25", size: "70 × 50 cm", lo: 120000, hi: 180000, desc: "From an edition of twenty-five, each sheet worked over by hand in graphite.", prov: "Direct from the printer, Chennai.", cond: "Excellent, in the original portfolio wrapper.", artType: "painting", artConfig: { seed: 97, fields: 4, strokes: 2, marks: 7, grain: 150, cracks: 26, colors: ["#F1EDE1","#1D1D1B","#D14D2E"], line: "#1D1D1B", alt: "Notation for a Crowd" } }
];

export const SALES: Sale[] = [
  { slug: "sale", name: "The September Evening Sale", when: "Thursday 24 September 2026, 7:00 pm IST", view: "19–23 September, 11:00–19:00 daily", lots: 74, state: "open", blurb: "Modern and contemporary art alongside coloured stones and period jewels, sold in one session." },
  { slug: "", name: "Works on Paper &amp; Editions", when: "Saturday 17 October 2026, 3:00 pm IST", view: "13–16 October", lots: 118, state: "soon", blurb: "Prints, drawings and photographs, most estimated below ₹5,00,000. Consignments close 12 September." },
  { slug: "", name: "The Winter Jewels Sale", when: "Thursday 3 December 2026, 7:00 pm IST", view: "28 November – 2 December", lots: 96, state: "soon", blurb: "Signed jewellery, unmounted stones and natural pearls. Consignments close 6 November." }
];

export const RESULTS: Result[] = [
  { sale: "The June Evening Sale, 2026", lot: "Lot 22", what: "Kashmir sapphire, 5.02 ct, unheated", est: "₹1.2 – 1.8 Cr", ham: "₹2.34 Cr" },
  { sale: "The June Evening Sale, 2026", lot: "Lot 08", what: "Meher Anand, <i>Weather Book</i>, 2017", est: "₹18 – 24 L", ham: "₹41.5 L" },
  { sale: "The June Evening Sale, 2026", lot: "Lot 44", what: "Natural pearl and diamond brooch, c. 1910", est: "₹22 – 30 L", ham: "₹28 L" },
  { sale: "Works on Paper, April 2026", lot: "Lot 61", what: "Kabir Sengupta, <i>Two Seated Figures</i>, 1986", est: "₹3 – 5 L", ham: "₹9.2 L" },
  { sale: "Works on Paper, April 2026", lot: "Lot 12", what: "Ismail Pathan, portfolio of nine screenprints", est: "₹1.5 – 2.5 L", ham: "₹4.1 L" },
  { sale: "The Winter Jewels Sale, 2025", lot: "Lot 30", what: "Colombian emerald, 8.11 ct, minor oil", est: "₹90 L – 1.3 Cr", ham: "₹1.71 Cr" },
  { sale: "The Winter Jewels Sale, 2025", lot: "Lot 55", what: "Art Deco diamond bandeau, c. 1925", est: "₹40 – 60 L", ham: "Passed" },
  { sale: "The Spring Sale, 2025", lot: "Lot 19", what: "Rustom Kharas, <i>Godhuli, No. 1</i>, 1969", est: "₹10 – 15 L", ham: "₹33.8 L" }
];

export const TEAM: TeamMember[] = [
  { n: "Aparna Deshmukh", r: "Founder &amp; Auctioneer", b: "Took the rostrum at the first Art 'O' Gems sale in 2009 and has called every evening sale since. Cataloguing background at a Bombay house." },
  { n: "Farhan Kotwal", r: "Head, Modern &amp; Contemporary Art", b: "Fifteen years in Indian modernism, with a research interest in artists working outside Bombay and Delhi." },
  { n: "Ritu Bhandari", r: "Head, Jewels &amp; Coloured Stones", b: "Gemmologist. Handles origin and treatment questions, and decides which stones go to the laboratory before they go in the catalogue." },
  { n: "Samuel Tirkey", r: "Senior Specialist, Works on Paper", b: "Prints, drawings and photographs. Writes most of the condition reports and is the reason they are worth reading." },
  { n: "Zoya Merchant", r: "Head of Private Sales", b: "Places single works and whole collections quietly, where an auction is not the right room for the object." },
  { n: "Prakash Iyer", r: "Registrar &amp; Client Accounts", b: "Registration, deposits, shipping, export paperwork. The person who actually gets the object to your wall." }
];

export const EXHIBITIONS: Exhibition[] = [
  { when: "5 – 30 September 2026", t: "Marble Dust: Meher Anand, Ten Years", s: "Gallery, ground floor", d: "Twenty-two paintings and eleven working drawings, half of them lent by collectors and not for sale. Runs alongside the September viewing.", st: "Current" },
  { when: "10 October – 8 November 2026", t: "Small Stones, Big Claims", s: "Gallery, mezzanine", d: "An exhibition about gemmological testing: forty stones shown next to their laboratory reports, including six that failed.", st: "Next" },
  { when: "14 March – 19 April 2026", t: "The Konkan Sheets", s: "Gallery, ground floor", d: "Devika Rao Naik's tidal ledgers shown as a complete set of nine for the first time.", st: "Past" },
  { when: "9 November – 14 December 2025", t: "Bronze in the Round", s: "Courtyard and gallery", d: "Post-war Indian sculpture, with three foundry demonstrations open to the public.", st: "Past" }
];

export const NAV: NavItem[] = [
  ["/auctions", "Auctions"],
  ["/sale", "Catalogue"],
  ["/art", "Art"],
  ["/jewels", "Jewels"],
  ["/exhibitions", "Exhibitions"],
  ["/private-sales", "Private sales"],
  ["/sell", "Sell with us"],
  ["/specialists", "About"],
  ["/visit", "Visit"]
];
