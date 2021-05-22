import React, { createContext, useState, useEffect } from "react";
import {ApiGetRooms} from './../clases/constantes'

export const RoomsContext = createContext();


const RoomsProvider = ({children}) => {
    const [rooms, SetRooms] = useState([]);
    const [search, SetSearch] = useState('');
    const [roomID, SetRoomId] = useState([]);
    const [chatList, SetChatList] = useState([]);
  const [cambio, SetCambio] = useState('');

    useEffect(() => getRooms(), [search, roomID, cambio]);

     const getRooms = () => {
        console.log('EJECUTA getRooms');

        const PuntoID = localStorage.getItem('PuntoID');
        if(!PuntoID){
            window.location = '/points';
        }
        fetch(ApiGetRooms('', true, PuntoID))
          .then((res) => res.json())
          .then((data) => {
            if(!!search){
                data = data.filter((item) => item.Nombre.toUpperCase().includes(search.toString().toUpperCase()));
            }
            SetRooms(data);
            console.log('fetch', ApiGetRooms('', true, PuntoID))
            console.log('data', data)
          })
          .catch((err) => console.log(err));
      };
         
       
      return (
        <RoomsContext.Provider value={{ rooms, SetRooms, roomID, SetRoomId , 
                                        chatList, SetChatList, SetSearch, cambio, SetCambio}}>
            {children}
        </RoomsContext.Provider>
      );
};


export default  RoomsProvider;

