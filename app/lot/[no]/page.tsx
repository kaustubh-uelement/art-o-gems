import type { Metadata } from 'next';
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
  return { title: `Lot ${lot.no}: ${lot.title} - Kalos Kagathos` };
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
      <Breadcrumbs items={[['Auctions', '/auctions'], ['September Evening Sale', '/sale'], [`Lot ${lot.no}`]]} />
      
      <section className="band">
        <RevealOnScroll>
          <div className="wrap lotpage">
            <div>
              <figure className="plate-wrap rise">
                <Loupe svgString={svgHi} lotNo={lot.no} isSquare />
                <figcaption className="caption">Move the loupe across the surface. Detail images and a written condition report are sent on request.</figcaption>
              </figure>
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
              <p style={{ marginTop: '10px', fontSize: '1.05rem' }}>{lot.artist}{lot.year ? `, ${lot.year}` : ''}</p>
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
              <Link className="btn" href={`/sale?category=${lot.cat}`}>All {lot.cat === 'art' ? 'art' : 'jewels'} lots</Link>
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
