import React, {useContext} from 'react';
import { Sections } from "../Sections";
// import { EditorContext } from "../../context/EditorContext"

export const Binder = props => {
  return (
    <section className='binder' data-testid='binder'>
      <h2>Project Name</h2>
      <h3>Manuscript</h3>
      <Sections
        projectId={'21lMxW5WU1f3fGUVBcrc'}
      />
      <h3>Research</h3>
    </section>
  )
};
// B = Block
// E = Element
// M = Modifier
