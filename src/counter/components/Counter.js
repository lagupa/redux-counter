import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementby,
  decrementby
} from "../../Actions";

function Counter() {
  const data = useSelector(state => state.Counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-primary">
        <h3 className="container text-white pt-4 pb-4">
          Current Counter: {data}
        </h3>
      </div>

      <div className="container">
        <button
          onClick={() => dispatch(increment())}
          className="increment btn btn-warning text-white btn-lg mr-4 mt-4"
          value="increment"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="decrement btn btn-warning text-white btn-lg mr-4 mt-4"
          value="decrement"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementby(5))}
          className="add btn btn-warning text-white btn-lg mr-4 mt-4"
          value="Add5"
        >
          Add 5
        </button>
        <button
          onClick={() => dispatch(decrementby(5))}
          className="subtract btn btn-warning text-white btn-lg mr-4 mt-4"
          value="subtract5"
        >
          Subtract 5
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="subtract btn btn-warning text-white btn-lg mr-4 mt-4"
          value="Reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
