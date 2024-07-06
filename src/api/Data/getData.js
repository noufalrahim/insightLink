import axios from "axios"
import { BASEURL, GETDATA } from "../../constants/AppConstant"

const getData = async (authUser) => {
    try {
        const response = await axios.post(`${BASEURL}${GETDATA}`, {
            authUser: authUser
        });

        const res = response.data;

        if(res.statusCode === 200) {
            const obj = {
                status: true,
                data: res.data,
                message: res.message
            };
            return obj;
        } else {
            const obj = {
                status: false,
                message: res.message,
                data: []
            };
            return obj;
        }
        
    }
    catch (error) {
        const obj = {
            status: false,
            message: error.message,
            data: []
        };
        return obj;
    }

}

export default getData;