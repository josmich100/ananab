import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>
      <span>Type your username</span>
      <input type="text" name="username" required />
    </label>
    <label>
      <span>Type your password</span>
      <input type="password" name="password" required />
    </label>

    <button type="submit">Login</button>

    {errorMessage && <p classNameName="error">{errorMessage}</p>}

    <style jsx>{`
      form,
      label {
        display: flex;
        flex-flow: column;
      }
      label > span {
        font-weight: 600;
      }
      input {
        padding: 8px;
        margin: 0.3rem 0 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      .error {
        color: brown;
        margin: 1rem 0 0;
      }
    `}</style>
  </form>
);

export default LoginForm;

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
