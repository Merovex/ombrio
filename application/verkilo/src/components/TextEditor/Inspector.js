import React, { useState, useContext, useEffect } from 'react';
import IdleTimer from 'react-idle-timer';
import { saveSection } from '../../hooks';
import { EditorContext } from "../../context/EditorContext";

export const Inspector = () => {
  const { section } = useContext(EditorContext);
  const [synopsis, setSynopsis] = useState();
  let idleTimer;

  useEffect(() => {
    setSynopsis(section.synopsis)
  },[section.synopsis])

  const handleSynopsisChange = (event) => {
    setSynopsis(event.target.value)
  }
  const handleSave = () => {
    saveSection({...section, synopsis: synopsis.trim()})
  }
  return (
    <aside className='inspector'>
      <div>
        <IdleTimer
          ref={(ref) => { idleTimer = ref }}
          element={document}
          onIdle={() => handleSave()}
          debounce={250}
          timeout={3000} />
        <h3>Synopsis</h3>
        <textarea
          onChange={handleSynopsisChange}
          onBlur={handleSave}
          placeholder="Loading text..."
          value={synopsis} />
      </div>
    </aside>
  )
}
