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
import Hcvtest from "Hcvtest"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route
					path="/login"
					element={<Login></Login>}
				/>
				<Route path="dashboard" element={<Dashboard />}>
					<Route
						index
						element={<Navigate replace to="app" />}
					/>
					<Route path="app" element={<Home />} />
					<Route path="text" element={<Hcvtest />} />
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
