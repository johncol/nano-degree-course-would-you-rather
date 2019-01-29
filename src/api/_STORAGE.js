const StorageKey = {
  USERS: 'NANO_WYR_USERS',
  QUESTIONS: 'NANO_WYR_QUESTIONS'
};

export const getUsers = () => {
  const users = localStorage.getItem(StorageKey.USERS);
  return users ? JSON.parse(users) : null;
};

export const getQuestions = () => {
  const questions = localStorage.getItem(StorageKey.QUESTIONS);
  return questions ? JSON.parse(questions) : null;
};

export const saveUsers = users => {
  localStorage.setItem(StorageKey.USERS, JSON.stringify(users));
};

export const saveQuestions = questions => {
  localStorage.setItem(StorageKey.QUESTIONS, JSON.stringify(questions));
};
