import type { Metadata } from 'next';
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
            <Link className={`chip ${f==='all'?'on':''}`} href="/sale">All lots</Link>
            <Link className={`chip ${f==='art'?'on':''}`} href="/sale?category=art">Art</Link>
            <Link className={`chip ${f==='jewels'?'on':''}`} href="/sale?category=jewels">Jewels &amp; stones</Link>
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
