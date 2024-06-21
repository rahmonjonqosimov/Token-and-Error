import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { navLogin } from "../../redux/nav/navSlice";

const initialState = {
  UserName: "john32",
  password: "12345678",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleChange, setUser, user } = useGetInputValue(initialState);
  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/auth/sign-in", user)
      .then((res) => {
        localStorage.setItem("x-auth-token", res.data.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        toast.success(res.data.message);
        navigate("/users");
        dispatch(navLogin(localStorage.getItem("x-auth-token")));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleLogin} action="">
      <h2>Login</h2>
      <input
        value={user.UserName}
        onChange={handleChange}
        name="UserName"
        required
        type="text"
        placeholder="UserName"
      />
      <input
        value={user.password}
        onChange={handleChange}
        name="password"
        required
        type="password"
        placeholder="Password"
      />
      <button disabled={loading}>{loading ? "Loading" : "Log In"}</button>
      <div className="login__line"></div>
      <button onClick={() => navigate("/register")} type="button">
        Register
      </button>
    </form>
  );
};

export default LoginForm;
