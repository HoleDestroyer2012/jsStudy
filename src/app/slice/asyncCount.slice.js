import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncCount = createSlice({
	name: "asyncCount",
	initialState: { isLoading: false, value: 0 },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAsyncCount.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAsyncCount.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload === "INCREMENT") state.value += 1;
				if (action.payload === "DECREMENT") state.value -= 1;
			});
	},
});

const fetchCount = async (value) => {
	return new Promise((resolve) => setTimeout(() => resolve(value), 1000));
};

export const getAsyncCount = createAsyncThunk("getCount", async (value) => {
	const res = await fetchCount(value);
	return res;
});

export const { reducer, caseReducers } = asyncCount;
