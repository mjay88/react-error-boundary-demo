import { Child } from "./Child";
import { ErrorBoundary } from "./ErrorBoundary";
function App() {
	return (
		<>
			<h1>Parent</h1>
			<ErrorBoundary fallback={<h1>Error in child</h1>}>
				<Child />
			</ErrorBoundary>
		</>
	);
}

export default App;
