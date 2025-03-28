const initialData = {
  name: "Ram",
  address: "Imadol",
};

const personReducer = (state = initialData, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, address: action.payload };
  }
  return state;
};

export default personReducer;
