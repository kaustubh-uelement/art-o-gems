import Link from 'next/link';

interface BreadcrumbsProps {
  parts?: string[][];
  items?: string[][];
}

export default function Breadcrumbs({ parts, items }: BreadcrumbsProps) {
  const crumbs = parts ?? items ?? [];
  return (
    <div className="crumbs">
      <div className="wrap crumbs-in">
        <Link href="/">Home</Link>
        {crumbs.map((crumb, i) => {
          const label = crumb[0];
          const href = crumb[1];
          return (
            <span key={i}>
              <span>/</span>{' '}
              {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
