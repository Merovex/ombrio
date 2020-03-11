import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useSections = selectedProject => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('sections')
      .where('userId','==', 'BTL17qGXAw1H8F02xeXO')
      // .where('projectId','==',selectedProject)
    
    unsubscribe = unsubscribe.where('projectId','==',selectedProject)
    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const allSections = snapshot.docs.map(section => ({
        id: section.id,
        ...section.data(),
      }));

      if (JSON.stringify(allSections) !== JSON.stringify(sections)) {
        setSections(allSections);
      }
    });

    return () => unsubscribe();

  }, [selectedProject]);

  return { sections, setSections };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', 'BTL17qGXAw1H8F02xeXO')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id, // Needed for delete, but I want to archive.
        }));

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};