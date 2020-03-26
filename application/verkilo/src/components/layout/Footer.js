import React, { useContext } from 'react';
import { EditorContext } from "../../context/EditorContext";

export const Footer = () => {
  const { saved } = useContext(EditorContext);
  console.log("S",saved)
  return (<footer className='footer'>
    <div>
      <span>West Side</span>
    </div>
    <div>
      <span>{saved}</span>
    </div>
    <div>
      Right Saieda
    </div>
  </footer>);
}
