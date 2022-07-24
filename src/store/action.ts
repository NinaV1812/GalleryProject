export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(comment: {id: number; content: string}) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}
