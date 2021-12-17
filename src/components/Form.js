import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     /* formData is an object, so we need to copy all the key/value pairs */
  //     ...formData,
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     /* we want to overwrite the lastName key with a new value */
  //     lastName: event.target.value,
  //   });
  // }

  function handleChange(event) {
    /* name is the KEY in of the formData object we're trying to update */
    const name = event.target.name;
    let value = event.target.value;
    
    /* converts `checked` property of checkboxes into value */
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value, /* Reminder: Bracket notation is used to access KEYs from within */
    });
  }

  return (
    <form>
      <input
        type="text"
        name="firstName" /* If we give our inputs name attributes, we can access them as event.target.name */
        onChange={handleChange}
        value={formData.firstName}
      />
      <input type="text"
        name="lastName" /* As long as the name attributes of our <input> fields match the keys in our state, we can write a generic handleChange function */
        onChange={handleChange}
        value={formData.lastName}
      />
      <input type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
