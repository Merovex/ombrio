import React, { useContext, useState } from 'react';
import { useSection } from '../../hooks';
import { EditorContext } from "../../context/EditorContext";
import {firebase} from '../../firebase';

export const Editor = () => {
  const [section, setSection] = useState();
  const { activeSection } = useContext(EditorContext);
  firebase.firestore()
    .collection('sections')
    .doc(activeSection)
    .onSnapshot(doc => {
      const newSection = {
        ...doc.data(),
        docId: doc.id,
      }
      if (JSON.stringify(newSection) !== JSON.stringify(section)) {
        console.log("Changing")
        setSection(newSection)
      }
    });
  const text = (section) ? section.text : "";
  const synopsis = (section) ? section.synopsis : "";
  const wordcount = Math.round(text.length / 5);
  return (
    <section className='editor'>
      <div className='form'>
        <h2 className='section-title'>{activeSection}</h2>
        <textarea
          placeholder="Loading text..."
          value={text} />
      </div>
      <aside>
        <h3>Synopsis</h3>
        <textarea value={synopsis} />
        <div>{wordcount}</div>
      </aside>
    </section>
  )
};
