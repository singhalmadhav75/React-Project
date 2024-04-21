import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const props = useSpring({ width: `${count}%` });

  return (
    <div>
      <h1>Counter</h1>
      <animated.div
        style={{
          height: '20px',
          backgroundColor: 'blue',
          width: props.width,
        }}
      />
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
