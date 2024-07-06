import axios from "axios";

import { BASEURL, GENERATETOKEN } from "../../constants/AppConstant";

const generateToken = async (data) => {
    console.log(data);
    try{
        const response = await axios.post(`${BASEURL}${GENERATETOKEN}`, {
            userId: data.userId,
            streamChat: data.streamChat.toString()
        });

        const res = response.data;
        console.log(res);

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


export default generateToken;