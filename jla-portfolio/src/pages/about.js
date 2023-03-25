import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>Your description goes here.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default About;