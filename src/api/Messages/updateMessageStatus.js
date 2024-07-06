import { BASEURL, UPDATESTATUS } from "../../constants/AppConstant"
import axios from "axios"

const updateMessageStatus = async (data) => {
    try{
        const response = await axios.post(`${BASEURL}${UPDATESTATUS}`, {
            seen: 1,
            sendByUserName: data.sendByUserName,
            receivedByUserName: data.receivedByUserName
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


export default updateMessageStatus;