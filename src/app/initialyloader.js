'use client';
import { useEffect, useState } from 'react';

export default function Initialyloader({ onFinish }) {
  const fullText = 'Digi Lab Pro';
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);

   // Set page title during loader
  useEffect(() => {
    document.title = fullText;
  }, []);

  // Typing animation
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); //text time
      return () => clearTimeout(timeout);
    } else {
      // After typing is done, start zoom after 1s
      const holdTimeout = setTimeout(() => {
        setIsZooming(true);
      }, 1000);
      return () => clearTimeout(holdTimeout);
    }
  }, [index]);

  // Prevent scroll during zoom
  useEffect(() => {
    if (isZooming) {
      document.body.style.overflow = 'hidden';
      const zoomTimeout = setTimeout(() => {
        document.body.style.overflow = ''; // Restore scroll
        onFinish(); // Reveal the app
      }, 1000); // Zoom duration

      return () => clearTimeout(zoomTimeout);
    }
  }, [isZooming]);

  return (
    <div className={`typing_app_name ${isZooming ? 'zoom-in' : ''}`}>
      <div className="text">{text}</div>
    </div>
  );
}
