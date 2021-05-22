import React from 'react'
import './point.styles.scss'

const Point = (props) => {
  const {PuntoID, Nombre, Localidad, Tipo ,Clasificacion, Region} = props.myPoint;
  const GoRooms = () =>{
      console.log('a Room Page');
      localStorage.setItem('PuntoID', PuntoID);
	  window.location = '/rooms';
  }
    return (
        <div className='point-item'>
                 <h2>{Nombre}</h2>
                <h4>{Region} - {Localidad}</h4>
                <span>Tipo: {Tipo}</span> <br/>
                <span>Clasificación: {Clasificacion}</span><br/>
                <div className='button-align'>
                    <button 
                        className='btn border2 border222' 
                        onClick={() => GoRooms()}>Ver Salas
                    </button>
                </div>
        </div>
    );
    
}


export default Point;
