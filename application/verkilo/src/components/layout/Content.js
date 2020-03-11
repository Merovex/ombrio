import React from 'react';
import { Sidebar } from "./Sidebar";
import { Binder } from "./Binder";
import { Editor } from "./Editor";

export const Content = () => (
  <main>
    <Sidebar />
    <Binder />
    <Editor />
  </main>
);