'use client';
import { useState } from 'react';

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (submitted) return;
    setSubmitted(true);
  }

  return (
    <div className="form" style={{ marginTop: '20px' }}>
      <div className="field"><label htmlFor="rn">Full name</label><input id="rn" type="text" placeholder="As on your ID" /></div>
      <div className="field"><label htmlFor="re">Email</label><input id="re" type="email" placeholder="you@example.com" /></div>
      <div className="field"><label htmlFor="rp">Phone</label><input id="rp" type="tel" placeholder="+91" /></div>
      <div className="field">
        <label htmlFor="rm">How you will bid</label>
        <select id="rm"><option>In the room</option><option>Telephone</option><option>Absentee bid</option><option>Live online</option></select>
      </div>
      <div className="field full"><label htmlFor="rl">Lots you are interested in (optional)</label><input id="rl" type="text" placeholder="e.g. 12, 18, 31" /></div>
      <p className="formnote">We will email a paddle number and the conditions of sale. Nothing is charged at this stage.</p>
      <div className="field full">
        <button className="btn btn-em" onClick={handleSubmit} disabled={submitted} style={submitted ? { opacity: 0.5 } : {}}>Send registration</button>
      </div>
      {submitted && <p className="sent">Registration sent. Your paddle number arrives by email within one working day.</p>}
    </div>
  );
}
