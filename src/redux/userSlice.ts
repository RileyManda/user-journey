import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUserData from "../api/fetchUserData";
import { UserDataInterface } from "../types/types";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchUserData();
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
  data: JSON.parse(localStorage.getItem("userData") || "null"), // Load from localStorage if available
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
        console.log("Action Payload:", action.payload);
        state.loading = false;
        state.data = action.payload;
        // Save data to localStorage
        localStorage.setItem("userData", JSON.stringify(action.payload));
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
