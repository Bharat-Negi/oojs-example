// Async API Calls (Redux Thunk – Built-in)
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const res = await fetch("http://jsonplaceholder/users");
	return res.json();
});

const userSlice = createSlice({
	name: "users",
	initialState: {
		user: [],
		loading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});
export default userSlice.reducer;
