'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '@tldraw/tldraw/tldraw.css';
import { MakeRealButton } from './components/MakeRealButton';
import { TldrawLogo } from './components/TldrawLogo';
import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput';
import { PreviewShapeUtil } from './PreviewShape/PreviewShape';
import { AssetUrlsProvider, useTldrawApp } from '@tldraw/tldraw';
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
    <AssetUrlsProvider
      assetUrls={{
        shapes: '/assets/shapes', // Adjust the path to your shapes assets
        icons: '/assets/icons', // Adjust the path to your icons assets
        textures: '/assets/textures', // Adjust the path to your textures assets
      }}
    >
      <div className="main-container">
        <div className="tldraw-container">
          <Tldraw persistenceKey="make-real" shapeUtils={shapeUtils}>
            <InitialShape />
            <div className="canvas">
              {/* Tldraw canvas is here */}
            </div>
            <TldrawLogo />
          </Tldraw>
        </div>
        <div className="controls">
          <RiskyButCoolAPIKeyInput />
          <MakeRealButton onClick={handleMakeRealClick} />
        </div>
        {showDetails && (
          <div className="main-layout">
            <div className="tldraw-container">
              <Tldraw persistenceKey="make-real" shapeUtils={shapeUtils}>
                <div className="canvas">
                  {/* Tldraw canvas is here */}
                </div>
              </Tldraw>
            </div>
            <div className="use-case-section">
              <div contentEditable className="use-case-description">Use Case Description</div>
              <div contentEditable className="flowchart">Diagram/Flowchart</div>
              <div contentEditable className="test-cases">Test Cases</div>
              <div contentEditable className="code">Code</div>
            </div>
          </div>
        )}
      </div>
    </AssetUrlsProvider>
  );
};

const InitialShape = () => {
  const app = useTldrawApp();

  useEffect(() => {
    const descriptionShape = {
      id: 'description',
      type: 'geo', // Geometric shape type
      x: 100,
      y: 100,
      props: {
        geo: 'rectangle', // Rectangle shape
        text: 'Description',
        fill: 'none', // No fill
        stroke: 'black', // Black border
        strokeWidth: 2,
        fontSize: 16,
        w: 200, // Width of the shape
        h: 100, // Height of the shape
      },
    };

    app.createShapes([descriptionShape]);
  }, [app]);

  return null;
};

export default App;
