import React from 'react';
import PropTypes from 'prop-types';
import "./PaginacionTablaCoches.css"

export default class PaginacionTablaCoches extends React.Component {

    handlerClikBotonesPaginacion = (e) => {
        this.props.funcionClikBotonesPaginacion(e.target.id);
    }

    DesactivarBotonPaginacion = (link) => {
        return  link ? false : true 
    }

    StyleBotonPaginacion(link){
        return{
            cursor : link ? "pointer" : "not-allowed"
        }
    }

    /******************************
     ********** Render ************
     ******************************/

    render() {

        return (
            <div id="botones-paginacion">

                <button id="last" type="button" className="boton-paginacion"
                    disabled={this.DesactivarBotonPaginacion(this.props.links.last)}
                    style={this.StyleBotonPaginacion(this.props.links.last)}
                    onClick={this.handlerClikBotonesPaginacion} > 
                    Ultimo
                </button>

                <button id="next" type="button" className="boton-paginacion"
                    disabled={this.DesactivarBotonPaginacion(this.props.links.next)}
                    style={this.StyleBotonPaginacion(this.props.links.next)}
                    onClick={this.handlerClikBotonesPaginacion} > 
                    Siguiente
                </button>

                <button id="prev" type="button" className="boton-paginacion"
                    disabled={this.DesactivarBotonPaginacion(this.props.links.prev)}
                    style={this.StyleBotonPaginacion(this.props.links.prev)}
                    onClick={this.handlerClikBotonesPaginacion} > 
                    Anterior
                </button>

                <button id="first" type="button" className="boton-paginacion"
                    disabled={this.DesactivarBotonPaginacion(this.props.links.first)}
                    style={this.StyleBotonPaginacion(this.props.links.first)}
                    onClick={this.handlerClikBotonesPaginacion} > 
                    Primero
                </button>

            </div>
        )
    }

}

/******************************
 ********* PropTypes **********
 ******************************/

PaginacionTablaCoches.propTypes = {
    links: PropTypes.array.isRequired,
    funcionClikBotonesPaginacion: PropTypes.func.isRequired
}
