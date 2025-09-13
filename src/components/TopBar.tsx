import React from 'react';

const TopBar: React.FC = () => {
  return (
    <header className="h-12 flex items-center justify-between px-4 bg-black/30">
      <span className="font-bold">NeonMind Tasks</span>
    </header>
  );
};

export default TopBar;
