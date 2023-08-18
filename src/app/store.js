import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as countReducer } from "./slice/count.slice";
import { reducer as asyncCountReducer } from "./slice/asyncCount.slice";

const reducers = combineReducers({
	counter: countReducer,
	asyncCounter: asyncCountReducer,
});

const store = configureStore({
	reducer: reducers,
});

export default store;
