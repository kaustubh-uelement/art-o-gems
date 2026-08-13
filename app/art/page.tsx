import type { Metadata } from 'next';
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
