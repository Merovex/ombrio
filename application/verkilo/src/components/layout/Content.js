import React, { useState } from 'react';
import { Sidebar } from "./Sidebar";
import { Drawer } from "../Drawer/Drawer";
import { TextEditor } from "./TextEditor";
import { EditorContext } from "../../context/EditorContext";

export const Content = () => {
  const [activeSection, setActiveSection] = useState("fXbBpClxz0yVvRZ9WvaD")
  const [activeProjectId, setActiveProjectId] = useState("21lMxW5WU1f3fGUVBcrc")

  const contextValue = {
    activeSection, setActiveSection
  }
  return (
    <main>
      <Sidebar />
      <EditorContext.Provider value={contextValue}>
        <Drawer activeProjectId={activeProjectId} />
        <TextEditor />
      </EditorContext.Provider>
    </main>
  );
}
