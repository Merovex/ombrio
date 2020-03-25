import React from 'react';
import { firebase } from '../firebase';

export const getSection = sectionId => {
  const [section, setSection] = React.useState();
  console.log("@getSection start", sectionId)
  firebase.firestore()
    .collection('sections')
    .doc(sectionId)
    .onSnapshot(doc => {
      const newSection = {
        ...doc.data(),
        docId: doc.id,
      }
      console.log("New Section", newSection);
      if (JSON.stringify(newSection) !== JSON.stringify(section)) {
        console.log("Changing")
        setSection(newSection)
      }
    });
  console.log("@getSection End", section)
  return {section, setSection}
};

export const saveSection = (docId, section) => {
  firebase.firestore()
    .doc(docId)
    .set(section);
}
