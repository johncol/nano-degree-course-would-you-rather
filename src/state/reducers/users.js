import { UserActionType } from '../actions/users';

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.SAVE_USER:
      return saveUser(state, action);

    default:
      return state;
  }
};

const saveUser = (state, action) => {
  const user = action.payload;
  return {
    ...state,
    [user.id]: user
  };
};

export default usersReducer;
