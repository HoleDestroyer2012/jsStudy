import React from "react";
import Counter from "./features/counter/Counter";
import { useSelector } from "react-redux";
import AsyncCounter from "./features/counter/AsyncCounter";

function App() {
	const { counter } = useSelector((state) => state);
	const { isLoading, value } = useSelector((state) => state.asyncCounter);
	return (
		<div className='App'>
			<Counter />
			<p>Counter:{counter}</p>
			<AsyncCounter />
			<p>asyncCounter:{isLoading ? <> Loading...</> : value}</p>
		</div>
	);
}

export default App;
