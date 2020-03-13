import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState();
  useState(() => {
    firebase
      .firestore()
      .collection('sections')
      .where('userId','==', 'BTL17qGXAw1H8F02xeXO')
      .where('isActive', '==', true)
      .get()
      .then(snapshot =>{
        const aSection = snapshot.docs.map(
          section => ({
            ...section.data(),
            docId: section.id
          })
        )
        if(JSON.stringify(aSection) !== JSON.stringify(activeSection)) {
          setActiveSection(aSection)
        }
      })
  }, [activeSection]);
  
  console.log("HERE " + activeSection)
  return { activeSection, setActiveSection };
};
