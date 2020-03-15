import React, {useState, useEffect} from 'react';
import { firebase } from '../firebase';

export const useSection = sectionId => {
  const [section, setSection] = useState();
  console.log("HERE!", section)
  useEffect(() => {
    console.log("In Use:",sectionId)
    const unsubscribe = firebase.firestore()
      .collection('sections')
      .doc(sectionId)
      .onSnapshot(doc => {
        const newSection = {
          ...doc.data(),
          docId: doc.id,
        }
        if (JSON.stringify(newSection) !== JSON.stringify(section)) {
          console.log("Changing")
          setSection(newSection)
        }
      });
      return () => unsubscribe();
  },[section])
  return { section, setSection };
};

export const saveSection = (docId, section) => {
  firebase.firestore()
    .doc(docId)
    .set(section);
}
