import React from "react";
import Model from "../../components/model";
import RegisterForm from "../../components/register-form";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ transform: "scaleY(0)", transformOrigin: "top" }}
      animate={{ transform: "scaleY(1)" }}
      exit={{ transition: { duration: 5 } }}
    >
      <Model width={500}>
        <RegisterForm />
      </Model>
    </motion.div>
  );
};

export default Register;
