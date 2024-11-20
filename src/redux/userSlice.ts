
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fetchUserData from "../api/fetchUserData";
import { UserDataInterface } from "../types/types";

/**
 * Asynchronous thunk action to fetch user data.
 *
 * @async
 * @function fetchUser
 * @param {void} _ - Unused parameter.
 * @param {Object} thunkAPI - The thunk API object.
 * @param {Function} thunkAPI.rejectWithValue - Function to return a rejected value.
 * @returns {Promise<Object>} The fetched user data or an error message.
 */

/**
 * Interface representing the state of the user.
 *
 * @interface UserState
 * @property {UserDataInterface | null} data - The user data.
 * @property {boolean} loading - Indicates if the user data is being loaded.
 * @property {string | null} error - The error message if the user data failed to load.
 */

/**
 * Initial state of the user slice.
 *
 * @constant
 * @type {UserState}
 */

/**
 * Redux slice for managing user state.
 *
 * @constant
 * @type {Slice}
 * @property {string} name - The name of the slice.
 * @property {UserState} initialState - The initial state of the slice.
 * @property {Object} reducers - The reducers for the slice.
 * @property {Function} extraReducers - The extra reducers for handling asynchronous actions.
 */
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
