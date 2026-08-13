import { Lot } from '@/lib/data';
import LotCard from './LotCard';

export default function LotGrid({ lots, className = '' }: { lots: Lot[], className?: string }) {
  return (
    <div className={`grid g4 ${className}`.trim()}>
      {lots.map(lot => <LotCard key={lot.no} lot={lot} />)}
    </div>
  );
}
