'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  }

  return (
    <>
      <div className="news">
        <input
          type="email"
          placeholder="you@example.com"
          aria-label="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={submitted}
        />
        <button className="btn btn-gh btn-sm" onClick={handleSubmit} disabled={submitted}>Join</button>
      </div>
      {submitted && (
        <p className="mono" style={{ marginTop: '10px', color: '#3FD9A6' }}>
          Added — look for the September catalogue.
        </p>
      )}
    </>
  );
}
