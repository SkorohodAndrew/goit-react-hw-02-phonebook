import React from 'react';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContacts: PropTypes.func.isRequired,
};
