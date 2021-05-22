import React, {useEffect, useContext} from 'react'
import Room from '../../components/room/room.component'
import Chat from '../../components/chat/chat.component'
import '../roomspage/roomspage.styles.scss'
import { RoomsContext } from '../../context/RoomsContext'

const RoomsPage = () => {
    // const API_URL = 'http://localhost:51688/api/';
    // const [rooms, Setrooms] = useState([]);
    // const [roomID, Setroomid] = useState([]);
    // const [chatList, setChatList] = useState([]);
    const { rooms, SetRooms } = useContext( RoomsContext);
    const { roomID, SetRoomId } = useContext( RoomsContext);
    const { chatList, SetChatList } = useContext( RoomsContext );
    const { SetSearch } = useContext(RoomsContext);
    
    const onClick_btnSearchRooms = () => {
        const valor =  document.getElementById('inputSearchRooms')
        SetSearch(valor.value);
       }; 

    const getChat = (SalaID) =>{
        SetRoomId(SalaID);
        let newChat = rooms.filter((room) => {
            return room.SalaID === SalaID
        });
        SetChatList(newChat[0].Chats);
        console.log('SalaID', SalaID);
        console.log('ChatList', newChat[0].Chats);
       
    }

 

    useEffect(() => {
        console.log('Llego a RoomsPage ')
        document.title = 'Rooms'
    
      }, [])
    
    return (
        <div>
            <h1>Rooms Page</h1>
            
            <div className='container-rooms'>
            <div className='left'>
            <h1>Salas</h1>
            <div className="SearchRoom">Buscar 
                <input  id="inputSearchRooms"></input>
                <button className="btn" id="btnSearchRooms" onClick= {() => onClick_btnSearchRooms()} >Buscar</button>
            </div>
            {
                rooms.map(item => (
                       <Room key={item.SalaID} myRoom={item} getChat={getChat}></Room>
                    ))
                
            }
            </div>
            <div className='right'>
            <h1>Chat</h1>
                <Chat
                    myRoomID ={roomID}
                    myChat ={chatList}
                    getChat={getChat}>
                </Chat>
            </div>
          </div>
        </div>
    )
}
export default RoomsPage;
