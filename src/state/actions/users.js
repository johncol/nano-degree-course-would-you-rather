const SAVE_USER = 'SAVE_USER';

export const UserActionType = {
  SAVE_USER
};

const UserActionCreator = {
  saveUser: user => ({
    type: SAVE_USER,
    payload: user
  })
};

const saveUser = user => dispatch => {
  return dispatch(UserActionCreator.saveUser(user));
};

export const UserAction = {
  saveUser
};
