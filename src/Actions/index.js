export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const decrementby = num => {
  return {
    type: "DECREMENTBY",
    payload: num
  };
};
export const incrementby = num => {
  return {
    type: "INCREMENTBY",
    payload: num
  };
};
export const reset = () => {
  return {
    type: "RESET"
  };
};
