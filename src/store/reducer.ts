import {ADD_COMMENT} from './action';

const initialState = {
  comment: {1: '', 2: '', 3: ''},
};
// const helperFunc = (c, payload) =>
const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        // comment: [...state.comment, action.payload],
        comment: {
          ...state.comment,
          [action.payload.id]: action.payload.content,
        },
      };
    default:
      console.log('default');

      return state;
  }
};
export default productReducer;
