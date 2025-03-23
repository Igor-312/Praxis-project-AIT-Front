const initialState = {
  count: 0,
};

function rootReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default rootReducer;
 