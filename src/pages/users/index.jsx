import React, { useEffect, useState } from "react";
import axios from "../../api";
import UserLoading from "../../components/loading/user-loading";
import "./index.scss";
import { motion } from "framer-motion";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    setLoading(true);
    axios
      .get("/users/search", { params: { limit: 1000 } })
      .then((res) => setUsers(res.data.data.users))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const userItems = users?.map((user) => (
    <div key={user?.id} className="user__card">
      <div className="user__img skeleton__anime"></div>
      <div className="user__heading">
        <h3 className="user__title">
          {user?.FirstName} {user?.LastName}
        </h3>
      </div>
      <h4 className="user__age"> {user?.phones[0]}</h4>
      <p className="user__email">{user?.role}</p>
      <div className="btns">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  ));
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="container">
        <h2 className="user__about">
          {user ? `${user?.FirstName} ${user?.role}` : "Users"}
        </h2>
        {loading ? (
          <UserLoading count={8} />
        ) : (
          <div className="user__wrapper">{userItems}</div>
        )}
      </div>
    </motion.div>
  );
};

export default Users;
