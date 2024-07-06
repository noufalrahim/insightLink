import axios from "axios"
import { BASEURL, CREATEMESSAGE } from "../../constants/AppConstant"

const createMessage = async (messageData) => {
    try{
        
        const response = await axios.post(`${BASEURL}${CREATEMESSAGE}`, {
            _idMessage: messageData._idMessage,
            text: messageData.text,
            createdAt: messageData.createdAt,
            sendByUserName: messageData.sendByUserName,
            receivedByUserName: messageData.receivedByUserName,
            nameOfSender: messageData.nameOfSender,
            imageOfSender: messageData.imageOfSender,
            iconOfSender: messageData.iconOfSender
        });

        const res = response.data;

        const obj = {
            status: true,
            data: res.data,
            message: res.message
        };

        return obj;

    }catch(error){
        const obj = {
            status: false,
            message: error.message,
            data: []
        };
        return obj;
    }
}


export default createMessage;