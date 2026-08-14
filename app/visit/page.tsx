import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import ContactForm from '@/components/forms/ContactForm';
import { painting } from '@/lib/art';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Visit — Kalos Kagathos",
};

export default function VisitPage() {
  const planSvg = painting({
    seed: 120,
    fields: 9,
    strokes: 3,
    marks: 12,
    grain: 300,
    cracks: 0,
    colors: ["#E9EDE8", "#CBD8CF", "#0B6046", "#DDE3DD"],
    line: "#0B6046",
    alt: "Stylised plan of the Koregaon Park building"
  });

  return (
    <>
      <Breadcrumbs items={[['Visit']]} />
      <PageHead
        eyebrow="Visit"
        h1="The gallery is open whether or not there is a sale on."
        lead="Ground floor for exhibitions and the saleroom, mezzanine for jewels viewing and the reading room. Step-free access from the courtyard entrance."
      />

      <section className="band">
        <RevealOnScroll>
          <div className="wrap grid g2 rise" style={{ gap: 'clamp(30px,5vw,74px)', alignItems: 'start' }}>
            <div>
              <div className="grid g2" style={{ gap: '30px' }}>
                <div><h4>Gallery &amp; saleroom</h4><p className="muted" style={{ marginTop: '8px' }}>Ground floor, Sohrab Building<br/>North Main Road, Koregaon Park<br/>Pune 411001, Maharashtra</p></div>
                <div><h4>Hours</h4><p className="muted" style={{ marginTop: '8px' }}>Tuesday to Sunday, 11:00–19:00<br/>Closed Mondays<br/>Sale days: closed until 17:00</p></div>
                <div><h4>Contact</h4><p className="muted" style={{ marginTop: '8px' }}><a href="mailto:saleroom@kaloskagathos.example" style={{ textDecoration: 'none' }}>saleroom@kaloskagathos.example</a><br/><a href="tel:+912000000000" style={{ textDecoration: 'none' }}>+91 20 0000 0000</a></p></div>
                <div><h4>Getting here</h4><p className="muted" style={{ marginTop: '8px' }}>Ten minutes from Pune Junction. Paid parking in the courtyard, six spaces. Nearest bus stop: North Main Road.</p></div>
              </div>
              <div className="panel panel-nacre" style={{ marginTop: '32px' }}>
                <h4>During sale week</h4>
                <p className="muted" style={{ marginTop: '10px', fontSize: '.92rem' }}>Viewing 19–23 September, 11:00–19:00 daily. Jewels are shown on the mezzanine by request — ask at the desk and a specialist will bring the stones out with a loupe and a daylight lamp. No appointment needed, but the last hour is quieter.</p>
              </div>
            </div>
            
            <div>
              <div className="plate sq" style={{ cursor: 'default', boxShadow: 'none' }} dangerouslySetInnerHTML={{ __html: planSvg }} />
              <p className="caption">Sohrab Building, ground floor and mezzanine. Courtyard entrance is step-free.</p>
              <div className="panel" style={{ marginTop: '24px' }}>
                <h4>Ask us something</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
