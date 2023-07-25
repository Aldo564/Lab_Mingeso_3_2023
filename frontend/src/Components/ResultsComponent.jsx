import React, {Component} from 'react';
import CodeBlock from "./CodeBlockComponent";

class ResultsComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            preguntas: [],
            respuestas: [],
            puntaje: [],
        };
    }

    componentDidMount()
    {
        const puntaje = localStorage.getItem("puntaje");
        if (puntaje)
        {
            this.setState({puntaje: JSON.parse(puntaje)});
        }

        const respuestas = localStorage.getItem("respuestas");
        if (respuestas)
        {
            this.setState({respuestas: JSON.parse(respuestas)});
        }

        const preguntas = localStorage.getItem("preguntas");
        if (preguntas)
        {
            this.setState({preguntas: JSON.parse(preguntas)});
        }

        const tiempoTranscurrido = localStorage.getItem("tiempoTranscurrido");
        if (tiempoTranscurrido)
        {
            this.setState({tiempoTranscurrido: JSON.parse(tiempoTranscurrido)});
        }


        console.log(this.state.puntaje)
        console.log(this.state.respuestas)
        console.log(this.state.preguntas)
        console.log(this.state.tiempoTranscurrido)
    }


    render() {
        return (
            <div>
                <header>
                    <h1> Resultados de su test </h1>
                </header>
                <nav>
                    <ul className={"btn-secondary-container"}>
                        <li className={"btn-secondary"}><a href="/">Volver al menú principal</a></li>
                    </ul>
                </nav>
                <div>
                    <br/>
                    <h1 style={{color: "#FF8427"}}> Resumen: </h1>
                    <br/>
                    <h2> Puntaje total: {this.state.puntaje.filter(Boolean).length}/4 </h2>
                    <br/>
                    <h2> Tiempo usado: {this.state.tiempoTranscurrido} segundos </h2>
                </div>
                <div>
                    <br/>
                    <h1 style={{color: "#FF8427"}}> Revisión detallada </h1>
                    <br/>
                    <br/>
                    <table className="contentTable">
                        <thead>
                        <tr>
                            <th>Enunciado</th>
                            <th>Respuesta correcta</th>
                            <th>Respuesta del usuario</th>
                            <th>Puntaje</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.preguntas.map((pregunta, index) =>(
                            <tr key={pregunta.ID_PYTEST}>
                                <td> <CodeBlock code={pregunta.pregunta}/> </td>
                                <td> {pregunta.respuesta} </td>
                                <td> {this.state.respuestas[index]} </td>
                                <td> {this.state.puntaje[index] ? 'Correcto' : 'Incorrecto'} </td>
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

export default ResultsComponent