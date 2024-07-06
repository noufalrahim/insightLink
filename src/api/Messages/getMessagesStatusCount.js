import axios from 'axios';
import { BASEURL, GETMESSAGESSTATUSCOUNT } from '../../constants/AppConstant';

const getMessagesStatusCount = async (data) => {
    try{
        const response = await axios.post(`${BASEURL}${GETMESSAGESSTATUSCOUNT}`, {
            sendByUserName: data.sendByUserName,
            receivedByUserName: data.receivedByUserName
        });


        const res = response.data;

        const obj = {
            status: false,
            data: res.data[0]["COUNT(*)"],
            message: res.message
        };

        return obj;
    }catch(error){
        console.log(error);
        const obj = {
            status: false,
            message: error.message,
            data: []
        };
        return obj;
    }
}

export default getMessagesStatusCount;