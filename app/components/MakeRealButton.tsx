'use client';

import React from 'react';

export const MakeRealButton = ({ onClick }) => {
  const handleClick = async () => {
    try {
      await onClick();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button onClick={handleClick} className="makeRealButton">
      Make Real
    </button>
  );
};
