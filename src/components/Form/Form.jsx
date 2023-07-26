import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FormStyled } from './FormStyled';
// import { useState } from 'react';

function Form({ formAddContact }) {
  const {nameContact, number} = useSelector(state => state.form);
  // const number = useSelector(state => state.form.number);
  // const [nameContact, setNameContact] = useState('');
  // const [number, setNumber] = useState('');
  const dispatch = useDispatch()

  const handleOnChange = evt => {
    const { name, value } = evt.currentTarget;
    if (name === 'name') {
      // setNameContact(value);
      dispatch({ type: "form/setNameContact", payload: value });
    }
    if (name === 'number') {
      // setNumber(value);
      dispatch({ type: "form/setNumber", payload: value });
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    formAddContact({ name: nameContact, number });
    reset();
  };
  const reset = () => {
    // setNameContact('');
    // setNumber('');
    dispatch({ type: "form/setNameContact", payload: '' });
    dispatch({ type: "form/setNumber", payload: '' });

  };

  return (
    <> 
      <FormStyled onSubmit={handleOnSubmit}>
        <label>
          <span>Name</span>
          <input
            value={nameContact}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleOnChange}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleOnChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </FormStyled>
    </>
  );
}

Form.propTypes = {
  formAddContact: PropTypes.func.isRequired,
  contactsArr: PropTypes.array,
};

export default Form;
