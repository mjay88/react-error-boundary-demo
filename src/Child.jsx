import React, { useEffect } from "react";

export function Child() {
	//Error boundary will only catch errors caused by the rendering steps of react
	useEffect(() => {
		const timeout = setTimeout(() => {
			throw new Error("Timeout");
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, []);

	//ErrorBoundary does not work with async code if not using a try/catch or .catch statement
	// useEffect(() => {
	// 	fetch("/").then(() => {
	// 		throw new Error("Fetch");
	// 	}).catch((e) => setError(e));
	// }, []);

	throw new Error("Component");

	return <h2>Child</h2>;
}
