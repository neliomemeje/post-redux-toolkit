import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "alan becker" },
  { id: "1", name: "tommy hearb" },
  { id: "2", name: "joe farcel" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
