import React, {Component} from 'react';

class HomeComponent extends Component {
    
    render() {
        return (
        <div>
            <header>
                <div>
                    <h1>PyTest</h1>
                    <h2 style={{color: "#E2DADB"}}> Pon a prueba tus conocimientos de Python 3 de manera fácil y gratis</h2>
                </div>
            </header>
            <nav>
                <ul>
                    <li><a href="/test"> Rendir pruebas</a></li>
                    <li><a href="/preguntas"> Ver preguntas </a></li>
                </ul>
            </nav>
            <main>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <th>
                                <a><img src="https://i.ibb.co/rtfcmtH/Python-logo-notext-svg.png" alt="Python-logo"/> </a>
                            </th>
                            <th>
                                <h2>¡Bienvenidos!</h2>
                                <p> En esta pagina web podrás poner a prueba tus conocmientos de Python 3 por medio de pruebas de distintas dificultades!, también podrás agregar preguntas que consideres pertinentes según la dificultad! </p>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>
                <p> Derechos reservados Pytest 2023 </p>
            </footer>
        </div>
        );
    }
}

export default HomeComponent;