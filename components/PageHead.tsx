export default function PageHead({ eyebrow, h1, lead, aside }: { eyebrow: string, h1: string, lead?: string, aside?: React.ReactNode }) {
  return (
    <section className="phead">
      <div className="wrap phead-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{h1}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
        <div>{aside}</div>
      </div>
    </section>
  );
}
