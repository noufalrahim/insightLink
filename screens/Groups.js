import {ScrollView } from "react-native";
import ChatBox from "../Components/ChatBox/ChatBox";
import {GroupMessageArray} from "../Constants/MessageArray";
import { useState } from "react";
function Groups(){
    const [messages, setMessages] = useState(GroupMessageArray);
    return(
        <ScrollView>
        {/* {messages.map((message) => {
            if(message.reciever === "noufal__rahim"){
                return(
                    <ChatBox id={message.id} data = {message} key={message.id} name={message.name} time={message.time} lastMsg={message.message} image={message.image}/>
                )
            }
        })} */}

        {GroupMessageArray.map((message) => {
            return(
                <ChatBox mode={"group"} senderName={message.senderName} id={message.id} data = {message} key={message.id} name={message.groupName} time={message.time} lastMsg={message.message} image={message.image}/>
            )
        })}

        </ScrollView>
    )
}

export default Groups;