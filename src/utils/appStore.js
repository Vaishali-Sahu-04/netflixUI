import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import configReducer from './configSlice'

const appStore = configureStore(
    {
        reducer:{
            user: userSliceReducer,
            movies: moviesReducer,
            config: configReducer,
        },
    }
)
export default appStore;