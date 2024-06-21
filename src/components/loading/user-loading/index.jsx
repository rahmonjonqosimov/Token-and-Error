import React from "react";
import "./index.scss";

const UserLoading = ({ count }) => {
  return (
    <div className="user__loading__wrapper">
      {Array(count)
        .fill("")
        .map((_, inx) => (
          <div key={inx} className="user__loading__card">
            <div className="user__loading__card__img skeleton__anime"></div>
            <div className="user__loading__card__name skeleton__anime"></div>
            <div className="user__loading__card__age skeleton__anime"></div>
            <div className="user__loading__card__email skeleton__anime"></div>
          </div>
        ))}
    </div>
  );
};

export default UserLoading;
