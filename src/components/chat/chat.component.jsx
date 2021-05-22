import React, {useEffect, useState, useContext} from 'react'
import '../chat/chat.styles.scss'
import Message from '../message/message.component'
import {ApiPostChat, ApiGetChats} from './../../clases/constantes'
import { LoginContext } from '../../context/LoginContext'
import { RoomsContext } from '../../context/RoomsContext'

const Chat = (props) => {
    const [chat, SetChat] = useState([])
    const {loginUser} = useContext(LoginContext);
    const {cambio, SetCambio} = useContext(RoomsContext);
    const {roomID} = useContext(RoomsContext);
    console.log('chatComponent', props);
    useEffect(() => {
        // SetChat(props.myChat);
        console.log('useEffect SalaID', roomID)
        GoGetChat(roomID)
    }, [roomID])

    const GoGetChat = (Sala) =>{
        if(Sala == ""){
            console.log('Sala.length == 0')
            return
        }
        GetChats(Sala)
        console.log('GoGetChat', Sala)
    }
    setInterval(GoGetChat(roomID),15000);

    const GoSend =(Sala) =>{
        //usar API CHAT para agregar valor de campo textarea
    let textEnviar = document.getElementById('textEnviar')
    console.log('textEnviar', textEnviar.value)
    console.log('Sala Enviar', Sala)
    SendChat(Sala, loginUser, textEnviar.value) 
    
    textEnviar.value = ''
    }
    async function SendChat(Sala, Usuario, Mensaje, TipoMensaje = 'Texto', Url = ''){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                ChatID: -1,
                Sala: Sala,
                Usuario: Usuario,
                Mensaje: Mensaje,
                TipoMensaje: TipoMensaje,
                Url: Url
            })
        };
        
        const response = await fetch(ApiPostChat(), requestOptions);
        const data = await response.json(); 
        console.log('data', (data))
        if(data){
            return 'OK'
        }else{
            console.log('Mensaje Error')
            return 'Error';
        }
      }

      async function GetChats(Sala){
          console.log('Ejecuta ', Sala.toString())
        console.log('EJECUTA getRooms', ApiGetChats(Sala.toString()));
        const PuntoID = localStorage.getItem('PuntoID');
        if(!PuntoID){
            window.location = '/points';
        }
        fetch(ApiGetChats(Sala))
          .then((res) => res.json())
          .then((data) => {
              if(document.getElementById('roomId').innerText == Sala){
                console.log('se cargo')
                SetChat(data)
              }
            console.log('Get Chats OK data', data)
          })
          .catch((err) => console.log(err));
      };
    return (
        <div>
            CHAT DE SALA: <b id="roomId">{roomID}</b>
            <div className='container-chat'>
            <div id="divu" className='body-chat'>
                {
                   chat.map(mensaje =>(
                    <Message 
                        key={mensaje.ChatID} 
                        myMensaje={mensaje} >
                    </Message>    
                   ))
                }
            </div>
            <div className='body-message'>
                <textarea id="textEnviar" class="inputText" rows="4"></textarea>
                <button 
                        className='btn border2 border222 inputBtn' 
                        onClick={() => GoSend(roomID)}>Enviar
                    </button>
            </div>
            </div>
        </div>
    )
}

export default Chat;


