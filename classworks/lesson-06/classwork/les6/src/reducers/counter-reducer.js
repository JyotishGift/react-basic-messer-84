const reducer = (state = { counter: 0 }, action) => {
  if(action.type === 'RESET'){
    state = {
        ...state,
      counter: 0
    };
  }
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DEC':
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export default reducer;
