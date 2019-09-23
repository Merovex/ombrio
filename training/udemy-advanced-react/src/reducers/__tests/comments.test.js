import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('hands SAVE_COMMENT action',() => {
  let payload = "New Comment";
  const action = {
    type: SAVE_COMMENT,
    payload: payload
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([payload]);
});
