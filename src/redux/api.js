import axios from 'axios';

const API_ENGPOINT = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

export const fetchMovies = async (movieName) => {
    return axios.get(`${API_ENGPOINT}&s=${movieName}`);
}