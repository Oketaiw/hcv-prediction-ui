import "./App.css";
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/register"
					element={<Register></Register>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
