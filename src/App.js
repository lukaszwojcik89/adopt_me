import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./components/SearchParams.jsx";
import Details from "./components/Details.jsx";

import "./App.css"

function App() {
    return (
        
            <BrowserRouter>
            <header>
            <Link to="/">
                    <h1>Adopt Me</h1>
                </Link>
            </header>

                <Routes>
                    <Route path="/" element={<SearchParams />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        
    );
}

export default App;
