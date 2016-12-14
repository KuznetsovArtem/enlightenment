/**
 * Created by artem on 12/15/16.
 */
import types from '../constants/beerDetails'

export function incrementRate() {
  return {
    type: types.INCREMENT_RATE
  }
}

export function decrementRate() {
  return {
    type: types.DECREMENT_RATE
  }
}