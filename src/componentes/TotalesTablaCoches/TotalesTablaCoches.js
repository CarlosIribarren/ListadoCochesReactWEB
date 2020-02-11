import React from 'react';
import PropTypes from 'prop-types';

export default class TotalesTablaCoches extends React.Component {

    /******************************
     ********** Render ************
     ******************************/

    render() {

        return (
            <div>
                <p>Mostrando registros del {this.props.totales.size * this.props.totales.number} al {this.props.totales.size * (this.props.totales.number + 1)} de un total de {this.props.totales.totalElements} registros </p>
                <p>Mostrando la pagina {this.props.totales.number + 1}  de {this.props.totales.totalPages} </p>
            </div>
        )
    }

}

/******************************
 ********* PropTypes **********
 ******************************/

TotalesTablaCoches.propTypes = {
    totales: PropTypes.array.isRequired,
}