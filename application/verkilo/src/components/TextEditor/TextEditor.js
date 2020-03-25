import React, { useContext, useMemo, useState, useCallback } from 'react';
import { useSection, saveSection } from '../../hooks';
import { EditorContext } from "../../context/EditorContext";


import isHotkey from 'is-hotkey';
import { createEditor, Transforms, Editor } from 'slate';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { withHistory } from 'slate-history';

import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import FormatBold from '@material-ui/icons/FormatBold';
import FormatItalic from '@material-ui/icons/FormatItalic';
import FormatQuote from '@material-ui/icons/FormatQuote';
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import FormatListNumbered from '@material-ui/icons/FormatListNumbered';
import Code from '@material-ui/icons/Code';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

export const TextEditor = () => {
  const { activeSection } = useContext(EditorContext);
  const { section, setSection } = useSection(activeSection);

  const handleTextChange = (contents) => {
    saveChanges({...section, contents: contents})
  }
  const saveChanges = section => {
    setSection(section);
    if (section.docId) {
      saveSection(section);
    }
  }

  const title    = (section) ? section.title : "No Title";
  const contents = (section) ? section.contents : [
    {
      type: 'paragraph',
      children: [{ text: 'This is a new section.' }],
    },
  ];
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const slateEditor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <article className='editor'>
      <section className='page'>
        <Slate
          editor={slateEditor}
          value={contents}
          onChange={contents => handleTextChange(contents)}
          placeholder="Loading text..."
          >
          <Toolbar>
            <MarkButton format="bold"><FormatBold /></MarkButton>
            <MarkButton format="italic"><FormatItalic /></MarkButton>
            <MarkButton format="code"><Code /></MarkButton>
            <BlockButton format="heading-one"><LooksOneIcon /></BlockButton>
            <BlockButton format="heading-two"><LooksTwoIcon /></BlockButton>
            <BlockButton format="block-quote"><FormatQuote /></BlockButton>
            <BlockButton format="numbered-list"><FormatListNumbered /></BlockButton>
            <BlockButton format="bulleted-list"><FormatListBulleted /></BlockButton>
          </Toolbar>
          <h2 className='section-title'>{title}</h2>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text…"
            autoFocus
            spellCheck
            onKeyDown={event => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault()
                  const mark = HOTKEYS[hotkey]
                  toggleMark(slateEditor, mark)
                }
              }
            }}
          />
        </Slate>
      </section>
    </article>
  )
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  return <span {...attributes}>{children}</span>
}
export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <aside
    {...props}
    ref={ref}
    className="toolbar"
  />
));
export const Button = React.forwardRef(
  ({ className, active, reversed, ...props }, ref) => (
    <span
      {...props}
      ref={ref}
      className={className}
    >
    {props.children}
  </span>
  )
)
const BlockButton = ({format, children}) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {children}
    </Button>
  )
}
const MarkButton = ({format, children}) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {children}
    </Button>
  )
}
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {

  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })
  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}
const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
]
