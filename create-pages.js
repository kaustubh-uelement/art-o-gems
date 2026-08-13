const fs = require('fs');
const path = require('path');

const root = '/Users/u-elementtechnologiesprivatelimited/Uelement/art-o-gems';

const mkdir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

// 1. app/sale/page.tsx
mkdir(path.join(root, 'app/sale'));
fs.writeFileSync(path.join(root, 'app/sale/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import LotCard from '@/components/LotCard';
import Link from 'next/link';
import { LOTS } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "September Evening Sale — Art 'O' Gems",
};

type Props = { searchParams: Promise<{ category?: string }> };

export default async function SalePage({ searchParams }: Props) {
  const { category } = await searchParams;
  const f = category || 'all';
  const list = LOTS.filter(l => f === 'all' || l.cat === f);

  return (
    <>
      <Breadcrumbs items={[['Auctions', '/auctions'], ['September Evening Sale']]} />
      <PageHead
        eyebrow="Sale 2609 · 24 September 2026"
        h1="The September Evening Sale"
        lead="Seventy-four lots, sold in one session from 7:00 pm. Eighteen are catalogued online below; the printed catalogue covers all lots and is posted free on request."
        aside={
          <div className="panel">
            <dl className="spec" style={{ margin: 0, borderTop: 0 }}>
              <div><dt>Viewing</dt><dd>19–23 Sep, 11:00–19:00</dd></div>
              <div><dt>Sale begins</dt><dd>24 Sep, 7:00 pm IST</dd></div>
              <div><dt>Registration</dt><dd>Closes 23 Sep, 18:00</dd></div>
              <div><dt>Premium</dt><dd>15% + GST</dd></div>
            </dl>
            <Link className="btn btn-em btn-sm" href="/bidding" style={{ marginTop: '16px' }}>Register to bid</Link>
          </div>
        }
      />
      
      <section className="band">
        <div className="wrap">
          <div className="filters">
            <Link className={\`chip \${f==='all'?'on':''}\`} href="/sale">All lots</Link>
            <Link className={\`chip \${f==='art'?'on':''}\`} href="/sale?category=art">Art</Link>
            <Link className={\`chip \${f==='jewels'?'on':''}\`} href="/sale?category=jewels">Jewels &amp; stones</Link>
            <span className="count">{list.length} of 74 lots online</span>
          </div>
          <div className="grid g4">
            {list.map(lot => <LotCard key={lot.no} lot={lot} />)}
          </div>
          <RevealOnScroll>
            <p className="muted rise" style={{ marginTop: '34px', fontSize: '.88rem' }}>
              Estimates exclude the buyer’s premium of 15% on the hammer price, plus applicable GST. 
              <Link href="/bidding" className="em">Full conditions of sale</Link>
            </p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
`);

// 2. app/lot/[no]/page.tsx
mkdir(path.join(root, 'app/lot/[no]'));
fs.writeFileSync(path.join(root, 'app/lot/[no]/page.tsx'), `import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Loupe from '@/components/Loupe';
import Link from 'next/link';
import { LOTS } from '@/lib/data';
import { artHiSvg } from '@/lib/art';
import { fmt } from '@/lib/format';
import RevealOnScroll from '@/components/RevealOnScroll';
import LotCard from '@/components/LotCard';

export function generateStaticParams() {
  return LOTS.map(l => ({ no: l.no }));
}

export async function generateMetadata({ params }: { params: Promise<{ no: string }> }): Promise<Metadata> {
  const { no } = await params;
  const lot = LOTS.find(l => l.no === no);
  if (!lot) return {};
  return { title: \`Lot \${lot.no}: \${lot.title} — Art 'O' Gems\` };
}

export default async function LotPage({ params }: { params: Promise<{ no: string }> }) {
  const { no } = await params;
  const i = LOTS.findIndex(l => l.no === no);
  if (i < 0) notFound();
  const lot = LOTS[i];
  const others = LOTS.filter((x, k) => k !== i && x.cat === lot.cat).slice(0, 4);
  const svgHi = artHiSvg(lot);

  return (
    <>
      <Breadcrumbs items={[['Auctions', '/auctions'], ['September Evening Sale', '/sale'], [\`Lot \${lot.no}\`]]} />
      
      <section className="band">
        <RevealOnScroll>
          <div className="wrap lotpage">
            <div>
              <Loupe svgString={svgHi} lotNo={lot.no} isSquare caption="Move the loupe across the surface. Detail images and a written condition report are sent on request." />
              <div className="blocks rise">
                <div className="block"><h4>Catalogue note</h4><p>{lot.desc}</p></div>
                <div className="block"><h4>Provenance</h4><p>{lot.prov}</p></div>
                <div className="block">
                  <h4>Condition</h4><p>{lot.cond}</p>
                  <p className="muted" style={{ fontSize: '.83rem', marginTop: '10px' }}>Condition reports are our opinion, honestly given, and not a warranty. Examine the lot yourself or send someone who will.</p>
                </div>
                <div className="block"><h4>Viewing</h4><p>19–23 September, 11:00–19:00 daily, at the Pune saleroom. No appointment needed.</p></div>
              </div>
            </div>
            
            <aside className="lotside rise">
              <p className="lotmeta">Lot {lot.no} · {lot.cat === 'art' ? 'Modern & Contemporary Art' : 'Jewels & Coloured Stones'}</p>
              <h1 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)' }}>{lot.title}</h1>
              <p style={{ marginTop: '10px', fontSize: '1.05rem' }}>{lot.artist}{lot.year ? \`, \${lot.year}\` : ''}</p>
              <div className="pricebox">
                <p className="k">Estimate</p>
                <p className="v">{fmt(lot.lo)} – {fmt(lot.hi)}</p>
                <p className="muted" style={{ fontSize: '.8rem' }}>Plus 15% buyer’s premium and GST. Reserve is not above the low estimate.</p>
                <div className="btns">
                  <Link className="btn btn-em" href="/bidding">Register to bid</Link>
                  <Link className="btn" href="/sell">Ask a specialist</Link>
                </div>
              </div>
              <dl className="spec">
                <div><dt>Medium</dt><dd>{lot.medium}</dd></div>
                <div><dt>Dimensions</dt><dd>{lot.size}</dd></div>
                {lot.year && <div><dt>Date</dt><dd>{lot.year}</dd></div>}
                <div><dt>Sale</dt><dd>September Evening Sale, 24 Sep 2026</dd></div>
                <div><dt>Department</dt><dd>{lot.cat === 'art' ? 'Art' : 'Jewels'}</dd></div>
              </dl>
              <div className="panel panel-nacre" style={{ marginTop: '22px' }}>
                <p className="mono muted">Bid increments near this estimate</p>
                <p style={{ marginTop: '8px', fontSize: '.9rem' }}>
                  {lot.lo < 500000 ? '₹25,000 steps' : lot.lo < 2000000 ? '₹1,00,000 steps' : '₹2,50,000 steps, then at the auctioneer’s discretion'}
                </p>
              </div>
            </aside>
          </div>
        </RevealOnScroll>
      </section>

      <section className="band" style={{ background: 'var(--pearl-2)', borderTop: '1px solid var(--line-2)' }}>
        <div className="wrap">
          <RevealOnScroll>
            <div className="shead rise">
              <h2>More in this department</h2>
              <Link className="btn" href={\`/sale?category=\${lot.cat}\`}>All {lot.cat === 'art' ? 'art' : 'jewels'} lots</Link>
            </div>
          </RevealOnScroll>
          <div className="grid g4">
            {others.map(o => <LotCard key={o.no} lot={o} />)}
          </div>
        </div>
      </section>
    </>
  );
}
`);

// 3. app/art/page.tsx
mkdir(path.join(root, 'app/art'));
fs.writeFileSync(path.join(root, 'app/art/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import LotCard from '@/components/LotCard';
import CtaBand from '@/components/CtaBand';
import Link from 'next/link';
import { LOTS } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Modern & Contemporary Art — Art 'O' Gems",
};

export default function ArtPage() {
  const lots = LOTS.filter(l => l.cat === 'art').slice(0, 8);

  return (
    <>
      <Breadcrumbs items={[['Departments'], ['Modern & Contemporary Art']]} />
      <PageHead
        eyebrow="Department"
        h1="Modern & Contemporary Art"
        lead="Post-1947 painting, works on paper, print editions and sculpture, with a standing interest in artists who worked outside Bombay and Delhi. Two dedicated sales a year, plus works on paper in October."
        aside={
          <div className="panel">
            <p className="mono muted">Head of department</p>
            <h3 style={{ margin: '8px 0 4px' }}>Farhan Kotwal</h3>
            <p className="muted" style={{ fontSize: '.88rem' }}>art@artogems.example · +91 20 0000 0002</p>
            <Link className="btn btn-sm" href="/specialists" style={{ marginTop: '16px' }}>Meet the team</Link>
          </div>
        }
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap grid g2 rise" style={{ gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <h3>What we take</h3>
              <p className="muted">Paintings, drawings, prints in numbered editions, photographs and sculpture, generally from 1947 onward. We are glad to look at anything, but we do best with post-war Indian modernism, contemporary work with an exhibition history, and single-owner collections assembled with some conviction.</p>
              <p className="muted">We do not sell unattributed decorative pictures, reproductions, or works we cannot trace. If a signature is the only evidence, that is not evidence.</p>
              <h3 style={{ marginTop: '14px' }}>How we catalogue</h3>
              <p className="muted">Every lot gets an ownership line, a written condition report, and where relevant a note on restoration. Attributions follow the usual ladder — by the artist, attributed to, studio of, after — and we use the lower rung when we are not certain.</p>
            </div>
            <div className="panel">
              <p className="mono muted">Department calendar 2026</p>
              <dl className="spec" style={{ marginTop: '14px' }}>
                <div><dt>17 Oct</dt><dd>Works on Paper &amp; Editions<br/><span className="muted">consignments close 12 Sep</span></dd></div>
                <div><dt>24 Sep</dt><dd>September Evening Sale<br/><span className="muted">catalogue online now</span></dd></div>
                <div><dt>5–30 Sep</dt><dd>Exhibition: Marble Dust</dd></div>
              </dl>
              <Link className="btn btn-em btn-sm" href="/sell" style={{ marginTop: '18px' }}>Consign a work</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="band">
        <div className="wrap">
          <RevealOnScroll>
            <h2 className="rise" style={{ marginBottom: '24px' }}>Recent and upcoming lots</h2>
          </RevealOnScroll>
          <div className="grid g4">
            {lots.map(lot => <LotCard key={lot.no} lot={lot} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure whether it is auction material?"
        text="Send four photographs and the dimensions. We will tell you within a week, at no charge."
        btn1="Request a valuation"
        href1="/sell"
        btn2="Jewels department"
        href2="/jewels"
      />
    </>
  );
}
`);

// 4. app/jewels/page.tsx
mkdir(path.join(root, 'app/jewels'));
fs.writeFileSync(path.join(root, 'app/jewels/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import LotCard from '@/components/LotCard';
import CtaBand from '@/components/CtaBand';
import Link from 'next/link';
import { LOTS } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Jewels & Coloured Stones — Art 'O' Gems",
};

export default function JewelsPage() {
  const lots = LOTS.filter(l => l.cat === 'jewels').slice(0, 8);

  return (
    <>
      <Breadcrumbs items={[['Departments'], ['Jewels & Coloured Stones']]} />
      <PageHead
        eyebrow="Department"
        h1="Jewels & Coloured Stones"
        lead="Unmounted stones, natural pearls, signed jewellery and period pieces. Coloured stones above one carat are sold with an independent laboratory report naming origin and treatment."
        aside={
          <div className="panel">
            <p className="mono muted">Head of department</p>
            <h3 style={{ margin: '8px 0 4px' }}>Ritu Bhandari</h3>
            <p className="muted" style={{ fontSize: '.88rem' }}>jewels@artogems.example · +91 20 0000 0003</p>
            <Link className="btn btn-sm" href="/specialists" style={{ marginTop: '16px' }}>Meet the team</Link>
          </div>
        }
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap grid g2 rise" style={{ gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <h3>Origin and treatment, in the lot line</h3>
              <p className="muted">Where a stone is heated, oiled, filled, diffused or dyed, we say so in the lot title or the first line of the description — not in a footnote at the back of the catalogue. Where a report is more than five years old, we send the stone out again at our expense.</p>
              <h3 style={{ marginTop: '14px' }}>Laboratories we use</h3>
              <p className="muted">Reports come from independent laboratories with no interest in the sale. We will name the laboratory before you bid, and we will tell you if two reports on the same stone disagree, which happens more often than the trade likes to admit.</p>
              <h3 style={{ marginTop: '14px' }}>Pearls</h3>
              <p className="muted">Natural pearls are confirmed by X-radiography before cataloguing. Cultured strands are described as cultured. Restringing dates are given, because the string is not the pearl but it is what breaks.</p>
            </div>
            <div className="panel panel-nacre">
              <p className="mono muted">What a lot line tells you</p>
              <dl className="spec" style={{ marginTop: '14px' }}>
                <div><dt>Weight</dt><dd>Carats, to two places</dd></div>
                <div><dt>Origin</dt><dd>Named when a laboratory will name it</dd></div>
                <div><dt>Treatment</dt><dd>Stated, including “none detected”</dd></div>
                <div><dt>Report</dt><dd>Laboratory and date</dd></div>
                <div><dt>Condition</dt><dd>Chips, repairs, replaced stones</dd></div>
              </dl>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="band">
        <div className="wrap">
          <RevealOnScroll>
            <h2 className="rise" style={{ marginBottom: '24px' }}>Recent and upcoming lots</h2>
          </RevealOnScroll>
          <div className="grid g4">
            {lots.map(lot => <LotCard key={lot.no} lot={lot} />)}
          </div>
        </div>
      </section>

      <CtaBand
        title="Winter Jewels Sale, 3 December"
        text="Consignments close 6 November. Free valuations, and we will tell you if a stone should go to the laboratory first."
        btn1="Consign a jewel"
        href1="/sell"
        btn2="Art department"
        href2="/art"
      />
    </>
  );
}
`);

// 5. app/bidding/page.tsx
mkdir(path.join(root, 'app/bidding'));
fs.writeFileSync(path.join(root, 'app/bidding/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import RegistrationForm from '@/components/forms/RegistrationForm';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "How to bid — Art 'O' Gems",
};

export default function BiddingPage() {
  return (
    <>
      <Breadcrumbs items={[['How to bid']]} />
      <PageHead
        eyebrow="How to bid"
        h1="Four steps, and none of them are a surprise."
        lead="Registration takes about ten minutes. You can bid in the room, by telephone, by absentee bid left in advance, or live online."
        aside={
          <div className="panel panel-em">
            <p className="eyebrow">Registration</p>
            <p style={{ marginTop: '12px' }}>Open until 18:00 on 23 September for the Evening Sale.</p>
            <a className="btn btn-gh btn-sm" href="#regform" style={{ marginTop: '16px' }}>Register now</a>
          </div>
        }
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap rise" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <div className="steps">
                <div className="step"><div><h4>Register for a paddle</h4><p>Bring photo ID and a bank reference. New bidders on lots above ₹25,00,000 are asked for a deposit, refunded within five working days if you don't buy.</p></div></div>
                <div className="step"><div><h4>View the lot in person</h4><p>Come to the viewing, or ask for a condition report and additional images. For stones, the laboratory report is emailed before the sale, not after.</p></div></div>
                <div className="step"><div><h4>Choose how you bid</h4><p>In the room, by telephone with one of our staff, by absentee bid left in advance, or live online. Telephone lines are booked until 18:00 on 23 September.</p></div></div>
                <div className="step"><div><h4>Pay and collect</h4><p>Invoices go out the morning after the sale. Payment within seven days; collection from the Pune saleroom, or we arrange packing and insured shipping.</p></div></div>
              </div>
              <h3 style={{ marginTop: '40px' }}>Four things worth knowing</h3>
              <ul className="checklist">
                <li>The buyer’s premium is 15% of the hammer price, plus applicable GST</li>
                <li>A reserve is never set above the low estimate</li>
                <li>An absentee bid is executed as cheaply as competing bids allow — leaving a high maximum does not mean paying it</li>
                <li>A passed lot is announced as passed; we do not report it as sold</li>
              </ul>
            </div>
            
            <div>
              <div className="panel" style={{ padding: 0 }}>
                <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: '.63rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--dim)' }}>Bid increments — Indian rupees</div>
                <table className="tbl" style={{ fontFamily: 'var(--mono)', fontSize: '.8rem' }}>
                  <tbody>
                    <tr><td>up to 2,00,000</td><td style={{ textAlign: 'right' }} className="em">10,000</td></tr>
                    <tr><td>2,00,000 – 5,00,000</td><td style={{ textAlign: 'right' }} className="em">25,000</td></tr>
                    <tr><td>5,00,000 – 10,00,000</td><td style={{ textAlign: 'right' }} className="em">50,000</td></tr>
                    <tr><td>10,00,000 – 20,00,000</td><td style={{ textAlign: 'right' }} className="em">1,00,000</td></tr>
                    <tr><td>20,00,000 – 50,00,000</td><td style={{ textAlign: 'right' }} className="em">2,50,000</td></tr>
                    <tr><td>above 50,00,000</td><td style={{ textAlign: 'right' }} className="em">auctioneer’s discretion</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="panel" style={{ marginTop: '22px' }} id="regform">
                <h4>Register to bid</h4>
                <p className="muted" style={{ fontSize: '.88rem', marginTop: '8px' }}>Sale 2609 — September Evening Sale.</p>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
`);

// 6. app/sell/page.tsx
mkdir(path.join(root, 'app/sell'));
fs.writeFileSync(path.join(root, 'app/sell/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import ValuationForm from '@/components/forms/ValuationForm';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Sell with us — Art 'O' Gems",
};

export default function SellPage() {
  return (
    <>
      <Breadcrumbs items={[['Sell with us']]} />
      <PageHead
        eyebrow="Sell with us"
        h1="Bring us the thing in the cupboard."
        lead="Valuations are free and take about a week. If we think your object belongs in a different saleroom — or in no saleroom — we will say so."
        aside={
          <div className="panel panel-nacre">
            <p className="mono muted">Consignment deadlines</p>
            <dl className="spec" style={{ marginTop: '12px', borderTop: 0 }}>
              <div><dt>Works on Paper</dt><dd>12 September</dd></div>
              <div><dt>Winter Jewels</dt><dd>6 November</dd></div>
            </dl>
          </div>
        }
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap grid g2 rise" style={{ gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <h3>What to send with your first email</h3>
              <ul className="checklist">
                <li>Photographs: the whole work, the signature, the back, and any damage</li>
                <li>Dimensions, and the medium if you know it</li>
                <li>Anything you have on where it came from — a bill, a letter, a family story</li>
                <li>For stones: carat weight and any laboratory report, however old</li>
                <li>What you think it’s worth, if you have a number in mind</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>What it costs</h3>
              <dl className="spec">
                <div><dt>Valuation</dt><dd>Free, no obligation</dd></div>
                <div><dt>Seller’s commission</dt><dd>10% of hammer, negotiable above ₹25,00,000</dd></div>
                <div><dt>Photography</dt><dd>Included</dd></div>
                <div><dt>Insurance in our care</dt><dd>Included</dd></div>
                <div><dt>Laboratory report</dt><dd>At cost, only with your agreement</dd></div>
                <div><dt>Unsold lots</dt><dd>No charge, returned or re-offered</dd></div>
                <div><dt>Settlement</dt><dd>Within 21 days of payment by the buyer</dd></div>
              </dl>
            </div>
            
            <div className="panel">
              <h4>Request a valuation</h4>
              <p className="muted" style={{ fontSize: '.88rem', marginTop: '8px' }}>One object or a whole collection. We reply within five working days.</p>
              <ValuationForm />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <CtaBand
        title="Not sure it is worth asking about?"
        text="Ask anyway. The valuation is free, and the worst outcome is a straight answer."
        btn1="Email a specialist"
        href1="/specialists"
        btn2="See past results"
        href2="/results"
      />
    </>
  );
}
`);

// 7. app/specialists/page.tsx
mkdir(path.join(root, 'app/specialists'));
fs.writeFileSync(path.join(root, 'app/specialists/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import { TEAM } from '@/lib/data';
import { portrait } from '@/lib/art';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "About — Art 'O' Gems",
};

export default function SpecialistsPage() {
  return (
    <>
      <Breadcrumbs items={[['About']]} />
      <PageHead
        eyebrow="About"
        h1="Six people, one rostrum, seventeen years."
        lead="Art ‘O’ Gems was founded in Pune in 2009 to sell modern Indian art and coloured stones in the same room, on the theory that the people who collect one often collect the other. We have held two or three sales a year since."
      />

      <section className="band">
        <div className="wrap">
          <div className="grid g3">
            {TEAM.map((p, k) => (
              <RevealOnScroll key={p.n}>
                <div className="person rise">
                  <div className="av" dangerouslySetInnerHTML={{ __html: portrait(k + 3) }} />
                  <h4>{p.n}</h4>
                  <p className="role" dangerouslySetInnerHTML={{ __html: p.r }} />
                  <p dangerouslySetInnerHTML={{ __html: p.b }} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="band dark">
        <RevealOnScroll>
          <div className="wrap rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'start' }}>
            <div>
              <p className="eyebrow">How we work</p>
              <h2 style={{ marginTop: '16px', maxWidth: '18ch' }}>Three rules we have not broken yet.</h2>
            </div>
            <div className="stack">
              <div><h4>We say what we do not know</h4><p>An attribution we cannot support goes in as “attributed to”, and a stone we cannot place goes in without an origin. Certainty is worth money, which is exactly why we will not manufacture it.</p></div>
              <div><h4>We do not bid on our own lots</h4><p>Staff and their families do not bid in our sales. Where we own part of a lot, the catalogue says so against that lot.</p></div>
              <div><h4>We publish the failures</h4><p>Passed lots appear in our results with the word “Passed” next to them.</p></div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <CtaBand
        title="Come and see the building."
        text="Koregaon Park, Pune. Tuesday to Sunday, 11:00–19:00, no appointment needed."
        btn1="Visit us"
        href1="/visit"
        btn2="Current exhibition"
        href2="/exhibitions"
      />
    </>
  );
}
`);

// 8. app/visit/page.tsx
mkdir(path.join(root, 'app/visit'));
fs.writeFileSync(path.join(root, 'app/visit/page.tsx'), `import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import ContactForm from '@/components/forms/ContactForm';
import { painting } from '@/lib/art';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Visit — Art 'O' Gems",
};

export default function VisitPage() {
  const planSvg = painting({
    seed: 120,
    fields: 9,
    strokes: 3,
    marks: 12,
    grain: 300,
    cracks: 0,
    colors: ["#E9EDE8", "#CBD8CF", "#0B6046", "#DDE3DD"],
    line: "#0B6046",
    alt: "Stylised plan of the Koregaon Park building"
  });

  return (
    <>
      <Breadcrumbs items={[['Visit']]} />
      <PageHead
        eyebrow="Visit"
        h1="The gallery is open whether or not there is a sale on."
        lead="Ground floor for exhibitions and the saleroom, mezzanine for jewels viewing and the reading room. Step-free access from the courtyard entrance."
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap grid g2 rise" style={{ gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <div className="grid g2" style={{ gap: '30px' }}>
                <div><h4>Gallery &amp; saleroom</h4><p className="muted" style={{ marginTop: '8px' }}>Ground floor, Sohrab Building<br/>North Main Road, Koregaon Park<br/>Pune 411001, Maharashtra</p></div>
                <div><h4>Hours</h4><p className="muted" style={{ marginTop: '8px' }}>Tuesday to Sunday, 11:00–19:00<br/>Closed Mondays<br/>Sale days: closed until 17:00</p></div>
                <div><h4>Contact</h4><p className="muted" style={{ marginTop: '8px' }}><a href="mailto:saleroom@artogems.example" style={{ textDecoration: 'none' }}>saleroom@artogems.example</a><br/><a href="tel:+912000000000" style={{ textDecoration: 'none' }}>+91 20 0000 0000</a></p></div>
                <div><h4>Getting here</h4><p className="muted" style={{ marginTop: '8px' }}>Ten minutes from Pune Junction. Paid parking in the courtyard, six spaces. Nearest bus stop: North Main Road.</p></div>
              </div>
              <div className="panel panel-nacre" style={{ marginTop: '32px' }}>
                <h4>During sale week</h4>
                <p className="muted" style={{ marginTop: '10px', fontSize: '.92rem' }}>Viewing 19–23 September, 11:00–19:00 daily. Jewels are shown on the mezzanine by request — ask at the desk and a specialist will bring the stones out with a loupe and a daylight lamp. No appointment needed, but the last hour is quieter.</p>
              </div>
            </div>
            
            <div>
              <div className="plate sq" style={{ cursor: 'default', boxShadow: 'none' }} dangerouslySetInnerHTML={{ __html: planSvg }} />
              <p className="caption">Sohrab Building, ground floor and mezzanine. Courtyard entrance is step-free.</p>
              <div className="panel" style={{ marginTop: '24px' }}>
                <h4>Ask us something</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
`);

console.log('All files created!');
