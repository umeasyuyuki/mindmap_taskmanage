import React from 'react';

interface Props {
  title: string;
}

const NodeCard: React.FC<Props> = ({ title }) => {
  return (
    <div className="rounded-xl bg-white/10 border border-white/20 p-2">
      {title}
    </div>
  );
};

export default NodeCard;
