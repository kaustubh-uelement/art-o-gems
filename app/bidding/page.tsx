import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import RegistrationForm from '@/components/forms/RegistrationForm';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "How to bid - Kalos Kagathos",
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
                <li>An absentee bid is executed as cheaply as competing bids allow; leaving a high maximum does not mean paying it</li>
                <li>A passed lot is announced as passed; we do not report it as sold</li>
              </ul>
            </div>
            
            <div>
              <div className="panel" style={{ padding: 0 }}>
                <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--line)', fontFamily: 'var(--mono)', fontSize: '.63rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--dim)' }}>Bid increments - Indian rupees</div>
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
                <p className="muted" style={{ fontSize: '.88rem', marginTop: '8px' }}>Sale 2609: September Evening Sale.</p>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
