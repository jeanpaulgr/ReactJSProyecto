import React, {useEffect, useContext} from 'react';
import Point from '../../components/point/point.component'
import '../pointspage/pointspage.styles.scss'
import {PointsContext} from '../../context/PointsContext'

//ESTO CAMBIARA POR HOMEPAGE
const HomePage = () => {

    const { points, SetSearch} = useContext(PointsContext);
    
    
    const onClick_btnSearchPoints = () => {
        const valor =  document.getElementById('inputSearchPoints')
        SetSearch(valor.value);
       }; 
        

    useEffect(() => {
        document.title = 'Points'
    }, [points])

    return (
        <div>
            <h1>HOME PAGE</h1>
            <div className="SearchPoint">Buscar 
                <input  id="inputSearchPoints"></input>
                <button className="btn" id="btnSearchPoints" onClick= {() => onClick_btnSearchPoints()} >Buscar</button>
            </div>
            <div className='container'>
            {
                points.map(item => (
                       <Point key={item.PuntoID} myPoint={item}></Point>
                    ))
                
            }
            </div>
        </div>
    )
}

export default HomePage