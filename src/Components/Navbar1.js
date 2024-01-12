import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [text, setText] = useState('Welcome');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        // Rotate the text between 'Welcome', 'to', 'my', 'website'
        switch (prevText) {
          case 'Welcome':
            return 'to';
          case 'to':
            return 'my';
          case 'my':
            return 'website';
          case 'website':
            return 'Welcome';
          default:
            return 'Welcome';
        }
      });
    }, 1000); // Change text every second

    return () => {
      clearInterval(intervalId); // Clear interval on component unmount
    };
  }, []);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default Welcome;
