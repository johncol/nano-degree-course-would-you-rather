import { LoaderActionType } from './action-types';

const LoaderActionCreator = {
  showLoader: () => ({
    type: LoaderActionType.SHOW_LOADER
  }),

  hideLoader: () => ({
    type: LoaderActionType.HIDE_LOADER
  })
};

export const LoaderAction = {
  showLoader: () => LoaderActionCreator.showLoader(),
  hideLoader: () => LoaderActionCreator.hideLoader()
};
