import React, { useState } from 'react';
import { Sidebar } from "./Sidebar";
import { Binder } from "../Binder/Binder";
import { TextEditor } from "../TextEditor/TextEditor";
import { Inspector } from "../TextEditor/Inspector";

export const Content = () => {

  return (
    <main>
      <Sidebar />
      <Binder />
      <TextEditor />
      <Inspector />
    </main>
  );
}
