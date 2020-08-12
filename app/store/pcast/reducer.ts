import { PcastActions } from './types';
import { PcastState } from './types';
import { podcasts, otherPodcasts, authors } from '../../data';

const initState: PcastState = {
  podcasts,
  otherPodcasts,
  authors: [
    authors.harlod,
    authors.gregory,
    authors.leslie,
    authors.rosemary,
    authors.harlod,
  ],
  SearchResult: [],
};

function PcastReducer(previousState = initState, action: PcastActions) {
  const state = { ...previousState };

  switch (action.type) {
    case 'P_CAST':
      return state;

    case 'SEARCH_PCAST':
      state.SearchResult = [];
      if (action.payload) {
        state.SearchResult = podcasts.filter(({ name }) =>
          name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()),
        );
      }
      return state;

    default:
      return state;
  }
}

export { PcastReducer };
