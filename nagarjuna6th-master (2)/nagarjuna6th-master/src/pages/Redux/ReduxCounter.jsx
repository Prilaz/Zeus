import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxCounter = () => {
  const counterStore = useSelector((store) => {
    return store.counterStore;
  });
  const count = counterStore.count;

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center h-[100vh] text-3xl flex-col">
      Count : {count}
      <button className="btn" onClick={() => dispatch({ type: "INCREASE" })}>
        Increase Count
      </button>
      <button
        className="btn delete-btn"
        onClick={() => dispatch({ type: "DECREASE" })}
      >
        Decrease Count
      </button>
      <button
        className="btn delete-btn"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset Count
      </button>
    </div>
  );
};

export default ReduxCounter;
