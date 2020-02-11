import React from 'react';
import PropTypes from 'prop-types';
import './TablaCoches.css';
import FilaCoches from '../FilaCoches/FilaCoche';

export default class TablaCoches extends React.Component {

    getNoHayElementosClass = () => {
        console.log(this.props.coches)
        if (this.props.coches.length === 0) {
            return "no-hay-ementos";
        } else {
            return "oculto"
        }
    }

    /******************************
     ********** Render ************
     ******************************/

    render() {

        return (
            <div>
                <table id="tabla-coches">
                    <thead>
                        <tr>
                            <th className="cabecera-tabla" >Matricula</th>
                            <th className="cabecera-tabla" >Marca</th>
                            <th className="cabecera-tabla" >Modelo</th>
                            <th className="cabecera-tabla" >Fecha matriculacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.coches.map((c) => <FilaCoches coche={c} key={c.matricula} />)}
                    </tbody>
                </table>
                <span className={this.getNoHayElementosClass()} > No se han encontrado elementos</span>
            </div>
        )
    }

}

/******************************
 ********* PropTypes **********
 ******************************/

TablaCoches.propTypes = {
    coches: PropTypes.array.isRequired,
}