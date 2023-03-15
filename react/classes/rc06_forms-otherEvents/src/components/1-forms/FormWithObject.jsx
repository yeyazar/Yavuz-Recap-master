import { useState } from "react";

const FormWithObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  //! Destr.
  const { username, email, password, address } = formData;

  const handleFromData = (e) => {
    /*  console.log(e.target.value);
    console.log(e.target.id); */
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
    Username: ${username}
    E-mail: ${email}
    password: ${password}
    Address: ${address}
    `);

    setFormData({ username: "", email: "", password: "", address: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-primary">FORMS with OBJECT</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-success">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleFromData}
          value={username}
          placeholder={"Enter your username..."}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email: <span className="text-info">{email}</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleFromData}
          value={email}
          placeholder={"Enter your email..."}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleFromData}
          value={password}
          placeholder={"Enter your password..."}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          onChange={handleFromData}
          value={address}
          placeholder={"Enter your address... (optional)"}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormWithObject;
