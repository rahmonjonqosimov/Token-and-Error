import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { toast } from "react-toastify";
const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleChange, setUser, user } = useGetInputValue(initialState);
  const handleRegisterUser = (e) => {
    setLoading(true);
    e.preventDefault();
    user.phones = [user.phones];
    console.log(user);
    axios
      .post("/auth/user/sign-up", user)
      .then((res) => {
        localStorage.setItem("x-auth-token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        toast.success(res.data.message);
        setUser(initialState);
      })
      .finally(() => setLoading(false));
  };
  return (
    <form onSubmit={handleRegisterUser}>
      <h2>Register</h2>
      <input
        required
        type="text"
        placeholder="UserName"
        name="UserName"
        value={user.UserName}
        onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        placeholder="FirstName"
        name="FirstName"
        value={user.FirstName}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        placeholder="LastName"
        name="LastName"
        value={user.LastName}
        onChange={handleChange}
      />
      <input
        type="tel"
        placeholder="phones"
        name="phones"
        value={user.phones}
        onChange={handleChange}
      />
      <button disabled={loading}>{loading ? "Loading..." : "Register"}</button>
      <div className="login__line"></div>
      <button onClick={() => navigate("/login")} type="button">
        Log In
      </button>
    </form>
  );
};

export default RegisterForm;
