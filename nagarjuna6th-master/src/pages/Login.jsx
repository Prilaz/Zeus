import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../Layout/myContext";

const Login = () => {
  let value = useContext(MyContext);
  return (
    <>
      {value}
      <form className="p-5 border-4 border-slate-300 w-1/3 h-1/8 mx-auto my-5  rounded-2xl  bg-dark">
        <h1 className="text-center underline bold text-primary ">Login</h1>
        <label htmlFor="username" className="text-2xl m-6  text-primary">
          Username
          <input
            type="text"
            className="outline px-3 py-1 w-full rounded-lg text-3xl m-2"
          />
        </label>
        <label htmlFor="Password" className="text-2xl m-6  text-primary">
          Password
          <input
            type="password"
            className="outline px-3 py-1 w-full rounded-lg text-3xl m-2"
          />
        </label>

        <button className="btn  btn-info bg-primary w-full mt-4 mb-4 ">
          LogIn
        </button>

        <p className="text-2xl m-3">
          Do not have an Account?
          <Link to={"/login"}>Signin</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
