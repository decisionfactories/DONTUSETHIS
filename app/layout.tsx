"use client";
import React, { useState } from 'react';
import { Tldraw, useEditor } from '@tldraw/tldraw';
import { MakeRealButton } from './MakeRealButton'; // Ensure this path is correct
import { makeReal } from './makeReal'; // Ensure this path is correct
import './globals.css'; // Ensure to include the CSS styles

const Layout = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const editor = useEditor();

  const handleMakeRealClick = () => {
    setShowDetails(true);
    makeReal(editor, ''); // Add API key if needed
  };

  return (
    <html lang="en">
      <head>
        <title>My Application</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
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
      </body>
    </html>
  );
};

export default Layout;
