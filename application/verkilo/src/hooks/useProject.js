import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
// console.log(JSON.string)
// export const createSection = ({projectId, userId, title}) => {
//   const templateSection = {
//     contents: [{type: 'paragraph', children: [{ text: '' }]}],
//     projectId: projectId, userId, title,
//     title: "Untitled Document",
//     synopsis: "",
//     userId: "BTL17qGXAw1H8F02xeXO",
//     isActive: false
//   }
// }
export const useProject = activeProjectId => {
  const [project, setProject] = useState({});
  useEffect(() => {
    const unsubscribe = firebase.firestore()
      .collection('projects')
      .doc(activeProjectId)
      .onSnapshot(doc => {
        const newProject = {
          ...doc.data(),
          docId: doc.id,
        }
        console.log("useProject", newProject, project)
        if (JSON.stringify(newProject) !== JSON.stringify(project)) {
          setProject(newProject)
        }
      });
    return () => unsubscribe()
  }, [activeProjectId, project]);

  return { project, setProject };
};

export const saveProject = project => {
    firebase.firestore()
      .collection('projects')
      .doc(project.docId)
      .update(project);
}
