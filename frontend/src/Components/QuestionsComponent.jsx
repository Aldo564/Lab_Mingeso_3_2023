import React, {Component} from 'react';
import CodeBlock from "./CodeBlockComponent";


class QuestionsComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            preguntas: [],
        }
    }

    componentDidMount()
    {
        fetch("http://localhost:8080/pytest/preguntas")
        .then((response) => response.json())
        .then((data) => this.setState({ preguntas: data }));
    }
    
    render() {
        return (
            <div>
                <header>
                    <h1> Preguntas </h1>
                </header>
                <nav>
                    <ul className={"btn-secondary-container"}>
                        <li className={"btn-secondary"}><a href="/">Volver al menú principal</a></li>
                        <li className={"btn-secondary"}><a href="/preguntas/ingresar">Ingresar pregunta nueva</a></li>
                    </ul>
                </nav>
                <div>
                    <br/>
                    <h1 style={{color: "#FF8427"}}> Lista de Preguntas </h1>
                    <br/>
                    <br/>
                    <table className="contentTable">
                        <thead>
                            <tr>
                                <th>Enunciado</th>
                                <th>Dificultad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.preguntas.map((pregunta) =>(
                                <tr key={pregunta.ID_PYTEST}>
                                    <td> <CodeBlock code={pregunta.pregunta}/> </td>
                                    <td> {pregunta.dificultad} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <footer>
                    <p> Derechos reservados Pytest 2023 </p>
                </footer>
            </div>
        );
    }
}

export default QuestionsComponent;