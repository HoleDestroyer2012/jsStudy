import { createSlice } from "@reduxjs/toolkit";

const countDefault = 0;

export const countSlice = createSlice({
	name: "count",
	initialState: countDefault,
	reducers: {
		incrementOrDecrement: (state, action) => {
			if (action.payload === "INCREMENT") return state += 1;
			if (action.payload === "DECREMENT") return state -= 1;
			return state;
		},
	},
});

export const { actions, reducer } = countSlice;
