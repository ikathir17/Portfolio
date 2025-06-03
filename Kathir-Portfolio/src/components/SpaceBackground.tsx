import React, { useEffect, useState } from 'react';

const SpaceBackground = () => {
  const [currentBg, setCurrentBg] = useState(1);
  const backgrounds = ['/Background/bg1.jpg', '/Background/bg2.jpg', '/Background/bg3.jpg', '/Background/bg4.jpg', '/Background/bg5.jpg', '/Background/bg6.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev % backgrounds.length) + 1);
    }, 10000); // Change background every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentBg === index + 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            imageRendering: 'crisp-edges',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default SpaceBackground; 