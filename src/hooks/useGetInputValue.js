import { useState } from "react";

export const useGetInputValue = (initialState) => {
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return { user, setUser, handleChange };
};
