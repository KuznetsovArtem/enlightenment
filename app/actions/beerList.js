/**
 * Created by artem on 12/11/16.
 */

import * as actionTypes from './actionTypes'

export function addBeerToMyList(e, beerObj) {
    return {
        type: actionTypes.ADD_BEER_TO_MY_LIST,
        payload: beerObj
    };
}

export function removeBeerFromMyList(e, beerObj) {
    return {
        type: actionTypes.REMOVE_BEER_FROM_MY_LIST,
        payload: beerObj
    };
}