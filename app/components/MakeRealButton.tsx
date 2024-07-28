'use client';

import React from 'react';

export const MakeRealButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '1em', fontSize: '1.2em', color: 'white', backgroundColor: 'blue', border: 'none', cursor: 'pointer' }}>
      Make Real
    </button>
  );
};
