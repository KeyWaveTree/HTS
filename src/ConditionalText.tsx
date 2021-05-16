import React, { useState, ChangeEvent } from 'react';

const ConditionalText = () => {
  const [text, setText] = useState('');

  const PrivateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <>
      <article>{text.length > 5 && text}</article>
      <input type="text" onChange={PrivateText} />
    </>
  );
};

export default ConditionalText;
