import React, {Component} from 'react';
import '../App.css';
import CodeBlock from "./CodeBlockComponent";

class TestComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            preguntas: [],
            respuestas: [],
        }
    }

    componentDidMount()
    {
        fetch("http://localhost:8082/pytest/preguntas/1")
            .then((response) => response.json())
            .then((data) => this.setState({ preguntas: data }));
    }

    changeRepuesta = event => {
        this.setState({
            respuestas: this.respuestas + event.target.value
        });
        console.log(this.state.respuestas)
    };

    render() {
        return (
            <div>
                <header>
                    <h1> Prueba nivel Novato </h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="/"> Volver al menú principal </a></li>
                    </ul>
                </nav>
                <div>
                    <br/>
                    <h2 style={{color: "#FF8427"}}> Tenga en cuenta dejar un espacio después de cada coma en caso de escribir una lista, ej: "[1, 2, 3]" </h2>
                    <br/>
                    <br/>
                    <body>
                        <table className="contentTable">
                            <thead>
                                <tr>
                                    <th>N° pregunta</th>
                                    <th>Enunciado</th>
                                    <th>Respuesta</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.preguntas.map((pregunta, index) =>(
                                <tr key={pregunta.ID_PYTEST}>
                                    <td> {index + 1} </td>
                                    <td> <CodeBlock code={pregunta.pregunta}/> </td>
                                    <td> <input type={"text"} onChange={this.changeRepuesta} placeholder={"Ingrese su respuesta"}/> </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <a className="btn-secondary-container">
                            <button className="btn-secondary"> Enviar </button>
                        </a>
                    </body>
                    <footer>
                        <p> Derechos reservados Pytest 2023 </p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default TestComponent;
