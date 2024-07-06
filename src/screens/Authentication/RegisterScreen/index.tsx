import { View, Text, Keyboard } from 'react-native'
import React from 'react'
import AuthComponent from '../../../components/Auth'
import { BASEURL, CHECKUSER, CREATEUSER, GETUSERS, Users } from '../../../constants/AppConstant'
import SnackBar from '../../../components/SnackBar'
import axios from 'axios'
import Loader from '../../../components/Loader'

export default function RegisterScreen({ navigation }: { navigation: any }) {

    const [values, setValues] = React.useState({
        username: '',
        email: '',
        password: ''
    })

    const [showSnackBar, setShowSnackBar] = React.useState(false);
    const [text, setText] = React.useState('Username or Email already exists');
    const [usersData, setUsersData] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(false);

    const searchBar = [
        {
            value: values.username,
            handleChange: (text: string) => {
                setValues({ ...values, username: text })
            },
            icon: 'account',
            placeholder: 'Username',
            KeyboardType: 'default',
            secureTextEntry: false
        },
        {
            value: values.email,
            handleChange: (text: string) => {
                setValues({ ...values, email: text })
            },
            icon: 'email',
            placeholder: 'Email',
            keyboardType: 'email-address',
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

    const handleRegister = async () => {
        const data = {
            _id: values.username,
            userName: values.username,
            email: values.email,
            password: values.password,
            avatar: {
                image: '',
                icon: ''
            },
            firstName: '',
            lastName: '',
            name: '',
            bio: ''
        }

        let isUserFound = false;

        if (!values.username || !values.email || !values.password) {
            setText('Please fill all the fields');
            setShowSnackBar(true);
            return;
        }

        try {
            const response = await axios.post(`${BASEURL}${CHECKUSER}`, {
                userName: values.username,
                email: values.email
            });
            const resp = response.data;
            console.log(resp);
            if (resp.statusCode === 404 || resp.statusCode === 500) {
                setText(resp.message);
                setShowSnackBar(true);
            }
            else if (resp.statusCode === 200) {
                setLoading(true);
                const response = await axios.post(`${BASEURL}${CREATEUSER}`, {
                    userName: values.username,
                    email: values.email,
                    password: values.password
                });

                const resp = response.data;
                if (resp.statusCode === 200) {
                    setText('User Created');
                    setShowSnackBar(true);

                    navigation.navigate('MoreInfo', {
                        userName: values.username,
                        email: values.email,
                        password: values.password
                    });
                }
                else if(resp.statusCode === 404 || resp.statusCode === 500){
                    setText(resp.message);
                    setShowSnackBar(true);
                }
                setLoading(false);

                // if(resp.statusCode === 200){
                //     console.log(resp.data);
                //     Users.push(data);

                // }
                // else if(resp.statusCode === 404){
                //     setText(resp.message);
                //     setShowSnackBar(true);
                // }

            }
        } catch (e) {
            console.log(e)
        }

        usersData.find((user: any) => {
            if (user.userName === data.userName || user.email === data.email) {
                setText('Username or Email already exists');
                setShowSnackBar(true);
                isUserFound = true;
                return true;
            }
            return false;
        });

        console.log('isUserFound', isUserFound)
        if (!isUserFound) {
            Users.push(data);
            // navigation.navigate('MoreInfo');
        }

    }

    return (
        <>
            <AuthComponent
                navigation={navigation}
                type='register'
                welcomeText='Join us!'
                buttonText='Register'
                onPress={() => { }}
                searchBar={searchBar}
                handleSubmit={handleRegister}
                loading={loading}
            />
            <SnackBar text={text} visible={showSnackBar} setVisible={setShowSnackBar} />
        </>
    )
}