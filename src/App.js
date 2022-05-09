import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SearchParams from "./components/SearchParams.jsx";
import Details from "./components/Details.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">
                    <h1>Adopt Me</h1>
                </Link>

                <Routes>
                    <Route path="/" element={<SearchParams />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
