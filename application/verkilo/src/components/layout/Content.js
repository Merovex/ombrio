import React, { useState } from 'react';
import { Sidebar } from "./Sidebar";
import { Binder } from "./Binder";
import { Editor } from "./Editor";
import { EditorContext } from "../../context/EditorContext";

export const Content = () => {
  const [activeSection, setActiveSection] = useState("fXbBpClxz0yVvRZ9WvaD")

  const contextValue = {
    activeSection, setActiveSection
  }
  return (
    <main>
      <Sidebar />
      <EditorContext.Provider value={contextValue}>
        <Binder />
        <Editor />
      </EditorContext.Provider>
    </main>
  );
}
