import {ADD_COMMENT} from './action';

const initialState = {
  comments: {1: '', 2: '', 3: ''},
};
const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comments: {
          ...state.comments,
          [action.payload.id]: action.payload.content,
        },
      };
    default:
      return state;
  }
};
export default productReducer;
