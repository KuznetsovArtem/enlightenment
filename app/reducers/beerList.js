import * as actionTypes from '../actions/actionTypes'

const initialState = {
    beerListMine: []
};

export default function beerList(state = initialState, action) {

    switch (action.type) {

        case actionTypes.ADD_BEER_TO_MY_LIST:
            state.beerListMine.push(action.payload);

            return {
                ...state
            };

        case actionTypes.REMOVE_BEER_FROM_MY_LIST:
            const selectedBeerId = action.payload.id;
            let beerInList = state.beerListMine.filter(function (obj) {
                return obj.id !== selectedBeerId;
            });

            state.beerListMine = [...beerInList];

            return {
                ...state
            };
        default:
            return state
    }
}

