import { GET_GAMES, GET_GAME_NAME, GET_GENRES } from '../actions/actionTypes';

let initialState = {
    games: [],
    gamesCopy: [],
    genres: [],
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,    //juegos
                gamesCopy: action.payload,
            }

        case GET_GAME_NAME:
            return {
                ...state,
                games: action.payload,
            }

        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            }

        default: return state;
    }
}

export default rootReducer;