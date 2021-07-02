import "./App.css";
import Header from "./components/Header";
import ListOfLinks from "./components/ListOfLinks";
import RoutesLinks from "./components/RoutesLinks";

function App() {
    return (
        <div className="App">
            <Header />
            <ListOfLinks />
            <RoutesLinks />
        </div>
    );
}

export default App;
