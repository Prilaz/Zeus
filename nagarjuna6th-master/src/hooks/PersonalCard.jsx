import React from "react";

const PersonalCard = () => {
  let name = props.name;
  let address = props.address;
  let phone = props.phone;
  return (
    <div className="m-5 p-5 border-4 rounded-4xl shadow-2xl flex flex-col justify-evenly items-center">
      <h1 className="text-2xl">{name}</h1>
      <h2 className="text-xl">{address}</h2>
      <h2 className="text-xl">{phone}</h2>
    </div>
  );
};

export default PersonalCard;
