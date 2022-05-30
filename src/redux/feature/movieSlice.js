import {createSlice} from '@reduxjs/toolkit'

const movieReducer = createSlice({
    name: 'movie',
    initialState: {
        moviesList: [],
        movie: {

        }
    },
    reducers: {
        getMovies(name){
            return name
        },
        setMovies: (state,action ) => {
            state.moviesList = action.payload
        }
    }
});

export const {getMovies, setMovies} = movieReducer.actions;

export default movieReducer;