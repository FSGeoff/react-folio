import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Bio from "./containers/Bio/Bio";
import Education from "./containers/Education/Education";
import Projects from "./containers/Projects/Projects";
import WorkHistory from "./containers/WorkHistory/WorkHistory";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/workhistory" component={WorkHistory} />
					<Route path="/bio" component={Bio} />
					<Route path="/education" component={Education} />
					<Route path="/projects" component={Projects} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
