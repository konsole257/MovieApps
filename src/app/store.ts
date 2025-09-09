import { configureStore } from '@reduxjs/toolkit';
import PopularMoviesReducer from "../features/populars/popularMovieSlice";
import PopularTVsReducer from "../features/populars/popularTVSlice";
import PopularPersonsReducer from "../features/populars/popularPersonSlice";

export const store = configureStore({
  reducer: {
    popularMovies: PopularMoviesReducer,
    popularTVs: PopularTVsReducer,
    popularPersons: PopularPersonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
