import React, { useContext, useMemo, useState } from 'react';
import { useSection, saveSection } from '../../hooks';
import { EditorContext } from "../../context/EditorContext";

import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

export const Editor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([]);

  const saveChanges = section => {
    setSection(section);
    saveSection(section);
  }
  const handleSynopsisChange = (event) => {
    saveChanges({...section, synopsis: event.target.value})
  }
  const handleTextChange = (event) => {
    saveChanges({...section, text: event.target.value})
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
        <h2 className='section-title'>{title}</h2>
          <textarea
            onChange={handleTextChange}
            placeholder="Loading text..."
            value={text} />

      </div>
      <aside className='inspector'>
        <h3>Synopsis</h3>
        <textarea
          onChange={handleSynopsisChange}
          placeholder="Loading text..."
          value={synopsis} />
        <div>{wordcount}</div>
      </aside>
    </section>
  )
};
