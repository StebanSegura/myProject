import React, { Component } from 'react';

class Buscador extends Component {
    
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
            e.preventDefault();
            const termino = this.busquedaRef.current.value

            this.props.datosBusqueda(termino);
        }

    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-12">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca Tu Imagen..."/>
                    </div>
                    <div className="form-group col-md-12">
                        <input type="submit" className="btn btn-lg btn-warning btn-block" value="Enviar"/>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;