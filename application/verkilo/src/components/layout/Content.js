import React from 'react';
import { Sidebar } from "./Sidebar";
import { Binder } from "./Binder";
import { Editor } from "./Editor";
import { Footer } from "./Footer";

export const Content = () => (
  <section>
    <Sidebar />
    <Binder />
    <Editor />
    <Footer />
  </section>
);