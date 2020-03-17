import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useSection = activeSection => {
  const [section, setSection] = useState({text: ""});

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
          // console.log("Changing")
          setSection(newSection)
        }
      });
    return () => unsubscribe()
  }, [activeSection, section]);

  return { section, setSection };
};

// export const saveSection = (docId, section) => {
//   firebase.firestore()
//     .doc(docId)
//     .set(section);
// }
