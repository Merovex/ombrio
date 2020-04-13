import React, { useContext } from 'react';
import { EditorContext } from "../../context/EditorContext";

export const Footer = () => {
  const { isSaved } = useContext(EditorContext);
  console.log("S",isSaved)
  return (<footer className='footer'>
    <div>
      <span>West Side</span>
    </div>
    <div>
      <span>{(isSaved) ? "Draft saved" : ""}</span>
    </div>
    <div>
      Right Saieda
    </div>
  </footer>);
}
