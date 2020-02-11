import React from 'react';
import TablaCoches from '../TablaCoches/TablaCoches';
import PaginacionTablaCoches from '../PaginacionTablaCoches/PaginacionTablaCoches';
import ElementosPorPagina from '../ElementosPorPagina/ElementosPorPagina';
import FiltroCoches from '../FiltroCoches/FiltroCoches';
import TotalesTablaCoches from '../TotalesTablaCoches/TotalesTablaCoches';

export default class ListadoCoches extends React.Component {

  /******************************
   ********** Estados ***********
   ******************************/

  state = {
    coches: [],
    page: {},
    links: {},
    fechaInicio: undefined,
    fechaFin: undefined
  }

  /******************************
   ****** ComponentDidMount *****
   ******************************/

  async componentDidMount() {
    // Se inicializa la tabla con 10 elementos y la pagina 0
    this.actualizarTablaCoches(10, 0, this.state.fechaInicio, this.state.fechaFin);

  }

  /******************************
   **** Fucniones privadas ******
   ******************************/

  async actualizarTablaCoches(elementosPorPaginaNuevo, numeroPaginaNuevo, fechaInicio, fechaFin) {
    var url;
    if (fechaInicio === undefined && fechaFin === undefined) {
      url = "http://localhost:8081/api/coche?page=" + numeroPaginaNuevo + "&size=" + elementosPorPaginaNuevo;
    } else {
      url = "http://localhost:8081/api/coche/findByFechaMatriculacionBetween?fechaInicio=" + fechaInicio + "&fechaFin=" + fechaFin + "&page=" + numeroPaginaNuevo + "&size=" + elementosPorPaginaNuevo;
    }
    this.obtenerDatosRest(url);
  }

  async obtenerDatosRest(url) {
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
    this.setState({
      coches: response.page.totalElements === 0 ? [] : response._embedded.coches,
      page: response.page,
      links: response._links
    })
  }

  /******************************
   *** Fucniones propiedades ****
   ******************************/

  quitarFiltro = () => {
    this.setState({
      fechaInicio: undefined,
      fechaFin: undefined
    })
    this.actualizarTablaCoches(this.state.page.size, 0, undefined, undefined);
  }

  aplicarFiltro = (fechaInicio, fechaFin) => {
    this.setState({
      fechaInicio: fechaInicio,
      fechaFin: fechaFin
    })
    this.actualizarTablaCoches(this.state.page.size, 0, fechaInicio, fechaFin);
  }

  cambiarElementosPorPagina = (elementosPorPaginaNuevo) => {
    // Se actualiza la tabla con los nuevos elementos por pagina, se pone la pagina 0
    this.actualizarTablaCoches(elementosPorPaginaNuevo, 0, this.state.fechaInicio, this.state.fechaFin);
  }

  clikBotonesPaginacion = (id) => {
    this.obtenerDatosRest(this.state.links[id].href);
  }

  /******************************
   ********** Render ************
   ******************************/

  render() {
    return (
      <div>
        <FiltroCoches funcionAplicarFiltro={this.aplicarFiltro} funcionQuitarFiltro={this.quitarFiltro} />
        <ElementosPorPagina funcionCambiarElementosPorPagina={this.cambiarElementosPorPagina} />
        <TablaCoches coches={this.state.coches} />
        <TotalesTablaCoches totales={this.state.page} />
        <PaginacionTablaCoches links={this.state.links} funcionClikBotonesPaginacion={this.clikBotonesPaginacion} />
      </div>
    )
  }

}
