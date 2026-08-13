'use client';
import Link from 'next/link';
import { NAV } from '@/lib/data';

export default function MobileDrawer({ open }: { open: boolean }) {
  return (
    <div className={`drawer${open ? ' open' : ''}`}>
      <div className="wrap">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
        <Link href="/bidding" style={{ color: 'var(--emerald)' }}>Register to bid</Link>
      </div>
    </div>
  );
}
