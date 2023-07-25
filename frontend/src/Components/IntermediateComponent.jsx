import React, {Component} from 'react';
import '../App.css';
import CodeBlock from "./CodeBlockComponent";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

class IntermediateComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            preguntas: [],
            respuestas: [],
            puntaje: [],
            respuestasCorrectas: [],
            tiempoTranscurrido: 0,
            testFinalizado: false,
        };
        this.intervalo = null;
    }

    componentDidMount()
    {
        fetch("http://localhost:8080/pytest/preguntas/2")
            .then((response) => response.json())
            .then((data) => this.setState({ preguntas: data }));


        this.intervalo = setInterval(this.incrementarTiempo, 1000);
    }

    changeRepuesta = (event, index) => {
        const respuestaUsuario = event.target.value;
        this.setState((prevState) => {
            const nuevasRespuestas = [...prevState.respuestas];
            nuevasRespuestas[index] = respuestaUsuario;
            return {respuestas: nuevasRespuestas};
        });

        console.log(this.state.respuestas)
    };

    enviarRepuestas = event => {
        event.preventDefault();
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: <strong>¿Está de enviar sus respuestas?</strong>,
            html: <i>Aun puede volver y cambiar si no esta seguro! Exito!</i>,
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#00FF00',
            showDenyButton: true,
            denyButtonText: 'No'
        }).then(respuesta=>{
            if(respuesta.isConfirmed){
                for (let i = 0; i < this.state.preguntas.length; i++) {
                    this.state.puntaje[i] = this.state.respuestas[i] === this.state.preguntas[i].respuesta;
                }

                this.setState({ testFinalizado: true });

                localStorage.setItem("puntaje", JSON.stringify(this.state.puntaje));
                localStorage.setItem("respuestas", JSON.stringify(this.state.respuestas));
                localStorage.setItem("preguntas", JSON.stringify(this.state.preguntas));
                localStorage.setItem("tiempoTranscurrido", JSON.stringify(this.state.tiempoTranscurrido));

                window.location.href = "/resultado";
            }
        });
    }

    componentWillUnmount() {
        clearInterval(this.intervalo);
    }

    incrementarTiempo = () => {
        if (!this.state.testFinalizado) {
            this.setState((prevState) => ({
                tiempoTranscurrido: prevState.tiempoTranscurrido + 1,
            }));
        }
    };




    render() {
        const { tiempoTranscurrido } = this.state;

        return (
            <div>
                <header>
                    <h1> Prueba nivel Intermedio </h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="/"> Volver al menú principal </a></li>
                    </ul>
                </nav>
                <div>
                    <br/>
                    <h2 style={{color: "#FF8427"}}> Tenga en cuenta dejar un espacio después de cada coma en caso de escribir una lista, ej: "[1, 2, 3]" </h2>
                    <p>Tiempo transcurrido: {tiempoTranscurrido} segundos</p>
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
                                    <td> <input type={"text"} onBlur={(event) => this.changeRepuesta(event, index)} placeholder={"Ingrese su respuesta"}/> </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <a className="btn-secondary-container">
                            <button className="btn-secondary" onClick={this.enviarRepuestas}> Enviar </button>
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

export default IntermediateComponent;
