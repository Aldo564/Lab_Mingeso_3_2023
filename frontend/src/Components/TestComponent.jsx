import React, {Component} from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <header>
                    <h1> Pruebas </h1>
                </header>
                <nav>
                    <ul>
                        <li><a href="/"> Volver al menú principal </a></li>
                    </ul>
                </nav>
                <div>
                    <br/>
                    <h1 style={{color: "#FF8427"}}> Elija la dificultad de la prueba que desea dar </h1>
                    <br/>
                    <br/>
                    <body>
                        <table className="contentTable">
                            <tbody>
                                <tr>
                                    <td>
                                        <a className="btn-secondary-container" href="/test/bajo">
                                            <button className="btn-secondary"> Baja </button>
                                        </a>
                                    </td>
                                    <td>
                                        <a className="btn-secondary-container" href="/test/medio">
                                            <button className="btn-secondary"> Media </button>
                                        </a>
                                    </td>
                                    <td>
                                        <a className="btn-secondary-container" href="/test/alta">
                                            <button className="btn-secondary"> Alta </button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
