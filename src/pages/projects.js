import React from 'react';
import Link from 'next/link';

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <h3>Project 1</h3>
        <p>Project description goes here.</p>
      </div>
      {/* Add more projects */}
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default Projects;