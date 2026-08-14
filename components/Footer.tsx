import Image from "next/image";
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
              <Image
                src="/Kalos_Kagathos.png"
                alt="Kalos Kagathos"
                width={36}
                height={36}
                style={{
                  width: "1.25em",
                  height: "1.25em",
                  objectFit: "cover",
                  borderRadius: "50%",
                  flex: "none",
                  marginInline: ".04em",
                  background: "var(--ivory)",
                }}
              />
              Kagathos
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
              period jewels. Founded in Mumbai, 2009.
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
          <p>&copy; 2026 Kalos Kagathos Arts and Antiques Private Limited</p>
          <p>
            <span>Conditions of sale</span> &middot;{" "}
            <span>Terms of consignment</span> &middot; <span>Privacy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
