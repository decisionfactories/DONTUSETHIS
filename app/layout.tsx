// src/layout.tsx
"use client";
import React from 'react';
import './globals.css';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Use Case Generator</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default Layout;
