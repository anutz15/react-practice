import React from 'react';

// this is a wrapper component
export default function Section({title,children,...props}) {
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}
