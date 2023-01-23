import "./App.css";
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "Dashboard";
import Home from "Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/register"
					element={<Register></Register>}
				/>
				<Route path="dashboard" element={<Dashboard />}>
					<Route
						index
						element={<Navigate replace to="app" />}
					/>
					<Route path="app" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
