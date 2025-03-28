import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../api/userApi";

const Verify = () => {
  let [success, setSuccess] = useState(false);
  let [error, setError] = useState("");
  let params = useParams();
  //params:{token:qq21241242}
  let token = params.token;

  useEffect(() => {
    verifyEmail(token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess(true);
      }
    });
  }, []);

  showError = () => {
    if (success) {
      return (
        <div className="text-center py-4 bg-greeen-300">
          Email Verified Succcessfully
        </div>
      );
    }
  };
  return (
    <>
      {showError()}
      {showSuccess()}
    </>
  );
};

export default Verify;
