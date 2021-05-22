import React, {useEffect, useState, useContext} from 'react'
import Point from '../../components/point/point.component'
import '../pointspage/pointspage.styles.scss'
import {PointsContext} from '../../context/PointsContext'
import { LoginContext } from '../../context/LoginContext'


 const PointsPage =() => {
    const { points, SetSearch, SetSearchTipo} = useContext(PointsContext);
    const { loginUser, SetLoginUser} = useContext(LoginContext);
    
    
    const onClick_btnSearchPoints = (tipo) => {
        const valor =  document.getElementById('inputSearchPoints')
        SetSearchTipo(tipo)
        SetSearch(valor.value);
       }; 
       
        

    useEffect(() => {
        document.title = 'Points'
        console.log('pointtpageuserEffects', loginUser);
        const currentUser =  localStorage.getItem('loginUser')
           
    }, [points, loginUser])

    return (
        <div>
        {!localStorage.getItem('loginUser') ? window.location =  '/signin' : null}
             <h1>POINTS PAGE</h1>
            <h2>Bienvenido {loginUser}</h2>
            <div className="SearchPoint">Buscar 
                <input  id="inputSearchPoints"></input>
                <button className="btn" id="btnSearchPoints" onClick= {() => onClick_btnSearchPoints('filter')} >Filter</button>
                <button className="btn" id="btnFindPoints" onClick= {() => onClick_btnSearchPoints('find')} >Find</button>
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

export default PointsPage;
