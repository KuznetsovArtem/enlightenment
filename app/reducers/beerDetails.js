/**
 * Created by artem on 12/15/16.
 */

import types from '../constants/beerDetails'

const initialState = {
  rate: 5
};

export default function beerDetails(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT_RATE:
      return {
        ...state,
        rate: state.rate + 1
      };
    case types.DECREMENT_RATE:
      return {
        ...state,
        rate: state.rate - 1
      };
    default:
      return state;
  }
}