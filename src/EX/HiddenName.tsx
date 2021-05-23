import React, { useState, ChangeEvent } from 'react';

const HiddenName = () => {
  const [name, SetName] = useState('');

  const ChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    let nameText = event.currentTarget.value;
    if (nameText.length > 2) {
      const startName = nameText.substr(0, 1);
      const endName = nameText.substr(nameText.length - 1);
      const hiddenPart = '*'.repeat(nameText.length - 2);
      nameText = startName + hiddenPart + endName;
    }
    SetName(nameText);
  };

  return (
    <>
      <article>{name}</article>
      <input type="text" onChange={ChangeName} />
    </>
  );
};

export default HiddenName;
