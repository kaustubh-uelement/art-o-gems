'use client';
import Link from 'next/link';
import { NAV } from '@/lib/data';

export default function MobileDrawer({ open }: { open: boolean }) {
  return (
    <div className={`drawer${open ? ' open' : ''}`}>
      <div className="wrap">
        {NAV.flatMap((navItem) => {
          const links = [<Link key={navItem[0]} href={navItem[0]}>{navItem[1]}</Link>];
          if (navItem[2]) {
            navItem[2].forEach((sub) => {
               links.push(<Link key={sub[0]} href={sub[0]} className="pl-4 opacity-75">{sub[1]}</Link>);
            });
          }
          return links;
        })}
        <Link href="/bidding" style={{ color: 'var(--emerald)' }}>Register to bid</Link>
      </div>
    </div>
  );
}
