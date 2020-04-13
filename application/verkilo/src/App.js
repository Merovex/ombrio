import React, { useState } from 'react';
import { Header } from './components/layout/Header'
import { Content } from './components/layout/Content'
import { Footer } from './components/layout/Footer'
import { useSection, useProject } from "./hooks";
import { EditorContext } from "./context/EditorContext";

export const App = () => {
  const [sectionId, setSectionId] = useState("14e1b966-4bf5-49bb-aa1b-93c4fe9eb4ed")
  const [projectId, setProjectId] = useState("b8cea452-940a-44ef-8a23-07e4619c7f41")
  const [isSaved, setSaved] = useState(true)
  const { section, setSection } = useSection(sectionId)
  const { project, setProject } = useProject(projectId)

  const contextValue = {
    sectionId, setSectionId,
    projectId, setProjectId,
    section, setSection,
    project, setProject,
    isSaved, setSaved
  }
  return (
    <EditorContext.Provider value={contextValue}>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </EditorContext.Provider>
  )
};
