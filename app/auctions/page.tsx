import { Metadata } from 'next';
import Link from 'next/link';
import { SALES } from '@/lib/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import RevealOnScroll from '@/components/RevealOnScroll';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: "Auctions — Kalos Kagathos",
  description: "Every sale is held in the Pune saleroom and streamed for online bidders. Catalogues go online about three weeks before each sale."
};

export default function Auctions() {
  return (
    <>
      <Breadcrumbs parts={[['Auctions']]} />
      <PageHead
        eyebrow="Auctions"
        h1="Three sales between here and December."
        lead="Every sale is held in the Pune saleroom and streamed for online bidders. Catalogues go online about three weeks before each sale."
        aside={
          <div className="panel panel-nacre">
            <p className="mono muted">Next on the rostrum</p>
            <h3 style={{ margin: '10px 0 8px' }}>The September Evening Sale</h3>
            <p className="muted" style={{ fontSize: '.9rem' }}>Thursday 24 September, 7:00 pm IST</p>
            <Link className="btn btn-em btn-sm" href="/sale" style={{ marginTop: '16px' }}>View the catalogue</Link>
          </div>
        }
      />

      <section className="band">
        <div className="wrap">
          <div className="rows">
            {SALES.map((sale, i) => (
              <RevealOnScroll key={i}>
                <div className="row rise">
                  <div className="when">
                    {sale.state === 'open' ? (
                      <><span className="pulse"></span>Bidding open</>
                    ) : (
                      'Consignments open'
                    )}
                    <br /><span className="muted" style={{ textTransform: 'none', letterSpacing: 0 }}>{sale.lots} lots</span>
                  </div>
                  <div>
                    <h3 dangerouslySetInnerHTML={{ __html: sale.name }}></h3>
                    <p dangerouslySetInnerHTML={{ __html: sale.blurb }}></p>
                    <p className="mono muted" style={{ marginTop: '12px' }}>{sale.when} &nbsp;·&nbsp; Viewing {sale.view}</p>
                  </div>
                  <div>
                    {sale.slug ? (
                      <Link className="btn btn-em btn-sm" href={`/${sale.slug}`}>Catalogue</Link>
                    ) : (
                      <Link className="btn btn-sm" href="/sell">Consign to this sale</Link>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="stats rise" style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
              <div className="stat"><div className="n">2009</div><div className="l">First sale</div></div>
              <div className="stat"><div className="n">86%</div><div className="l">Lots sold, last four sales</div></div>
              <div className="stat"><div className="n">15%</div><div className="l">Buyer’s premium</div></div>
              <div className="stat"><div className="n">7 days</div><div className="l">Payment terms</div></div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CtaBand
        title="New to bidding here?"
        paragraph="Registration takes about ten minutes, and the terms are four paragraphs long, not forty."
        btn1="How to bid"
        href1="/bidding"
        btn2="Past results"
        href2="/results"
      />
    </>
  );
}
