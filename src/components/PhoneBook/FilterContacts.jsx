import React from 'react';

export function FilterContacts({ onChange, filter }) {
  return (
    <>
      <label htmlFor="">Find Contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
}
