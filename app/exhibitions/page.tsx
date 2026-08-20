import { Metadata } from 'next';
import Link from 'next/link';
import { EXHIBITIONS } from '@/lib/data';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Exhibitions - Kalos Kagathos",
  description: "The ground-floor gallery shows four or five exhibitions a year. Entry is free, loans are welcome, and about half of what hangs is not for sale."
};

export default function Exhibitions() {
  return (
    <>
      <Breadcrumbs parts={[['Exhibitions']]} />
      <PageHead
        eyebrow="Gallery"
        h1="Exhibitions run whether or not anything is for sale."
        lead="The ground-floor gallery shows four or five exhibitions a year. Entry is free, loans are welcome, and about half of what hangs is not for sale."
      />

      <section className="band">
        <div className="wrap">
          <div className="rows">
            {EXHIBITIONS.map((e, i) => (
              <RevealOnScroll key={i}>
                <div className="row rise">
                  <div className="when">
                    {e.st}<br />
                    <span className="muted" style={{ textTransform: 'none', letterSpacing: 0 }}>{e.when}</span>
                  </div>
                  <div>
                    <h3>{e.t}</h3>
                    <p>{e.d}</p>
                    <p className="mono muted" style={{ marginTop: '10px' }}>{e.s}</p>
                  </div>
                  <div>
                    {e.st === 'Past' ? (
                      <span className="mono muted">Closed</span>
                    ) : (
                      <Link className={`btn btn-sm${e.st === 'Current' ? ' btn-em' : ''}`} href="/visit">Plan a visit</Link>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <div className="panel panel-em rise" style={{ marginTop: 'clamp(40px,5vw,70px)' }}>
              <p className="eyebrow">Lending</p>
              <h3 style={{ margin: '14px 0 10px', maxWidth: '24ch' }}>If you own something that belongs in one of these rooms, we would like to borrow it.</h3>
              <p style={{ maxWidth: '64ch' }}>Loans are insured wall-to-wall at our cost, transported by our handlers, and returned with a condition report on both ends. Lenders are credited as they wish, including anonymously.</p>
              <Link className="btn btn-gh" href="/visit" style={{ marginTop: '20px' }}>Talk to the gallery</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
