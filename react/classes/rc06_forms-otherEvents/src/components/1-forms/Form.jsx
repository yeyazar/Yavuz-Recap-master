import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    console.log(e);
    setUsername("" + e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
    Username: ${username}
    E-mail: ${email}
    password: ${password}
    `);

    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="display-6 text-primary">FORMS</h2>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username: <span className="text-success">{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleUsername}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder={"Enter your password..."}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
