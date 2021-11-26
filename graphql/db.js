import fetch from "node-fetch"
const API_URL = "https://yts.mx/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
    let reqURL = API_URL;
    if (limit > 0) {
        reqURL += `limit=${limit}`;
    }
    if (rating > 0) {
        reqURL += `&minimum_rating=${rating}`;
    }

    return fetch(reqURL)
    .then(res => res.json())
    .then(json => json.data.movies);
}