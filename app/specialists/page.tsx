import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHead from '@/components/PageHead';
import CtaBand from '@/components/CtaBand';
import { TEAM } from '@/lib/data';
import { portrait } from '@/lib/art';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "About — Art 'O' Gems",
};

export default function SpecialistsPage() {
  return (
    <>
      <Breadcrumbs items={[['About']]} />
      <PageHead
        eyebrow="About"
        h1="Six people, one rostrum, seventeen years."
        lead="Art ‘O’ Gems was founded in Pune in 2009 to sell modern Indian art and coloured stones in the same room, on the theory that the people who collect one often collect the other. We have held two or three sales a year since."
      />

      <section className="band">
        <div className="wrap">
          <div className="grid g3">
            {TEAM.map((p, k) => (
              <RevealOnScroll key={p.n}>
                <div className="person rise">
                  <div className="av" dangerouslySetInnerHTML={{ __html: portrait(k + 3) }} />
                  <h4>{p.n}</h4>
                  <p className="role" dangerouslySetInnerHTML={{ __html: p.r }} />
                  <p dangerouslySetInnerHTML={{ __html: p.b }} />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="band dark">
        <RevealOnScroll>
          <div className="wrap rise" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(28px,4vw,64px)', alignItems: 'start' }}>
            <div>
              <p className="eyebrow">How we work</p>
              <h2 style={{ marginTop: '16px', maxWidth: '18ch' }}>Three rules we have not broken yet.</h2>
            </div>
            <div className="stack">
              <div><h4>We say what we do not know</h4><p>An attribution we cannot support goes in as “attributed to”, and a stone we cannot place goes in without an origin. Certainty is worth money, which is exactly why we will not manufacture it.</p></div>
              <div><h4>We do not bid on our own lots</h4><p>Staff and their families do not bid in our sales. Where we own part of a lot, the catalogue says so against that lot.</p></div>
              <div><h4>We publish the failures</h4><p>Passed lots appear in our results with the word “Passed” next to them.</p></div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <CtaBand
        title="Come and see the building."
        text="Koregaon Park, Pune. Tuesday to Sunday, 11:00–19:00, no appointment needed."
        btn1="Visit us"
        href1="/visit"
        btn2="Current exhibition"
        href2="/exhibitions"
      />
    </>
  );
}
