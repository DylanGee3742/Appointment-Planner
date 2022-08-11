import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
    Contact Form
    <br>
    </br>
    <br>
    </br>
    Name
    <input type='text'
    value={name}
    onChange={(e) => setName(e.target.value)} required>

    </input>

    Telephone
    <input type='tel'
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    pattern="^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$">
    </input>

    Email
    <input type='email'
    value={email}
    onChange={(e) => setEmail(e.target.value)}>
    </input>

    <button type='submit'>Submit</button>
    </form>
  );
};
