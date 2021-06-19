import { useState } from 'react';
import Editor from './Editor'
function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  return (
    <>
      <div className="flex justify-between px-10 py-3 bg-gray-900">
        <Editor
          language="xml"
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='JS'
          value={js}
          onChange={setJs}
        />


      </div>
      <div className = 'bg-yellow-100 h-52'>
        <h1> hollo </h1>
      </div>
    </>
  );
}

export default App;
