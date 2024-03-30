// reducers/cartReducer.js
const { createSlice } = require("@reduxjs/toolkit");
const thunk = require("redux-thunk");
const { configureStore } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

var actions = cartSlice.actions;
var addItem = actions.addItem,
  removeItem = actions.removeItem;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  //   middleware: [thunk],
});

module.exports = { store };
module.exports = { actions };
module.exports = cartSlice.reducer;
