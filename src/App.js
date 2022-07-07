import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import SearchParams from "./components/SearchParams.jsx";
import Details from "./components/Details.jsx";
import ThemeContext from "./components/ThemeContext.jsx";
import { useState } from "react";

function App() {
    const theme = useState("green");

    return (
        <ThemeContext.Provider value={theme}>
            <BrowserRouter>
                <header>
                    <Link to="/">
                        <h1>Adopt Me!</h1>
                    </Link>
                </header>

                <Routes>
                    <Route path="/" element={<SearchParams />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;