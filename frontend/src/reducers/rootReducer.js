const initialState = {
  test: 'hello world'
};

const rootReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default rootReducer;
