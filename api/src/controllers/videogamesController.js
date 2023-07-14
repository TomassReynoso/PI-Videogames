const axios = require('axios');
require("dotenv").config();
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

const KEY = `?key=${API_KEY}`
const URL = `https://api.rawg.io/api/games`;

const getApiVideogames = async () => {

    try {
        const apiUrl = (
            await axios.get(`${URL}${KEY}`)
        );

        let results = [];
        for (let i = 0; i < 5; i++) {
            results = [...results, ...apiUrl.data.results];
            response = await axios.get(apiUrl.data.next);
        }

        const apiInfo = results.map((game) => {
            return {
                // id: game.id,
                name: game.name,
                //description: game.description_raw,
                image: game.background_image,
                // released: game.released,
                // rating: game.rating,
                // platforms: game.platforms.map((platform) => platform.platform.name),
                genres: game.genres.map((genre) => genre.name),
            };
        });
        return apiInfo;

    } catch (error) {
        throw new Error(error.message)
    }
};

const getDbVideogames = async () => {
    const dbGames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    });
    return dbGames;
}

const getAllVideogames = async () => {
    try {
        const apiGames = await getApiVideogames();
        const dbGames = await getDbVideogames();
        const allGames = dbGames.concat(apiGames);
        return allGames;
    } catch (error) {
        throw new Error(error.message)
    }
}

// const getVideogameById = async (id) => {
//     if (isNaN(id)) {
//         const game = await Videogame.findByPK(id, {
//             include: {
//                 model: Genre,
//                 through: { attributes: [] }
//             },
//         });
//         return game;
//     }

//     const game = (await axios.get(`${URL}/${id}${KEY}`)
//     ).data;

//     return game;
// }

const createVideogame = async (name, description, plataforms, image, released, rating) =>
    await Videogame.create({ name, description, plataforms, image, released, rating })



module.exports = {
    // getApiVideogames,
    // getDbVideogames,
    getAllVideogames,
    // getVideogameById,
    createVideogame,
};