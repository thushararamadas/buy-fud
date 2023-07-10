import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/routing/routers/AppRouter";
import { Provider } from "./contest/Store";

function App() {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
}

export default App;
