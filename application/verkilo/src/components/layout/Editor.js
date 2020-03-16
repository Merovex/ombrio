import React, { useContext } from 'react';
import { useSection } from '../../hooks';
import { EditorContext } from "../../context/EditorContext";
import {firebase} from '../../firebase';

export const Editor = () => {
  const handleTextChange = (event) => {
    console.log(section.docId)
    const neusection = {...section, text: event.target.value}
    setSection(neusection);
    firebase.firestore()
      .collection('sections')
      .doc(section.docId)
      .update(neusection);
  }

  const { activeSection } = useContext(EditorContext);
  const { section, setSection } = useSection(activeSection);

  const title = (section) ? section.title : "No Title";
  const text = (section) ? section.text : "";
  const synopsis = (section) ? section.synopsis : "";
  const wordcount = (text.length) ? Math.round(text.length / 5) : 0;
  return (
    <section className='editor'>
      <div className='page'>
        <h2 className='section-title'>{title}/{activeSection}</h2>
        <textarea
          onChange={handleTextChange}
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
