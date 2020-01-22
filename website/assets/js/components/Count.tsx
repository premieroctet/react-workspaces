import React, { memo } from 'react';

type CountProps = {
  count: number;
  increment: () => void;
  incrementAsync: () => void;
};

const Count = ({ count, increment, incrementAsync }: CountProps) => {
  return (
    <div>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={incrementAsync}>incrementAsync</button>
      <br />
    </div>
  );
};

export default memo(Count);
