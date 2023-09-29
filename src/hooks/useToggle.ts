// packages below
import { useState } from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (bool?: boolean) => {
    setToggle(prev => (bool ? bool : !prev));
  };

  return { toggle, handleToggle };
};

export default useToggle;
