import React, { useState } from "react";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user || !password) {
      setMessage("Please enter username and password.");
      return;
    }

    setMessage("Login successful (demo mode).");
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1>lOGIN </h1>
        <form onSubmit={handleSubmit}>
          <p>USER NAME</p>
          <input
            type="text"
            name="user"
            placeholder="username"
            value={user}
            onChange={(event) => setUser(event.target.value)}
          />
          <p>password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {message ? <p className="login-message">{message}</p> : null}
      </div>
    </div>
  );
}

export default LoginPage;
