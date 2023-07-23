import React, {Component} from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import {darcula} from "@uiw/codemirror-theme-darcula";

class EnterQuestionComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pregunta: '',
            respuesta: '',
            dificultad: '',
        };
    }

    changePregunta = event => {
        this.setState({
            pregunta: event.target.value
        });
        console.log(this.state.pregunta)
    };

    changeRespuesta = event => {
        this.setState({
            respuesta: event.target.value
        });
        console.log(this.state.respuesta)
    };

    changeDificultad = event => {
        this.setState({
            dificultad: event.target.value
        });
        console.log(this.state.dificultad)
    };

    guardarPregunta = event => {
        event.preventDefault();
        const MySwal = withReactContent(Swal);
        if(this.state.pregunta === '')
        {
            MySwal.fire({
                title: <strong>Error en pregunta</strong>,
                html: <i>Porfavor escriba una pregunta valido</i>,
                icon: 'error'
            });
        }
        else if(this.state.respuesta === '')
        {
            MySwal.fire({
                title: <strong>Error en respuesta</strong>,
                html: <i>Porfavor escriba una respuesta valida</i>,
                icon: 'error'
            });
        }
        else if(this.state.dificultad === '')
        {
            MySwal.fire({
                title: <strong>Error en dificultad</strong>,
                html: <i>Porfavor seleccione una dificultad valida</i>,
                icon: 'error'
            });
        }
        else
        {
            fetch(`http://localhost:8080/pytest/pregunta?pregunta=${this.state.pregunta}&respuesta=${this.state.respuesta}&dificultad=${this.state.dificultad}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: '' }) 
            })
            .catch(err => console.error(err));

            MySwal.fire({
                title: <strong>Exito!</strong>,
                html: <i>Se a añadido la pregunta correctamente</i>,
                icon: 'success'
            });

            this.setState({pregunta: ''});
            this.setState({respuesta: ''});
            this.setState({dificultad: ''});

            event.target.reset();
        }
        
    }

    keyDownHandler = event => {
        if (event.key === 'Tab') {
            event.preventDefault();
            event.target.value = event.target.value + "\t";
        }
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Preguntas</h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="/">Volver al menú principal</a></li>
                        <li><a href="/preguntas">Ver preguntas</a></li>
                    </ul>
                </nav>
                <div>
                    <h1 style={{color: "#FF8427"}}>Ingrese la nueva pregunta</h1>
                    <br/>
                    <div>
                        <form onSubmit={this.guardarPregunta}>
                            <ul className="registration-form">
                                <li className="codigo-input-container">
                                    <label>Pregunta</label>
                                    <CodeMirror
                                        value="#Escriba el enunciado de su pregunta y el código a continuación
                                       print('Hola Mundo!')"
                                        height="200px"
                                        extensions={[python()]}
                                        theme={darcula}
                                        onBlur={this.changePregunta}
                                    />


                                </li>
                                <li>
                                    <label>Respuesta</label>
                                    <input type="text" placeholder="Ingrese la respuesta" id="respuesta"
                                        name="respuesta" onChange={this.changeRespuesta}/>
                                </li>
                                <li>
                                    <label>Dificultad</label>
                                    <select id="dificultad" name="dificultad" onChange={this.changeDificultad}>
                                        <option value="" selected>Seleccione una dificultad</option>
                                        <option value="1">Novato</option>
                                        <option value="2">Intermedio</option>
                                        <option value="3">Avanzado</option>
                                    </select>
                                </li>
                                <li className="btn-secondary-container">
                                    <input className="btn-secondary" type="submit" value="Ingresar pregunta"/>
                                </li>
                            </ul> 
                        </form>
                        <footer>
                            <p>Derechos reservados PyTest 2023</p>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnterQuestionComponent;
