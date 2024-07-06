import React from 'react';
import { AuthUser, Data, Users } from '../constants/AppConstant';
import { GroupsData } from '../constants/AppConstant';
import getData from '../api/Data/getData';
import getMessagesStatusCount from '../api/Messages/getMessagesStatusCount';

const AppContext = React.createContext({
    peopleData: [{
        authUser: '',
        room: '',
        sender: {
            firstName: '',
            lastName: '',
            userName: '',
            avatar: {
                image: '',
                icon: '',
            }
        },
        isStoryAvailable: true,
        stories: [{
            _id: '',
            totalTime: 0,
            storyObj: {
                _id: '',
                image: '',
                createdAt: new Date(),
            }
        }],
        noOfStories: 0,
        messagesArray: [{
            _id: '',
            text: '',
            createdAt: new Date(),
            user: {
                _id: '',
                name: '',
                avatar: '',
            },
        }],
        notSeenMessages: 0,
    }],
    groupsData: [{
        room: '',
        groupName: '',
        groupAvatar: {
            image: '',
            icon: '',
        },
        groupMembers: [{
            _id: '',
            firstName: '',
            lastName: '',
            userName: '',
            avatar: {
                image: '',
                icon: '',
            }
        }],
        messagesArray: [{
            _id: '',
            text: '',
            seen: false,
            createdAt: new Date(),
            user: {
                _id: '',
                name: '',
                avatar: '',
            },
        }]
    }],
    usersData: [
        {
            _id: '',
            firstName: '',
            lastName: '',
            userName: '',
            name: '',
            bio: '',
            email: '',
            password: '',
            avatar: {
                image: '',
                icon: '',
            }
        }
    ],
    isAuthorized: false,
    AuthUser: {
        _id: '',
        firstName: '',
        lastName: '',
        userName: '',
        name: '',
        bio: '',
        email: '',
        password: '',
        avatar: {
            image: '',
            icon: '',
        }
    },
    noOfUnseenMessages: 0,
    setData: (data: any) => {},
});

export const AppProvider = ({ children }: any) => {

    const [data, setData] = React.useState(Data);
    const [messagesStatusCount, setMessagesStatusCount] = React.useState(0);
    const authUser = 'noufalrahim';

    React.useEffect(() => {
        getData(authUser).then((res) => {
            console.log(res);
            if(res.status){
                setData(res.data);
            }
        });
    }, []);
   

    return (

        <AppContext.Provider
            value={{
                peopleData: data,
                groupsData: GroupsData,
                setData,
                usersData: Users,
                isAuthorized: false,
                AuthUser: AuthUser,
                noOfUnseenMessages: messagesStatusCount,

            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => React.useContext(AppContext);