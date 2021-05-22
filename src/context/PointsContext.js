import React, { createContext, useState, useEffect } from "react";
import {ApiGetPoints} from './../clases/constantes'

export const PointsContext = createContext();


const PointsProvider = ({children}) => {
    const [points, SetPoints] = useState([]);
    const [search, SetSearch] = useState('');
    const [searchTipo, SetSearchTipo] = useState('filter');
     
    useEffect(() => getPoints(), [search, searchTipo]);

     const getPoints = () => {
         console.log('llego a getPoints Context');
        fetch(ApiGetPoints('', true))
          .then((res) => res.json())
          .then((data) => {
              if(!!search){
                if(searchTipo === 'filter'){
                  data = data.filter((item) => item.Nombre.toUpperCase().includes(search.toString().toUpperCase()));
                  console.log('filter', data);
                }
                if(searchTipo === 'find'){
                  const finded = data.find((item) => item.Nombre.toUpperCase() === search.toString().toUpperCase());
                  if(finded){
                    data = data.filter((item) => item.PuntoID === finded.PuntoID);
                  
                  }else{
                    data = [];
                  }
                  console.log('find', finded);
                  console.log('find', data);

                }
                  
              }
              console.log('search', search);
           SetPoints(data);
            console.log('usereffect Context', data)
          })
          .catch((err) => console.log(err));
      };

     
         
       
      return (
        <PointsContext.Provider value={{ points, SetSearch, SetSearchTipo}}>
            {children}
        </PointsContext.Provider>
      );
};


export default  PointsProvider;

