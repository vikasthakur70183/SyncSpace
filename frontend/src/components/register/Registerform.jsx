import React from "react";

function Registerform() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // API call to register the user
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Create Account</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Registerform;
