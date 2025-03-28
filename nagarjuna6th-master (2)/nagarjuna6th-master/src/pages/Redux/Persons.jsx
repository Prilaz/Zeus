import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Persons = () => {
  const { name, address } = useSelector((store) => store.personStore);
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");

  const dispatch = useDispatch();
  return (
    <div className=" flex justify-center items-center h-[100vh] flex-col text-2xl">
      <div className="flex items-center w-3/4">
        <h1 className="w-1/2">Name:{name}</h1>
        <input
          type="text"
          className="m-5 input border-amber-400"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => dispatch({ type: "UPDATE_NAME", payload: Name })}
        >
          Update name
        </button>
      </div>
      <div className="flex items-center w-3/4">
        <h1 className="w-1/2">Address:{address}</h1>
        <input
          type="text"
          className="m-5 input border-amber-400"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => dispatch({ type: "UPDATE_ADDRESS", payload: Address })}
        >
          Update name
        </button>
      </div>
    </div>
  );
};

export default Persons;
