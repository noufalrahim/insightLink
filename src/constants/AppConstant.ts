
//API URLS
// export const BASEURL = 'http://localhost:3001';
// export const BASEURL = 'http://10.0.2.2:3001';
export const BASEURL = 'http://172.20.10.2:3001';
export const LOGIN = '/login';
export const GETUSERS = '/getUsers';
export const FINDUSER = '/findUser';
export const CHECKUSER = '/user/checkUser';
export const CREATEUSER = '/user/createUser';
export const MOREINFO = '/user/moreInfo';
export const GETDATA = '/data/getData';
export const CREATEDATA = '/data/createData';
export const CREATEMESSAGE = '/messages/createMessage';
export const UPDATESTATUS= '/messages/updateMessageStatus';
export const GETMESSAGESSTATUSCOUNT = '/messages/getMessagesStatusCount';
export const GENERATETOKEN = '/token/generateToken';

//CALL PARAMS
export const CALLID = 'rudjVAVjBpi6';
export const USERIDEXAMPLE = 'Kit_Fisto';

//COLORS
export const COLORS = {
  primary: '#6750A4',
  secondary: '#f3edf6',
  black: '#000000',
  white: '#ffffff',
  light:'#e8e8e8',
  lightGray: '#f5f5f6',
  gray: '#BEC1D2',
  darkgray: '#898C95',
  dark: '#1E1F20',
  transparent: 'transparent',
  
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
  transparentBlack9: 'rgba(0, 0, 0, 0.9)',
  
}

//DATA
export const AuthUser = {
  _id: '',
  name: '',
  userName: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  bio: '',
  avatar: {
    image: '',
    icon: ''
  }
}

export const Users = [
  {
    _id: 'nivinprasad',
    name: 'Nivin Prasad',
    firstName: 'Nivin',
    lastName: 'Prasad',
    bio: 'Iam a Developer',
    userName: 'nivinprasad',
    email: 'nivin@gmail.com',
    password: '123',
    avatar: {
      image: '',
      icon: 'NP'
    }
  },
  {
    _id: 'noufalrahim',
    name: 'Noufal Rahim',
    firstName: 'Noufal',
    lastName: 'Rahim',
    bio: 'Iam a Developer',
    userName: 'noufalrahim',
    email: 'noufalrahim@gmail.com',
    password: '123',
    avatar: {
      image: '',
      icon: 'NR'
    }
  },
  {
    _id: 'prafulharikumar',
    name: 'Praful Harikumar',
    firstName: 'Praful',
    lastName: 'Harikumar',
    bio: 'Iam a Developer',
    userName: 'prafulharikumar',
    email: 'p@h.com',
    password: '123',
    avatar: {
      image: '',
      icon: 'PH'
    }
  }
]

export const Data = [
  {
    authUser: 'noufalrahim',
    room: 'noufalandnivin',
    sender: {
      firstName: 'Nivin',
      lastName: 'Prasad',
      userName: 'nivinprasad',
      avatar: {
        image: '',
        icon: 'NP'
      }
    },
    isStoryAvailable: true,
    stories: [{
      _id: '1eff3m-0ij3_pqxszYM',
      totalTime: 30,
      storyObj:
      {
        _id: '1eff3m-0ij3_pqxszYM',
        image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
        createdAt: new Date()
      }

    }],
    noOfStories: 1,
    messagesArray: [
      {
        _id: '1eff3m-0ij3_pqxszYM',
        text: 'Hi Iam Nivin Prasad!',
        createdAt: new Date(),
        seen: false,
        user: {
          _id: 'nivinprasad',
          name: 'Nivin Prasad',
          avatar: '',
        },
      }
    ],
    notSeenMessages: 0
  },
  {
    authUser: 'noufalrahim',
    room: 'noufalandrohith',
    sender: {
      firstName: 'Rohith',
      lastName: 'Ramdas',
      userName: 'rohithramdas',
      avatar: {
        image: '',
        icon: 'RR'
      },
    },
    isStoryAvailable: true,
    stories: [{
      _id: '1eff3m-0ij3_pqxszYM',
      totalTime: 30,
      storyObj:
      {
        _id: '1eff3m-0ij3_pqxszYM',
        image: 'https://vistapointe.net/images/field-9.jpg',
        createdAt: new Date()
      }

    },
    {
      _id: '1eff3m-0ij3_pqxszYM',
      totalTime: 30,
      storyObj:
      {
        _id: '1eff3m-0ij3_pqxszYM',
        image: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
        createdAt: new Date()
      }

    }
    ],
    noOfStories: 1,
    messagesArray: [
      {
        _id: '1eff3m-0ij3MXi_pqxszYM',
        text: 'Hi Iam Rohith Ramdas!',
        createdAt: new Date(),
        seen: false,
        user: {
          _id: 'rohitramdas',
          name: 'Rohith Ramdas',
          avatar: '',
        },
      }
    ],
    notSeenMessages: 0
  },
  {
    authUser: 'noufalrahim',
    room: 'noufalandpraful',
    sender: {
      firstName: 'Praful',
      lastName: 'Harikumar',
      userName: 'prafulharikumar',
      avatar: {
        image: '',
        icon: 'PH'
      },
    },
    isStoryAvailable: true,
    stories: [{
      _id: '1eff3m-0ij3_pqxsM',
      totalTime: 30,
      storyObj:
      {
        _id: '1eff3m-0ij3_pszYM',
        image: 'https://vistapointe.net/images/field-9.jpg',
        createdAt: new Date()
      }

    }],
    noOfStories: 1,
    messagesArray: [
      {
        _id: '1eff3m-0ij3MXi_pqxsdsszYM',
        text: 'Hi Iam Praful Harikumar!',
        seen: false,
        createdAt: new Date(),
        user: {
          _id: 'prafulharikumar',
          name: 'Praful Harikumar',
          avatar: '',
        },
      }
    ],
    notSeenMessages: 0
  }
]

export const GroupsData = [
  {
    room: 'group1',
    groupName: 'Mega Boys',
    groupAvatar: {
      image: '',
      icon: 'MB'
    },
    groupMembers: [
      {
        _id: 'nivinprasad',
        firstName: 'Nivin',
        lastName: 'Prasad',
        userName: 'nivinprasad',
        avatar: {
          image: '',
          icon: 'NP'
        }
      },
      {
        _id: 'noufalrahim',
        firstName: 'Noufal',
        lastName: 'Rahim',
        userName: 'noufalrahim',
        avatar: {
          image: '',
          icon: 'NR'
        }
      },
      {
        _id: 'rohitramdas',
        firstName: 'Rohith',
        lastName: 'Ramdas',
        userName: 'rohithramdas',
        avatar: {
          image: '',
          icon: 'RR'
        }
      }
    ],
    messagesArray: [
      {
        _id: '1eff3m-0ij3_pqxszYM',
        text: 'Hi Iam Nivin Prasad!',
        createdAt: new Date(),
        seen: false,
        user: {
          _id: 'nivinprasad',
          name: 'Nivin Prasad',
          avatar: '',
        },
      },
      {
        _id: '1eff3m-0ij3_pqxszYM',
        text: 'Hi Iam Rohith Ramdas!',
        createdAt: new Date(),
        seen: false,
        user: {
          _id: 'rohitramdas',
          name: 'Rohith Ramdas',
          avatar: '',
        },
      },
      {
        _id: '1eff3m-0ij3_pqxszYM',
        text: 'Hi Iam Noufal Rahim!',
        createdAt: new Date(),
        seen: false,
        user: {
          _id: 'noufalrahim',
          name: 'Noufal Rahim',
          avatar: '',
        },
      }
    ]
  }
]