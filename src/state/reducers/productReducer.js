export const productReducer = (state = { product: [""] }, action) => {
  console.log("state------->", state);
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state,
      product: [...action.data],
    };
  }
  if (action.type === "SELECTED_PROD_ID") {
    return {
      ...state,
      selectedprodid: [action.data],
    };
  }
  if (action.type === "MENS_CATEGORY") {
    return {
      ...state,
      product: [...action.data],
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
