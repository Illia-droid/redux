import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCount, subCount } from "../../store/counterSlice";

const Counter = (props) => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount({ step: 7 }));
  const handleSub = () => dispatch(subCount({ step: 7 }));
  return (
    <section>
      <h2>Count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </section>
  );
};

export default Counter;
