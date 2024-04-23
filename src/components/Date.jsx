import React from "react";

const NowDate = () => {
  //for current Date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div>
      <p>{date}</p>
    </div>
  );
};

export default NowDate;
