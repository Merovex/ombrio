import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useProject = activeProjectId => {
  const [project, setProject] = useState({});
  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('projects')
      .doc(activeProjectId)
      .onSnapshot(doc => {
        const newProject = {
          ...doc.data(),
          docId: doc.id,
        }
        if (JSON.stringify(newProject) !== JSON.stringify(project)) {
          setProject(newProject)
        }
      });
    return () => unsubscribe()
  }, [activeProjectId, project]);

  return { project, setProject };
};

export const saveProject = project => {
    firebase.firestore()
      .collection('projects')
      .doc(project.docId)
      .update(project);
}
