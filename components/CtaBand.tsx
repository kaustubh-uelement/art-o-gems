import Link from 'next/link';

interface CtaBandProps {
  title: string;
  paragraph?: string;
  text?: string;
  btn1: string;
  href1: string;
  btn2?: string;
  href2?: string;
}

export default function CtaBand({ title, paragraph, text, btn1, href1, btn2, href2 }: CtaBandProps) {
  const body = paragraph ?? text ?? '';
  return (
    <section className="band-s dark">
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '30px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h2 style={{ maxWidth: '20ch' }}>{title}</h2>
          <p className="lead" style={{ marginTop: '14px' }}>{body}</p>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link className="btn btn-gh" href={href1}>{btn1}</Link>
          {btn2 && href2 && (
            <Link className="btn btn-gh" href={href2}>{btn2}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
