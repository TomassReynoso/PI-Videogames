import axios from 'axios';
import { GET_GAMES, GET_GAME_ID, GET_GAME_NAME, POST_GAMES, GET_GENRES } from './actionTypes';

export function getGames() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/videogames/');
            return dispatch({
                type: GET_GAMES,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export function getGameByName(name) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            return dispatch({
                type: GET_GAME_NAME,
                payload: response.data,
            });
        } catch (error) {
            console.log(`We couldn´t find ${name}`);
        }
    }
}

export function getGameById(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/videogames/${id}`);

            return dispatch({
                type: GET_GAME_ID,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export function postGames(input) {
    return async function (dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/videogames/`, input);
            return dispatch({
                type: POST_GAMES,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export function getGenres() {
    return async function (dispatch) {
        try {
            const response = await axios.post(`http://localhost:3001/genres/`);
            console.log(response);
            return dispatch({
                type: GET_GENRES,
                payload: response.data,
            });
        } catch (error) {
            console.log("We couldn´t find this Genre");
        }
    };
};