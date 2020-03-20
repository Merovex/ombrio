import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
// console.log(JSON.string)
export const createSection = ({projectId, userId, title}) => {
  const templateSection = {
    contents: [{type: 'paragraph', children: [{ text: '' }]}],
    projectId: projectId, userId, title,
    title: "Untitled Document",
    synopsis: "",
    userId: "BTL17qGXAw1H8F02xeXO",
    isActive: false
  }
}
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
