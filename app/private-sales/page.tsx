import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Private Sales — Kalos Kagathos",
  description: "A private sale is the right route when a work is exceptionally large, when the market is thin, when timing matters more than competition, or when discretion is the point."
};

export default function PrivateSales() {
  return (
    <>
      <Breadcrumbs parts={[['Private sales']]} />
      <PageHead
        eyebrow="Private sales"
        h1="Some objects should not be sold in a room full of people."
        lead="A private sale is the right route when a work is exceptionally large, when the market is thin, when timing matters more than competition, or when discretion is the point. We place it directly with a buyer, at a price agreed in advance."
        aside={
          <div className="panel">
            <p className="mono muted">Head of private sales</p>
            <h3 style={{ margin: '8px 0 4px' }}>Zoya Merchant</h3>
            <p className="muted" style={{ fontSize: '.88rem' }}>private@kaloskagathos.example</p>
          </div>
        }
      />

      <section className="band">
        <div className="wrap">
          <div className="grid g2" style={{ alignItems: 'start' }}>
            <RevealOnScroll>
              <div className="rise stack">
                <h3>How it works</h3>
                <div className="steps" style={{ marginTop: '20px' }}>
                  <div className="step">
                    <div>
                      <h4>We agree a figure</h4>
                      <p>Not an estimate range — a price you would accept and a floor you would not go below.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div>
                      <h4>We approach a short list</h4>
                      <p>Usually between three and twelve collectors or institutions. You see the list before we contact anyone.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div>
                      <h4>Viewing, in private</h4>
                      <p>At our gallery, at your home, or at the buyer’s, with our handlers moving the work.</p>
                    </div>
                  </div>
                  <div className="step">
                    <div>
                      <h4>Sale and settlement</h4>
                      <p>Funds cleared before release. Commission agreed in writing at the start, typically below the auction seller’s rate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div className="rise">
                <div className="panel">
                  <h4>When an auction is better</h4>
                  <p className="muted" style={{ marginTop: '10px', fontSize: '.92rem' }}>If there is real competition for the object, an auction will usually find a higher price than a negotiation. We will tell you when that is the case, even though the commission is better for us the other way.</p>
                </div>
                <div className="panel panel-nacre" style={{ marginTop: '20px' }}>
                  <h4>Confidentiality</h4>
                  <p className="muted" style={{ marginTop: '10px', fontSize: '.92rem' }}>Private sales are not published, not listed in results, and not discussed. Where a buyer asks for provenance, we give only what you have agreed to release.</p>
                </div>
                <Link className="btn btn-em" href="/sell" style={{ marginTop: '20px' }}>Start a conversation</Link>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
