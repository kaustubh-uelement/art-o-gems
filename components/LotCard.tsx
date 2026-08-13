import { Lot } from '@/lib/data';
import { artSvg } from '@/lib/art';
import { fmt } from '@/lib/format';
import Link from 'next/link';

interface LotCardProps {
  lot: Lot;
  className?: string;
}

export default function LotCard({ lot, className }: LotCardProps) {
  return (
    <Link href={`/lot/${lot.no}`} className={['card', className].filter(Boolean).join(' ')}>
      <div className="card-art">
        <div dangerouslySetInnerHTML={{ __html: artSvg(lot) }} />
        <span className="card-no">Lot {lot.no}</span>
        {lot.flag && <span className="card-flag">{lot.flag}</span>}
      </div>
      <div className="card-b">
        <p className="who">{lot.artist}</p>
        <h4>{lot.title}</h4>
        <p className="muted" style={{ fontSize: '.83rem' }}>{[lot.year, lot.medium].filter(Boolean).join(' · ')}</p>
        <p className="est">Estimate {fmt(lot.lo)} – {fmt(lot.hi)}</p>
      </div>
    </Link>
  );
}
