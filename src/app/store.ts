import { configureStore } from '@reduxjs/toolkit';
import PopularMoviesReducer from "../features/populars/popularMovieSlice";
import PopularTVsReducer from "../features/populars/popularTVSlice";

export const store = configureStore({
  reducer: {
    popularMovies: PopularMoviesReducer,
    popularTVs: PopularTVsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
