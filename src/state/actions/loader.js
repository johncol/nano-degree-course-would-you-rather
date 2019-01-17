const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

const LoaderActionCreator = {
  showLoader: () => ({
    type: SHOW_LOADER
  }),

  hideLoader: () => ({
    type: HIDE_LOADER
  })
};

export const LoaderActionType = {
  SHOW_LOADER,
  HIDE_LOADER
};

export const LoaderAction = {
  showLoader: () => LoaderActionCreator.showLoader(),
  hideLoader: () => LoaderActionCreator.hideLoader()
};
