import React from 'react'
import AuthComponent from '../../../components/Auth';
import SnackBar from '../../../components/SnackBar';
import { AuthUser, BASEURL, LOGIN } from '../../../constants/AppConstant';
import axios from 'axios';

export default function LoginScreen({ navigation }: { navigation: any }) {

    const [values, setValues] = React.useState({
        userName: 'noufalrahim',
        password: '123'
    })

    const [showSnackBar, setShowSnackBar] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [text, setText] = React.useState('Username or Email already exists')

    const searchBar = [
        {
            value: values.userName,
            handleChange: (text: string) => {
                setValues({ ...values, userName: text })
            },
            icon: 'account',
            placeholder: 'Username',
            keyboardType: 'default',
            secureTextEntry: false
        },
        {
            value: values.password,
            handleChange: (text: string) => {
                setValues({ ...values, password: text })
            },
            icon: 'lock',
            placeholder: 'Password',
            keyboardType: 'default',
            secureTextEntry: true
        }
    ]

    const handleLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`${BASEURL}${LOGIN}`, {
                userName: values.userName,
                password: values.password
            });

            const resp = response?.data;
            console.log(resp);
            

            if(resp.statusCode === 200){
                AuthUser._id = resp.data._id;
                AuthUser.name = resp.data.name;
                AuthUser.userName = resp.data.userName;
                AuthUser.email = resp.data.email;
                AuthUser.password = resp.data.password;
                AuthUser.firstName = resp.data.firstName;
                AuthUser.lastName = resp.data.lastName;
                AuthUser.bio = resp.data.bio;
                AuthUser.avatar.image = resp.data.profilePicture;
                AuthUser.avatar.icon = resp.data.firstName[0].toUpperCase() + resp.data.lastName[0].toUpperCase();
                navigation.navigate('Home');
            

            }
            else if(resp.statusCode === 404 || resp.statusCode === 500){
                setText(resp.message);
                setShowSnackBar(true);
            }

            setLoading(false);


        } catch (e) {
            console.log(e);
        }

    }



    return (
        <>
            <AuthComponent
                navigation={navigation}
                type='login'
                welcomeText='Welcome back!'
                buttonText='Login'
                onPress={() => { }}
                searchBar={searchBar}
                handleSubmit={handleLogin}
                loading={loading}
            />
            <SnackBar text={text} visible={showSnackBar} setVisible={setShowSnackBar} />
        </>
    )
}