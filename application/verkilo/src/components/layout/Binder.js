import React from 'react';
// import { Projects } from "../Projects";
import { Sections } from "../Sections";


export const Binder = () => (
  <section className='binder' data-testid='binder'>
    <Sections />
    <ul className='binder__generic'>
      <li>Project A</li>
      <li>Project B</li>
      <li>Project C</li>
    </ul>
  </section>
);
// B = Block
// E = Element
// M = Modifier