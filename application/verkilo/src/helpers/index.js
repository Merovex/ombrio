import {collatedSections} from "../constants";
export const getCollatedSections = selectedProject => 
  collatedSectionsExist.find(section => section.key === selectedProject)