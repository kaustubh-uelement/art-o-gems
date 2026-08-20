'use client';
import { useState } from 'react';

export default function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (submitted) return;
    setSubmitted(true);
  }

  return (
    <div className="form">
      <div className="field"><label htmlFor="vn">Your name</label><input id="vn" type="text" /></div>
      <div className="field"><label htmlFor="ve">Email</label><input id="ve" type="email" placeholder="you@example.com" /></div>
      <div className="field">
        <label htmlFor="vd">Department</label>
        <select id="vd"><option>Modern &amp; Contemporary Art</option><option>Jewels &amp; Coloured Stones</option><option>Works on paper &amp; editions</option><option>Not sure</option></select>
      </div>
      <div className="field">
        <label htmlFor="vc">Number of objects</label>
        <select id="vc"><option>One</option><option>Two to five</option><option>Six to twenty</option><option>A whole collection</option></select>
      </div>
      <div className="field full">
        <label htmlFor="vt">Tell us about it</label>
        <textarea id="vt" placeholder="Artist or stone, size or carat weight, when and where it came into the family, and anything you already know about condition." rows={4}></textarea>
      </div>
      <p className="formnote">Please don't attach photographs here; we'll ask for them by email so they arrive at full size.</p>
      <div className="field full">
        <button className="btn btn-em" onClick={handleSubmit} disabled={submitted} style={submitted ? { opacity: 0.5 } : {}}>Send request</button>
      </div>
      {submitted && <p className="sent">Request sent. A specialist replies within five working days.</p>}
    </div>
  );
}
