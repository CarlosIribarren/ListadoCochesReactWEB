
import React from 'react';
import PropTypes from 'prop-types';
import './ElementosPorPagina.css'

export default class ElementosPorPagina extends React.Component {

/******************************
 ********* Handlers ***********
 ******************************/

    handlerCambioElementosPorPagina = (e) => {
        this.props.funcionCambiarElementosPorPagina(e.target.value);
    }

/******************************
 ********** Render ************
 ******************************/

    render() {
        return (
            <div id="elementosPorPagina" >
                <select onChange={this.handlerCambioElementosPorPagina} >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
        )
    }

}


/******************************
 ********* PropTypes **********
 ******************************/

ElementosPorPagina.propTypes = {
    funcionCambiarElementosPorPagina: PropTypes.func.isRequired
}
