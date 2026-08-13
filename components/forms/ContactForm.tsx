'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (submitted) return;
    setSubmitted(true);
  }

  return (
    <div className="form">
      <div className="field"><label htmlFor="cn">Name</label><input id="cn" type="text" /></div>
      <div className="field"><label htmlFor="ce">Email</label><input id="ce" type="email" placeholder="you@example.com" /></div>
      <div className="field full">
        <label htmlFor="cm">Message</label>
        <textarea id="cm" placeholder="A lot number, a viewing time, or an object you would like us to look at." rows={4}></textarea>
      </div>
      <div className="field full">
        <button className="btn btn-em" onClick={handleSubmit} disabled={submitted} style={submitted ? { opacity: 0.5 } : {}}>Send message</button>
      </div>
      {submitted && <p className="sent">Message sent. We answer everything, usually the same day.</p>}
    </div>
  );
}
