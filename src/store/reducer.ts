import {ADD_COMMENT} from './action';

const initialState = {
  comment: [],
};
const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        comment: [...state.comment, action.payload],
      };
    default:
      return state;
  }
};
export default productReducer;
