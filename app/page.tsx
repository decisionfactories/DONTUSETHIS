'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import '@tldraw/tldraw/tldraw.css';
import { MakeRealButton } from './components/MakeRealButton';
import { TldrawLogo } from './components/TldrawLogo';
import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput';
import { PreviewShapeUtil } from './PreviewShape/PreviewShape';
import './globals.css'; // Ensure to include the CSS styles

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
  ssr: false,
});

const shapeUtils = [PreviewShapeUtil];

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMakeRealClick = () => {
    setShowDetails(true);
  };

  return (
    <div className="main-container">
      <Tldraw persistenceKey="make-real" shapeUtils={shapeUtils}>
        <div className="canvas">
          {/* Tldraw canvas is here */}
        </div>
        <TldrawLogo />
        <RiskyButCoolAPIKeyInput />
      </Tldraw>
      {!showDetails && (
        <MakeRealButton onClick={handleMakeRealClick} />
      )}
      {showDetails && (
        <div className="use-case-section">
          <div className="use-case-description">Use Case Description</div>
          <div className="flowchart">Diagram/Flowchart</div>
          <div className="test-cases">Test Cases</div>
          <div className="code">Code</div>
        </div>
      )}
    </div>
  );
};

export default App;
