import axios from "axios"
import { BASEURL, CREATEDATA } from "../../constants/AppConstant"

const createData = async (data) => {
    try {
        const response = await axios.post(`${BASEURL}${CREATEDATA}`, {
            room: data.room,
            isStoryAvailable: data.isStoryAvailable,
            senderUserName: data.senderUserName,
            firstName: data.firstName,
            lastName: data.lastName,
            userName: data.userName,
            profilePicture: data.profilePicture,
            authUser: data.authUser,
        });

        const res = response.data;

        const obj = {
            status: true,
            data: res.data,
            message: res.message
        };

        return obj;

    } catch (error) {
        const obj = {
            status: false,
            message: error.message,
            data: []
        };
        return obj;
    }

}

export default createData;