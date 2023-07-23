import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import TestComponent from "./Components/TestComponent";
import QuestionsComponent from "./Components/QuestionsComponent";
import RookieComponent from "./Components/RookieComponent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<HomeComponent />}> </Route>
                    <Route path = "/test" element = {<TestComponent />}> </Route>
                    <Route path = "/test/bajo" element = {<RookieComponent />}> </Route>
                    <Route path = "/preguntas" element = {<QuestionsComponent />}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
