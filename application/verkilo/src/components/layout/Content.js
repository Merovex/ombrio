import React, { useState } from 'react';
import { Sidebar } from "./Sidebar";
import { Binder } from "../Binder/Binder";
import { TextEditor } from "../TextEditor/TextEditor";
import { EditorContext } from "../../context/EditorContext";

export const Content = () => {
  const [activeSection, setActiveSection] = useState("fXbBpClxz0yVvRZ9WvaD")
  const [activeProjectId, setActiveProjectId] = useState("b8cea452-940a-44ef-8a23-07e4619c7f41")

  const contextValue = {
    activeSection, setActiveSection
  }
  return (
    <main>
      <Sidebar />
      <EditorContext.Provider value={contextValue}>
        <Binder activeProjectId={activeProjectId} />
        <TextEditor />
      </EditorContext.Provider>
    </main>
  );
}
