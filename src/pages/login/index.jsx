import React from "react";
import LoginForm from "../../components/login-form";
import Model from "../../components/model";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ transform: "scaleY(0)", transformOrigin: "top" }}
      animate={{ transform: "scaleY(1)" }}
      exit={{ transition: { duration: 5 } }}
    >
      <Model width={400}>
        <LoginForm />
      </Model>
    </motion.div>
  );
};

export default Login;
