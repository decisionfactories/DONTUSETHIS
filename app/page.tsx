// src/page.tsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import '@tldraw/tldraw/tldraw.css';
import { MakeRealButton } from './components/MakeRealButton';
import { TldrawLogo } from './components/TldrawLogo';
import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput';
import { PreviewShapeUtil } from './PreviewShape/PreviewShape';
import { makeReal } from './makeReal';
import './globals.css'; // Ensure to include the CSS styles

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
  ssr: false,
});

const shapeUtils = [PreviewShapeUtil];

const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const editor = useEditor();

  const handleMakeRealClick = () => {
    setShowDetails(true);
    makeReal(editor, ''); // Add API key if needed
  };

  return (
    <div className="main-container">
      {!showDetails ? (
        <MakeRealButton onClick={handleMakeRealClick} />
      ) : (
        <div className="main-layout">
          <Tldraw editor={editor}>
            <div className="canvas">
              {/* Tldraw canvas is here */}
            </div>
          </Tldraw>
          <div className="use-case-section">
            <div className="use-case-description">Use Case Description</div>
            <div className="flowchart">Diagram/Flowchart</div>
            <div className="test-cases">Test Cases</div>
            <div className="code">Code</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
