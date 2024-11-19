import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUserData from "../api/fetchUserData";
import { UserDataInterface } from "../types/types";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserData();
      //   console.log("Fetched User Data:", data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch user data");
    }
  }
);

interface UserState {
  data: UserDataInterface | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("Action Payload:", action.payload); // Debug Redux payload
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
