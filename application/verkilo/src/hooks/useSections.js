import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useSections = selectedProject => {
  const [sections, setSections] = useState([]);
  console.log("@useSections", selectedProject)
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('sections')
      // .where('userId','==', 'fefe2085-8a31-495f-b214-5535bc1de13a')
      .where('projectId','==',selectedProject)

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
