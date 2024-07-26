"use client";

import './globals.css';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Application</title>
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
