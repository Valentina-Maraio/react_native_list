import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  todos: [],
  favs: [],
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data);
});

export const addToFavorites = createAsyncThunk(
  "user/addToFavorites",
  async (userId, { getState }) => {
    const { todos, favs } = getState().user;
    const userToAdd = todos.find((user) => user.id === userId);

    const isAlreadyInFavorites = favs.some((user) => user.id === userId);

    if (!isAlreadyInFavorites) {
      return userToAdd;
    } else {
      return null;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload.map(user => ({ ...user, id: user.id || null })); // Ensure id property exists
        state.error = '';

      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.loading = false), (state.todos = []);
        state.error = action.error.message;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.favs.push(action.payload);
      })
  },
});

export const { addUserToFavorites } = userSlice.actions;
export default userSlice.reducer;
