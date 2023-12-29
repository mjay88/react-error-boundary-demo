import React from "react";

//must be a class component
export class ErrorBoundary extends React.Component {
	state = { hasError: false };

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}
	//any time there is an error that is caught by this component, it's going to call this function and pass along the error
	componentDidCatch(error) {
		console.log("Error", error.message);
		//log to data base or other error logging software/api
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}
		return this.props.children;
	}
}
