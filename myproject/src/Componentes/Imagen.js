import React, { Component } from 'react';

const Imagen = (props) => {


    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-4 col-md-3 mb-4">
              <div className="card">
                  <img src={previewURL} alt={tags} classsName="card-img-top" />
                  <div className="card-body">
                        <p className="card-text">{likes}Me gusta</p>
                        <p className="card-text">{views} Vistas</p>

                        <a href={largeImageURL} target="_blank" classsName="btn btn-danger btn-block">Ver Imagen</a>
                  </div>
              </div>
        </div>
    )
    
}

export default Imagen