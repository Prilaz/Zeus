import { Button, colors } from "@mui/material";
import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    alert("Count is updated");
  }, []);
  return (
    <div className="flex justify-evenly items-center h-[100vh] flex-col">
      <span> Counter:{count}</span>

      <div className="flex  flex-row ">
        {count < 10 && (
          <Button
            sx={{ margin: "10px" }}
            variant="contained"
            onClick={() => {
              setCount(++count);
            }}
          >
            Increase
          </Button>
        )}
        {count > 0 && (
          <Button
            sx={{ margin: "10px" }}
            variant="contained"
            onClick={() => {
              setCount(--count);
            }}
          >
            Decrease
          </Button>
        )}
        <Button
          sx={{ margin: "10px" }}
          variant="contained"
          onClick={() => {
            setCount((count = 0));
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
