import React, {Component} from 'react';
import '../App.css';

class TestComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1> Pruebas </h1>
                </header>
                <nav>
                    <ul className={"btn-secondary-container"}>
                        <li className={"btn-secondary"}><a href="/"> Volver al menú principal </a></li>
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
                                            <button className="btn-secondary"> Novato </button>
                                        </a>
                                    </td>
                                    <td>
                                        <a className="btn-secondary-container" href="/test/medio">
                                            <button className="btn-secondary"> Intermedio </button>
                                        </a>
                                    </td>
                                    <td>
                                        <a className="btn-secondary-container" href="/test/alto">
                                            <button className="btn-secondary"> Avanzado </button>
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
