"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV } from "@/lib/data";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === pathname) return true;
    if (pathname.startsWith("/lot/") && href === "/sale") return true;
    return false;
  }

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link className="mark" href="/">
          Kalos
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <g fill="none" stroke="#0B6046" strokeWidth="1.5">
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
              color: "var(--emerald)",
              marginLeft: "10px",
              paddingLeft: "10px",
              borderLeft: "1px solid var(--line)",
              whiteSpace: "nowrap",
            }}
          >
            by Uelement
          </span>
        </Link>
        <nav className="mainnav" aria-label="Primary">
          {NAV.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? "act" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-em hdr-cta" href="/bidding">
          Register to bid
        </Link>
        <button
          className="burger"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
      <MobileDrawer open={drawerOpen} />
    </header>
  );
}
