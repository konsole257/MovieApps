import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_TOKEN;

export interface PopularTV {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

interface PopularTVsState {
  items: PopularTV[];
  loading: boolean;
  error: string | null;
};

const initialState: PopularTVsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchPopularTVs = createAsyncThunk('populars/fetchPopularTV',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://api.themoviedb.org/3//tv/popular?language=ja-JP&page=1',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`,
          },
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        return rejectWithValue(errorData.status_message || "Failed to fetch");
      }
      
      const data = await res.json();

      return data.results as PopularTV[];

    } catch (err: unknown) {
      if (err instanceof Error) {
        return rejectWithValue(err.message);
      }

      return rejectWithValue("Network error");
    }
  }
);

const PopularTVsSlice = createSlice({
  name: 'popularTVs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularTVs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularTVs.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPopularTVs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || action.error.message || "Failed to fetch movies";
      });
  },
});

export default PopularTVsSlice.reducer;