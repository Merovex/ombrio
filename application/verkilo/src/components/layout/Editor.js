import React from 'react';
import { useActiveSection } from '../../hooks';

export const Editor = () => {
  const { section } = useActiveSection();
  console.log("THERE " + section)
  // Get 
  return (
    <section className='editor'>
      <p>I am an editor {section}.</p>
    </section>
  )
};