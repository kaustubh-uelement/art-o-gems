import { Metadata } from 'next';
import Link from 'next/link';
import { LOTS, RESULTS } from '@/lib/data';
import { artHiSvg, painting, stone } from '@/lib/art';
import { estOf, fmt } from '@/lib/format';
import Loupe from '@/components/Loupe';
import LotCard from '@/components/LotCard';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: "Art 'O' Gems — Gallery & Auction House, Pune",
  description: "A gallery and auction house for modern art, coloured stones and period jewels. Auctions, exhibitions, valuations and private sales."
};

export default function Home() {
  const highlights = [0, 2, 5, 8, 4, 6, 10, 12].map(i => LOTS[i]);
  const homeResults = RESULTS.slice(0, 5);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <RevealOnScroll>
              <p className="eyebrow rise">Evening Sale · Thu 24 September 2026 · 7:00 pm IST</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <h1 className="rise">Look at it the way a <em>specialist</em> would.</h1>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="lead rise">Art ‘O’ Gems is a gallery and auction house for modern art, coloured stones and period jewels. Drag the loupe across the canvas — the craquelure, the marble dust, the pigment sitting proud of the weave. Then decide what it’s worth to you.</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="hero-cta rise">
                <Link className="btn btn-em" href="/sale">Browse the September catalogue</Link>
                <Link className="btn" href="/sell">Sell with us</Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="hero-note mono rise">74 lots — 41 paintings, works on paper and sculpture; 33 jewels and unmounted stones. Viewing daily from 19 September, free and open to all.</p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <figure className="plate-wrap rise">
              <Loupe svgString={artHiSvg(LOTS[0])} lotNo="03" />
              <figcaption 
                className="caption"
                dangerouslySetInnerHTML={{ __html: '<b>Meher Anand</b>, <i>Monsoon Interval III</i>, 2019. Oil and marble dust on linen, 152 × 122 cm. Estimate ₹18,00,000 – 24,00,000.' }} 
              />
            </figure>
          </RevealOnScroll>
        </div>
      </section>

      <section className="strip">
        <RevealOnScroll>
          <dl className="wrap strip-in rise">
            <div className="cell"><dt>Viewing</dt><dd>19–23 September <span>· 11:00–19:00 daily</span></dd></div>
            <div className="cell"><dt>The sale</dt><dd>24 September <span>· 7:00 pm IST</span></dd></div>
            <div className="cell"><dt>Bidding</dt><dd>In the room, telephone, absentee, online</dd></div>
            <div className="cell"><dt>Registration</dt><dd><span className="pulse"></span>Open until 23 Sep, 18:00</dd></div>
          </dl>
        </RevealOnScroll>
      </section>

      <section className="band">
        <div className="wrap">
          <RevealOnScroll>
            <div className="shead rise">
              <div>
                <p className="eyebrow">Highlights</p>
                <h2 style={{ marginTop: '16px' }}>Eight lots worth crossing town for.</h2>
              </div>
              <Link className="btn" href="/sale">All 74 lots</Link>
            </div>
          </RevealOnScroll>
          <div className="grid g4">
            {highlights.map((lot, idx) => (
              <RevealOnScroll key={lot.no}>
                <LotCard lot={lot} className="rise" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ background: 'var(--pearl-2)', borderBlock: '1px solid var(--line-2)' }}>
        <div className="wrap">
          <RevealOnScroll>
            <p className="eyebrow rise">Two departments, one saleroom</p>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className="rise" style={{ marginTop: '16px', maxWidth: '22ch' }}>We sell what people keep in the light, and what they keep in the safe.</h2>
          </RevealOnScroll>
          <div className="grid g2" style={{ marginTop: 'clamp(30px,4vw,48px)' }}>
            <RevealOnScroll>
              <Link className="card rise" href="/art" style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '22px', alignItems: 'center' }}>
                <div className="card-art" dangerouslySetInnerHTML={{ __html: painting({seed:70, fields:6, strokes:1, marks:0, grain:400, cracks:30, horizon:true, colors:['#EFE6D2','#7FA08E','#C3B291','#3E4F46'], line:'#2C3A33', alt:'Art department'}) }}></div>
                <div>
                  <h3>Modern &amp; Contemporary Art</h3>
                  <p className="muted" style={{ marginTop: '8px', fontSize: '.92rem' }}>Post-1947 painting, works on paper, editions and sculpture. Every lot with a written condition report and an ownership line we can stand behind.</p>
                  <p className="mono em" style={{ marginTop: '14px' }}>View the department &rarr;</p>
                </div>
              </Link>
            </RevealOnScroll>
            <RevealOnScroll>
              <Link className="card rise" href="/jewels" style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '22px', alignItems: 'center' }}>
                <div className="card-art" dangerouslySetInnerHTML={{ __html: stone({seed:53, hue:'#0E7A4E', bg:'#04150F', alt:'Jewels department'}) }}></div>
                <div>
                  <h3>Jewels &amp; Coloured Stones</h3>
                  <p className="muted" style={{ marginTop: '8px', fontSize: '.92rem' }}>Unmounted stones, natural pearls and period jewellery. Origin and treatment go in the lot line, not the footnote.</p>
                  <p className="mono em" style={{ marginTop: '14px' }}>View the department &rarr;</p>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="band nacre">
        <div className="wrap narrow">
          <RevealOnScroll>
            <div className="shead rise">
              <div>
                <p className="eyebrow">Sell with us</p>
                <h2 style={{ marginTop: '16px' }}>What we need to value an object.</h2>
              </div>
              <Link className="btn" href="/sell">Start a valuation</Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <ul className="checklist rise">
              <li>Photographs: the whole work, the signature, the back, and any damage</li>
              <li>Dimensions, and the medium if you know it</li>
              <li>Anything on where it came from — a bill, a letter, a family story</li>
              <li>For stones: carat weight and any laboratory report, however old</li>
              <li>What you think it’s worth, if you have a number in mind</li>
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <RevealOnScroll>
            <div className="shead rise">
              <div>
                <p className="eyebrow">Results</p>
                <h2 style={{ marginTop: '16px' }}>Recent highlights from the rostrum.</h2>
              </div>
              <Link className="btn" href="/results">All past results</Link>
            </div>
          </RevealOnScroll>
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
                  {homeResults.map((r, i) => (
                    <tr key={i}>
                      <td>{r.sale}</td>
                      <td>{r.lot}</td>
                      <td dangerouslySetInnerHTML={{ __html: r.what }}></td>
                      <td className="num muted">{r.est}</td>
                      <td className={r.ham === 'Passed' ? 'num muted' : 'sold'} style={{ textAlign: 'right' }}>{r.ham}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="band-s dark">
        <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ maxWidth: '20ch' }}>The gallery is open whether or not there is a sale on.</h2>
            <p className="lead" style={{ marginTop: '14px' }}>Koregaon Park, Pune. Tuesday to Sunday, 11:00–19:00. No appointment needed.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link className="btn btn-gh" href="/visit">Plan a visit</Link>
            <Link className="btn btn-gh" href="/exhibitions">See exhibitions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
