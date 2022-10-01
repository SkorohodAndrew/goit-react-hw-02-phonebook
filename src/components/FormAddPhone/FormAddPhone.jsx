import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class FormAddPhone extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { nameId, numberId, handleSubmit, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={nameId}>Name</label>
          <input
            id={nameId}
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <input
            id={numberId}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={handleChange}
            required
          />
        </div>

        <button>Add contact</button>
      </form>
    );
  }
}

FormAddPhone.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
