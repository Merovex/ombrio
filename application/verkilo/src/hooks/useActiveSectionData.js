import React from 'react';
import { firebase } from '../firebase';

export const getSection = sectionId => {
  const [section, setSection] = React.useState();
  console.log("HERE", sectionId)
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
  console.log("THERE", section)
  return {section, setSection}
  // console.log("HERE!", section)
  // React.useEffect(() => {
  //   console.log("In Use:",sectionId)
  //   const unsubscribe = firebase.firestore()
  //     .collection('sections')
  //     .doc(sectionId)
  //     .onSnapshot(doc => {
  //       const newSection = {
  //         ...doc.data(),
  //         docId: doc.id,
  //       }
  //       if (JSON.stringify(newSection) !== JSON.stringify(section)) {
  //         console.log("Changing")
  //         setSection(newSection)
  //       }
  //     });
  //     return () => unsubscribe();
  // },[section])
  // return { section, setSection };
};

export const saveSection = (docId, section) => {
  firebase.firestore()
    .doc(docId)
    .set(section);
}
