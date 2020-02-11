import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import "./FiltroCoches.css"

export default class FiltroCoches extends React.Component {

    /******************************
     ********** Stados ************
     ******************************/

    state = {
        mostrarFiltroForm: false,
        mostrarQuitarFiltro: false,
        form: {
            fechaInicio: {
                value: Moment(new Date()).format('YYYY-MM-DD'),
                isValid: true,
                errorMessage: "",
            }, fechaFin: {
                value: Moment(new Date()).format('YYYY-MM-DD'),
                isValid: true,
                errorMessage: ""
            }
        }
    }

    /******************************
     ********** Handlers **********
     ******************************/

    handlerBtnFiltro = () => {
        this.setState({
            mostrarFiltroForm: true
        })
    }

    handlerBtnQuitarFiltro = () => {
        this.props.funcionQuitarFiltro();
        this.setState({
            mostrarFiltroForm: false,
            mostrarQuitarFiltro: false
        })
    }

    handlerBtnCerrarFiltro = () => {
        this.setState({
            mostrarFiltroForm: false
        })
    }

    handlerBtnAplicarFiltro = () => {
        if (this.state.form.fechaInicio.isValid && this.state.form.fechaFin.isValid) {
            this.props.funcionAplicarFiltro(this.state.form.fechaInicio.value, this.state.form.fechaFin.value);
            this.setState({
                mostrarFiltroForm: false,
                mostrarQuitarFiltro: true
            })
        }
    }

    /******************************
     ********** getClass **********
     ******************************/

    getmostrarFiltroFormClass = () => {
        if (this.state.mostrarFiltroForm === false) {
            return "oculto";
        } else {
            return "";
        }
    }

    getmostrarQuitarFiltroClass = () => {
        if (this.state.mostrarQuitarFiltro === false) {
            return "oculto";
        } else {
            return "";
        }
    }

    getErrorsClass = (nombre) => {
        if (this.state.form[nombre].isValid === false) {
            return "error-input";
        } else {
            return "";
        }
    }

    /******************************
     ***** Funciones privadas *****
     ******************************/

    validarFecha = (event) => {

        var inicio;
        var fin;

        if (event.target.value !== "") {

            if (event.target.name === "fechaInicio") {
                inicio = new Date(event.target.value);
                fin = new Date(this.state.form.fechaFin.value);
            } else if (event.target.name === "fechaFin") {
                inicio = new Date(this.state.form.fechaInicio.value);
                fin = new Date(event.target.value);
            }

            var isErrorFechas = false;
            if (inicio > fin) {
                isErrorFechas = true;
            }

            this.setState({
                form: {
                    fechaInicio: {
                        value: Moment(new Date(inicio)).format('YYYY-MM-DD'),
                        isValid: isErrorFechas ? false : true,
                        errorMessage: isErrorFechas ? "La fecha de inicio tiene que ser menor a la fecha de fin" : "",
                    }, fechaFin: {
                        value: Moment(new Date(fin)).format('YYYY-MM-DD'),
                        isValid: isErrorFechas ? false : true,
                        errorMessage: isErrorFechas ? "La fecha de inicio tiene que ser menor a la fecha de fin" : ""
                    }
                }
            })

        }

    }

    /******************************
     ********** Render ************
     ******************************/

    render() {
        return (
            <div id="filtro-coches">

                <button id="btnQuitarFiltro" type="button" onClick={this.handlerBtnQuitarFiltro} className={this.getmostrarQuitarFiltroClass()} >Quitar filtro</button>
                <button id="btnFiltro" type="button" onClick={this.handlerBtnFiltro}>Filtrar</button>

                <div id="filtroForm" className={"center " + this.getmostrarFiltroFormClass()}>

                    <div className="row-filtro" >
                        <label> Fecha inicio </label>
                        <input name="fechaInicio" type="date"
                            onChange={this.validarFecha}
                            value={this.state.form.fechaInicio.value}
                            className={"input-filtro " + this.getErrorsClass("fechaInicio")}
                        />
                        <span className="error-message" >{this.state.form.fechaInicio.errorMessage}</span>
                    </div>

                    <div className="row-filtro" >
                        <label> Fecha fin </label>
                        <input name="fechaFin" type="date"
                            onChange={this.validarFecha}
                            value={this.state.form.fechaFin.value}
                            className={"input-filtro " + this.getErrorsClass("fechaFin")} />
                        <span className="error-message" >{this.state.form.fechaFin.errorMessage}</span>
                    </div>

                    <div className="botones-filtro-form">
                        <button id="btnAplicarFiltro" type="button" onClick={this.handlerBtnAplicarFiltro}>Aplicar filtro</button>
                        <button id="btnCerrarFiltro" type="button" onClick={this.handlerBtnCerrarFiltro}>Cancelar</button>
                    </div>

                </div>

            </div>
        )
    }

}

/******************************
 ********* PropTypes **********
 ******************************/

FiltroCoches.propTypes = {
    funcionAplicarFiltro: PropTypes.func.isRequired,
    funcionQuitarFiltro: PropTypes.func.isRequired
}