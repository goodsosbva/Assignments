import React from 'react';
import { useState } from "react";

function Login() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setError("이메일과 비밀번호를 모두 입력하세요.");
      return;
    }

    console.log(email);
    console.log(password);
  };

  

  return (
    <div>
      <div>Log into Sal</div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          onInput={onChangeHandler}
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          required
        />
        <input
          onInput={onChangeHandler}
          name="password"
          value={password}
          placeholder="Password"
          type="password"
          required
        />
        <input type="submit" value={isLoading ? "Loading..." : "Log in"} />
      </form>
      {error !== "" ? <div>{error}</div> : null}
    </div>
  );
};

export default Login;
