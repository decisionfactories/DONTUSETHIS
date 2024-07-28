'use client';

import React from 'react';

export const MakeRealButton = ({ onClick }) => {
  const handleClick = async () => {
    try {
      await onClick();
    } catch (e) {
      console.error(e);
      // The addToast function was removed since it's not defined or needed
    }
  };

  return (
    <button onClick={handleClick} className="makeRealButton">Make Real</button>
  );
};
