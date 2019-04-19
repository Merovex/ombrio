import React, { Component } from 'react';

class Editor extends Component {
  render() {
    return (
      <article className="Editor">
        <input placeholder="Section Title" />
        <textarea placeholder="Content" />
      </article>
    );
  }
}

export default Editor;
