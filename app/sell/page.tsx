import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import ValuationForm from '@/components/forms/ValuationForm';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Sell with us — Kalos Kagathos",
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
