import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <form className="p-5 border-4  w-1/3 h-1/8 mx-auto my-5  rounded-2xl bg-dark ">
        <h1 className="text-center underline bold text-primary ">Register</h1>
        <label htmlFor="username" className="text-2xl m-6  text-primary">
          Username
          <input
            type="text"
            className="outline px-3 py-1 w-full rounded-lg text-3xl m-2"
          />
        </label>
        <label htmlFor="username" className="text-2xl  m-6  text-primary">
          E-mail
          <input
            type="e-mail"
            className="outline px-3 py-1 w-full rounded-lg text-3xl m-2"
          />
        </label>
        <label htmlFor="username" className="text-2xl m-6  text-primary">
          Password
          <input
            type="password"
            className="outline px-3 py-1 w-full rounded-lg text-3xl m-2"
          />
        </label>
        <button
          className="bg-primary px-4 py-2 text-white mt-4 rounded-2xl w-full  hover:bg-blue-600 active:bg-blue-800 hover:shadow-2xl"
          style={{ fontSize: "24px" }}
        >
          {" "}
          Register
        </button>
        <p className="text-2xl m-3">
          Already have an account?
          <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </>
  );
};

export default Register;
