import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
// console.log(JSON.string)
export const useSection = activeSection => {
  const [section, setSection] = useState({contents: [
    {
      type: 'paragraph',
      children: [{ text: 'Loading content...' }],
    },
  ]});
  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('sections')
      .doc(activeSection)
      .onSnapshot(doc => {
        const newSection = {
          ...doc.data(),
          docId: doc.id,
        }
        if (JSON.stringify(newSection) !== JSON.stringify(section)) {
          setSection(newSection)
        }
      });
    return () => unsubscribe()
  }, [activeSection, section]);

  return { section, setSection };
};

export const saveSection = section => {
    firebase.firestore()
      .collection('sections')
      .doc(section.docId)
      .update(section);
}
