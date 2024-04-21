import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleKeyCommand = (
    command: string,
    editorState: EditorState
  ): 'handled' | 'not-handled' => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  const _onBoldClick = (): void => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const _onItalicClick = (): void => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };

  const _onUnderlineClick = (): void => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  return (
    <div>
      <h1>Rich Text Editor</h1>
      <button onClick={_onBoldClick}>Bold</button>
      <button onClick={_onItalicClick}>Italic</button>
      <button onClick={_onUnderlineClick}>Underline</button>
      <div
        style={{
          border: '1px solid #ccc',
          minHeight: '6em',
          cursor: 'text',
          padding: '5px',
        }}
      >
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
