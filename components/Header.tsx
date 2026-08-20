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
          <span className="relative flex flex-col items-center">
            Kalos
            <span className="absolute top-full left-[0.1em] -mt-[0.3em] text-[0.38em] font-light text-[var(--dim)] whitespace-nowrap" style={{ fontFamily: 'var(--body)' }}>by UElement</span>
          </span>
          <svg viewBox="0 0 40 40" aria-hidden="true">
            <g fill="none" stroke="#0B6046" strokeWidth="1.5">
              <path d="M20 2.4 34.3 8.4 40 20 34.3 31.6 20 37.6 5.7 31.6 0 20 5.7 8.4Z" />
              <path d="M20 11.4 27.5 14.5 30.6 20 27.5 25.5 20 28.6 12.5 25.5 9.4 20 12.5 14.5Z" />
              <path d="M12.5 14.5 5.7 8.9M27.5 14.5 34.3 8.9M12.5 25.5 5.7 31.1M27.5 25.5 34.3 31.1M20 11.4V2.9M20 28.6v8.5M9.4 20H.6M30.6 20h8.8" />
            </g>
          </svg>
          Kagathos
        </Link>
        <nav className="mainnav" aria-label="Primary">
          {NAV.map((navItem) => {
            const href = navItem[0];
            const label = navItem[1];
            const subItems = navItem[2];
            
            const isAct = isActive(href) || subItems?.some((sub) => isActive(sub[0]));

            if (subItems) {
              return (
                <div key={href} className="group relative">
                  <Link href={href} className={`flex items-center gap-1.5 ${isAct ? "act" : ""}`}>
                    {label}
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="opacity-60 transition-transform duration-300 group-hover:-rotate-180">
                      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-0 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                    <div 
                      className="py-5 px-6 flex flex-col items-start gap-4 min-w-[200px]"
                      style={{
                        background: 'var(--ivory-2)',
                        border: '1px solid var(--line-2)',
                        borderTop: '2px solid var(--emerald)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.06)'
                      }}
                    >
                      {subItems.map(([subHref, subLabel]) => (
                        <Link
                          key={subHref}
                          href={subHref}
                          className={isActive(subHref) ? "act" : ""}
                        >
                          {subLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className={isAct ? "act" : ""}
              >
                {label}
              </Link>
            );
          })}
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
