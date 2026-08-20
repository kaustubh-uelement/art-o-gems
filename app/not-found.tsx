import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Not Found - Kalos Kagathos"
};

export default function NotFound() {
  return (
    <>
      <Breadcrumbs parts={[['Not found']]} />
      <section className="band">
        <RevealOnScroll>
          <div className="narrow rise" style={{ textAlign: 'center', padding: 'clamp(30px,6vw,80px) 0' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>404</p>
            <h1 style={{ margin: '20px 0' }}>That lot has been withdrawn.</h1>
            <p className="lead" style={{ marginInline: 'auto' }}>Or the page never existed. Either way, the catalogue is the best place to start again.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
              <Link className="btn btn-em" href="/sale">September catalogue</Link>
              <Link className="btn" href="/">Home</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
