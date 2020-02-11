import React from 'react';
import PropTypes from 'prop-types';

export default class FilaCoches extends React.Component {

/******************************
 ********** Render ************
 ******************************/

    render() {

        const cocheConstante = this.props.coche;

        return (
            <tr>
                <td>{cocheConstante.matricula}</td>
                <td>{cocheConstante.marca}</td>
                <td>{cocheConstante.modelo}</td>
                <td>{cocheConstante.fechaMatriculacion}</td>
            </tr>
        )
    }

}

/******************************
 ********* PropTypes **********
 ******************************/

// Especificar el tipo de dato object para la propiedad coche.
// Tambien se espeficica que es obligatorio
FilaCoches.propTypes = {
    coche: PropTypes.object.isRequired
}

 