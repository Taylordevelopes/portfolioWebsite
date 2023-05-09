import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const code = `const name = 'John Doe';
const occupation = 'Web Developer';

console.log('Name: ' + name);
console.log('Occupation: ' + occupation);`;

const HomePage = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        setText(code.substring(0, newIndex));
        return newIndex;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    gsap.to(cursor, { opacity: 0, repeat: -1, duration: 0.5 });
  }, []);

  return (
    <div className="banner">
      <pre className="code-block ">
        {text.split('').map((char, index) => {
          let charStyle = {};
          if (index < 13) {
            charStyle = { color: '#D4D4D4' }; // gray
          } else if (index < 26) {
            charStyle = { color: '#9CDCFE' }; // blue
          } else if (index < 28) {
            charStyle = { color: '#CE9178' }; // orange
          } else if (index < 41) {
            charStyle = { color: '#D4D4D4' }; // gray
          } else if (index < 54) {
            charStyle = { color: '#9CDCFE' }; // blue
          } else if (index < 59) {
            charStyle = { color: '#CE9178' }; // orange
          } else if (index < 67) {
            charStyle = { color: '#D4D4D4' }; // gray
          } else if (index < 79) {
            charStyle = { color: '#9CDCFE' }; // blue
          } else if (index < 82) {
            charStyle = { color: '#CE9178' }; // orange
          } else if (index < 97) {
            charStyle = { color: '#D4D4D4' }; // gray
          } else if (index < 100) {
            charStyle = { color: '#9CDCFE' }; // blue
          }
          return <span key={index} style={charStyle}>{char}</span>;
        })}
        <span className="cursor">|</span>
      </pre>
    </div>
  );
};

export default HomePage;
