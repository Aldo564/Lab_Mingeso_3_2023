import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import TestComponent from "./Components/TestComponent";
import QuestionsComponent from "./Components/QuestionsComponent";
import EnterQuestionComponent from "./Components/EnterQuestionComponent";
import RookieComponent from "./Components/RookieComponent";
import IntermediateComponent from "./Components/IntermediateComponent";
import AdvancedComponent from "./Components/AdvancedComponent";
import ResultsComponent from "./Components/ResultsComponent";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<HomeComponent />}> </Route>
                    <Route path = "/test" element = {<TestComponent />}> </Route>
                    <Route path = "/test/bajo" element = {<RookieComponent />}> </Route>
                    <Route path = "/test/medio" element = {<IntermediateComponent />}> </Route>
                    <Route path = "/test/alto" element = {<AdvancedComponent />}> </Route>
                    <Route path = "/resultado" element = {<ResultsComponent />}> </Route>
                    <Route path = "/preguntas" element = {<QuestionsComponent />}> </Route>
                    <Route path = "/preguntas/ingresar" element = {<EnterQuestionComponent />}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
