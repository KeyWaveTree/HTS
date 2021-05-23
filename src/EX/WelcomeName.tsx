import React, { useState, ChangeEvent } from 'react';

const WelcomeName = () => {
  const [name, setName] = useState('');

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <article>안녕하세요 {name}님</article>
      <input type="text" onChange={updateName} />
    </>
  );
};

export default WelcomeName;
