import React, { useState } from 'react';
import { Sidebar } from "./Sidebar";
import { Binder } from "../Binder/Binder";
import { useSection, useProject } from "../../hooks";
import { TextEditor } from "../TextEditor/TextEditor";
import { EditorContext } from "../../context/EditorContext";

export const Content = () => {
  const [sectionId, setSectionId] = useState("14e1b966-4bf5-49bb-aa1b-93c4fe9eb4ed")
  const [projectId, setProjectId] = useState("b8cea452-940a-44ef-8a23-07e4619c7f41")
  const { section, setSection } = useSection(sectionId)
  const { project, setProject } = useProject(projectId)

  const contextValue = {
    sectionId, setSectionId,
    projectId, setProjectId,
    section, setSection,
    project, setProject
  }
  return (
    <main>
      <Sidebar />
      <EditorContext.Provider value={contextValue}>
        <Binder />
        <TextEditor />
      </EditorContext.Provider>
    </main>
  );
}
