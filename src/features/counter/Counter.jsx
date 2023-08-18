import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../app/slice/count.slice";

const Counter = () => {
	const dispatch = useDispatch();
	return (
		<>
			<div>
				<button
					onClick={() =>
						dispatch(
							actions.incrementOrDecrement("INCREMENT" )
						)
					}>
					increment
				</button>
				<button
					onClick={() =>
						dispatch(
							actions.incrementOrDecrement("DECREMENT" )
						)
					}>
					decrement
				</button>
			</div>
		</>
	);
};

export default Counter;
