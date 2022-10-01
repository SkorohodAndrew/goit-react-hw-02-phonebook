import React from 'react';
import PropTypes from 'prop-types';

export function FilterContacts({ onChange, filter }) {
  return (
    <>
      <label htmlFor="">Find Contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
}

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
