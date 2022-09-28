import React from 'react';

export function ContactsList({ items, removeContacts }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <li key={id}>
        {name} : {number}
        <span onClick={() => removeContacts(id)}>X</span>
      </li>
    );
  });
  return <ul>{elements}</ul>;
}
