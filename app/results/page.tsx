import { Metadata } from 'next';
import { RESULTS } from '@/lib/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Results — Art 'O' Gems",
  description: "We publish every lot, sold and passed. A results page that only lists successes is a marketing document, not a record."
};

export default function Results() {
  return (
    <>
      <Breadcrumbs parts={[['Results']]} />
      <PageHead
        eyebrow="Results"
        h1="Hammer prices, including the ones that did not sell."
        lead="We publish every lot, sold and passed. A results page that only lists successes is a marketing document, not a record."
      />

      <section className="band">
        <div className="wrap">
          <RevealOnScroll>
            <div className="tbl-wrap rise">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Sale</th>
                    <th>Lot</th>
                    <th>Description</th>
                    <th>Estimate</th>
                    <th style={{ textAlign: 'right' }}>Hammer</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULTS.map((r, i) => (
                    <tr key={i}>
                      <td className="muted" style={{ fontSize: '.8rem' }}>{r.sale}</td>
                      <td className="num">{r.lot}</td>
                      <td dangerouslySetInnerHTML={{ __html: r.what }}></td>
                      <td className="num muted">{r.est}</td>
                      <td className={r.ham === 'Passed' ? 'num muted' : 'sold'} style={{ textAlign: 'right' }}>{r.ham}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="stats rise" style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
              <div className="stat"><div className="n">86%</div><div className="l">Lots sold by volume</div></div>
              <div className="stat"><div className="n">1.4×</div><div className="l">Median hammer vs low estimate</div></div>
              <div className="stat"><div className="n">₹2.34 Cr</div><div className="l">Highest lot, 2026 to date</div></div>
              <div className="stat"><div className="n">11 days</div><div className="l">Average seller settlement</div></div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <p className="muted rise" style={{ marginTop: '24px', fontSize: '.85rem' }}>Hammer prices exclude the buyer’s premium. “Passed” means the lot did not reach its reserve and was not sold. Full results for every sale since 2009 are available on request.</p>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
