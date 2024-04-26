import React, { useState } from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function CodeEditor() {
  const [output, setOutput] = useState("");

  const onChange = (newValue) => {
    try {
      const result = eval(newValue);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={onChange}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        fontSize={16}
        width="80%"
        height="500px"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
      <div>Output: {output}</div>
    </div>
  );
}

export default CodeEditor;
