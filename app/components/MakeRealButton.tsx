'use client';

import React from 'react';

export const MakeRealButton = ({ onClick }) => {
  const handleClick = async () => {
    try {
      await onClick();
    } catch (e) {
      console.error(e);
      // Remove or replace the following block if addToast is not available
      // addToast({
      //   icon: 'cross-2',
      //   title: 'Something went wrong',
      //   description: (e as Error).message.slice(0, 100),
      // });
    }
  };

  return (
    <button onClick={handleClick} className="makeRealButton">Make Real</button>
  );
};
