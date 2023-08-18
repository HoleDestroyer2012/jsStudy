import { useDispatch } from "react-redux";
import { getAsyncCount } from "../../app/slice/asyncCount.slice";

const AsyncCounter = () => {
	const dispatch = useDispatch();
	return (
		<>
			<div>
				<button onClick={() => dispatch(getAsyncCount("INCREMENT"))}>
					async increment
				</button>
				<button onClick={() => dispatch(getAsyncCount("DECREMENT"))}>
					async decrement
				</button>
			</div>
		</>
	);
};

export default AsyncCounter;
