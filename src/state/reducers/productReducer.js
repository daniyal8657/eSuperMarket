export const productReducer = (state = { product: [] }, action) => {
  console.log("state------->", state);
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...action.data, ...state.product],
    };
  }
  if (action.type === "REMOVE_PRODUCT") {
    state.product.pop();
    return {
      ...state,
      product: [...state.product],
    };
  }
  return state;
};
