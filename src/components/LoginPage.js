import React, { useState } from "react";

function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedUser = user.trim();

    if (!trimmedUser || !password) {
      setMessage({ text: "Please enter username and password.", type: "error" });
      return;
    }

    if (password.length < 6) {
      setMessage({ text: "Password must be at least 6 characters.", type: "error" });
      return;
    }

    setMessage({ text: `Welcome, ${trimmedUser}. Login successful (demo mode).`, type: "success" });
  };

  return (
    <div className="login-page">
      <div className="login-overlay" />
      <div className="login-form" role="region" aria-label="Login form">
        <h1>Login</h1>
        <p className="login-subtitle">Sign in to continue with your bookings.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="login-user">Username</label>
          <input
            id="login-user"
            type="text"
            name="user"
            placeholder="Enter username"
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
              if (message.text) {
                setMessage({ text: "", type: "" });
              }
            }}
            autoComplete="username"
          />

          <label htmlFor="login-password">Password</label>
          <div className="password-field">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                if (message.text) {
                  setMessage({ text: "", type: "" });
                }
              }}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button type="submit">Login</button>
        </form>

        {message.text ? (
          <p className={`login-message ${message.type === "error" ? "login-error" : "login-success"}`}>
            {message.text}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default LoginPage;
