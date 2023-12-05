import { ScrollView } from "react-native";
import ChatBox from "../Components/ChatBox/ChatBox";
import { MessageArray } from "../Constants/MessageArray";
import { useState } from "react";
function Favourites(){
    const [messages, setMessages] = useState(MessageArray);
    return(
        <ScrollView>
        {messages.map((message) => {
            if(message.reciever === "noufal__rahim"){
                return(
                    <ChatBox mode={"chat"} id={message.id} data = {message} key={message.id} name={message.senderName} time={message.time} lastMsg={message.message} image={message.image}/>
                )
            }
        })}
        </ScrollView>
    )
}

export default Favourites;