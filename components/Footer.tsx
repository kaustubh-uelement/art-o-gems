import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <Link className="mark" href="/">
              Kalos
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <g fill="none" stroke="#3FD9A6" strokeWidth="1.5">
                  <path d="M20 2.4 34.3 8.4 40 20 34.3 31.6 20 37.6 5.7 31.6 0 20 5.7 8.4Z" />
                  <path d="M20 11.4 27.5 14.5 30.6 20 27.5 25.5 20 28.6 12.5 25.5 9.4 20 12.5 14.5Z" />
                  <path d="M12.5 14.5 5.7 8.9M27.5 14.5 34.3 8.9M12.5 25.5 5.7 31.1M27.5 25.5 34.3 31.1M20 11.4V2.9M20 28.6v8.5M9.4 20H.6M30.6 20h8.8" />
                </g>
              </svg>
              Kagathos
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: ".58rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#8FA79A",
                  marginLeft: "10px",
                  paddingLeft: "10px",
                  borderLeft: "1px solid var(--line-dk)",
                  whiteSpace: "nowrap",
                }}
              >
                by Uelement
              </span>
            </Link>
            <p
              style={{
                marginTop: "16px",
                maxWidth: "30ch",
                color: "var(--dim)",
                fontSize: ".94rem",
              }}
            >
              A gallery and auction house for modern art, coloured stones and
              period jewels. Founded in Pune, 2009.
            </p>
            <hr className="rule nacre-rule" style={{ margin: "30px 0" }} />
            <p
              className="mono"
              style={{ color: "var(--pearl)", marginBottom: "8px" }}
            >
              Saleroom bulletin
            </p>
            <p
              style={{
                color: "var(--dim-lt)",
                fontSize: ".9rem",
                marginBottom: "16px",
                maxWidth: "28ch",
              }}
            >
              Catalogues and viewing dates, roughly once a month.
            </p>
            <NewsletterForm />
          </div>
          <div>
            <p className="mono">Buy</p>
            <ul>
              <li>
                <Link href="/auctions">Auctions</Link>
              </li>
              <li>
                <Link href="/sale">September catalogue</Link>
              </li>
              <li>
                <Link href="/bidding">How to bid</Link>
              </li>
              <li>
                <Link href="/results">Past results</Link>
              </li>
              <li>
                <Link href="/private-sales">Private sales</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mono">Sell</p>
            <ul>
              <li>
                <Link href="/sell">Sell with us</Link>
              </li>
              <li>
                <Link href="/sell">Free valuations</Link>
              </li>
              <li>
                <Link href="/art">Art department</Link>
              </li>
              <li>
                <Link href="/jewels">Jewels department</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mono">Visit</p>
            <ul>
              <li>
                <Link href="/visit">Gallery &amp; saleroom</Link>
              </li>
              <li>
                <Link href="/exhibitions">Exhibitions</Link>
              </li>
              <li>
                <Link href="/specialists">Our specialists</Link>
              </li>
              <li>
                <a href="mailto:saleroom@kaloskagathos.example">
                  saleroom@kaloskagathos.example
                </a>
              </li>
              <li>
                <a href="tel:+912000000000">+91 20 0000 0000</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ftr-b">
          <p>
            &copy; 2026 Kalos Kagathos Arts and Antiques Private Limited
            &middot; by Uelement
          </p>
          <p>
            <span>Conditions of sale</span> &middot;{" "}
            <span>Terms of consignment</span> &middot; <span>Privacy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
