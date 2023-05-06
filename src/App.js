
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
import Welcome from "Welcome";
import About from "About";
import Home from "Home";
import Hcvtest from "Hcvtest";
import Results from "Results";
import Patients from "Patients";


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
					<Route path="app" element={<Welcome />} />
					<Route path="about" element={<About />} />
					<Route path="home" element={<Home />} />
					<Route path="text" element={<Hcvtest />}/>
					<Route path="result" element={<Results/>}/>
					<Route path="patients" element={<Patients/>}/>
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
