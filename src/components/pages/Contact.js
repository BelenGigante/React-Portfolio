import React, { useState } from 'react';


import { validateEmail } from '../utils/helpers';

function Form() {
  const [contactName, setcontactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setmessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleInputChange = (e) => {
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

     if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setcontactName(inputValue);
    } else {
      setmessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
     e.preventDefault();

     if (!validateEmail(email)) {
      setErrorMessage('check your e-mail or fill out boxes');
     return;
       }

    setcontactName('');
    setmessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div className='textContainer'>
      <h2>Contact Me</h2>
      <form className="form">
      <div className='contactDiv'>
      <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="What's your name?"
        />
        </div>
        <div className='contactDiv'>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your e-mail"
        />
        </div>
        <div className='contactDiv'>
        <input
          className='inputMessage'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Leave me a message"
        />
        </div>
        <button className='contactBtn' type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
