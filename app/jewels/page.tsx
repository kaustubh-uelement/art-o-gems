import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import LotCard from '@/components/LotCard';
import CtaBand from '@/components/CtaBand';
import Link from 'next/link';
import { LOTS } from '@/lib/data';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Jewels & Coloured Stones - Kalos Kagathos",
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
            <p className="muted" style={{ fontSize: '.88rem' }}>jewels@kaloskagathos.example · +91 20 0000 0003</p>
            <Link className="btn btn-sm" href="/specialists" style={{ marginTop: '16px' }}>Meet the team</Link>
          </div>
        }
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap grid g2 rise" style={{ gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <h3>Origin and treatment, in the lot line</h3>
              <p className="muted">Where a stone is heated, oiled, filled, diffused or dyed, we say so in the lot title or the first line of the description, not in a footnote at the back of the catalogue. Where a report is more than five years old, we send the stone out again at our expense.</p>
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
