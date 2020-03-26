import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
// console.log(JSON.string)
export const createSection = ({projectId, userId, title}) => {
  const templateSection = {
    contents: [{type: 'paragraph', children: [{ text: '' }]}],
    projectId: projectId, userId, title,
    title: "Untitled Document",
    synopsis: "",
    userId: "fefe2085-8a31-495f-b214-5535bc1de13a",
    isActive: false
  }
}
export const useSection = sectionId => {
  const [section, setSection] = useState({contents: null});

  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('sections')
      .doc(sectionId)
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
  }, [sectionId, section]);

  return { section, setSection };
};

export const saveSection = section => {
    firebase.firestore()
      .collection('sections')
      .doc(section.docId)
      .update(section);
}
