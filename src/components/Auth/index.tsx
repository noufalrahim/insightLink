import { View, Text, Pressable, KeyboardAvoidingView, Keyboard } from 'react-native'
import React from 'react'
import { Button, Checkbox } from 'react-native-paper'
import Search from '../Search'
import { COLORS } from '../../constants/AppConstant'
import Loader from '../Loader'

interface AuthComponentProps {
    navigation?: any
    type: 'login' | 'register'
    welcomeText: string
    buttonText: string
    onPress: () => void
    searchBar:
    {
        value: string
        handleChange: (text: string) => void
        icon: string
        placeholder: string
        keyboardType?: string
        secureTextEntry?: boolean
    }[],
    handleSubmit: () => void,
    loading: boolean

}

export default function AuthComponent(props: AuthComponentProps) {
    const hasErrors = (text: string) => {
        return !text.includes('@');
    };

    const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);


    return (
        <>
            <View style={{ alignItems: 'center', backgroundColor: COLORS.primary, flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: COLORS.white
                        }}
                    >
                        {props.welcomeText}
                    </Text>
                </View>
                <View
                    style={{
                        flex: props.type === 'login' ? isKeyboardVisible ? 2.5 : 1 : isKeyboardVisible ? 3 : 1.5,
                        width: '100%',
                        marginTop: 10,
                        borderTopEndRadius: 50,
                        borderTopLeftRadius: 50,
                        backgroundColor: COLORS.secondary,
                        justifyContent: 'center',
                        padding: 20
                    }}
                >
                    <KeyboardAvoidingView>
                        <View
                            style={{
                                alignItems: 'center',
                                marginBottom: 20
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    color: 'black'
                                }}
                            >
                                {props.type === 'login' ? 'Login' : 'Register'}
                            </Text>
                        </View>
                        {props.searchBar.map((search, index) => (
                            search.placeholder === 'Password' && props.type === 'login' ? (
                                <View
                                    key={index}
                                    style={{
                                        marginBottom: 10,
                                    }}
                                >
                                    <Search
                                        value={search.value}
                                        setValue={search.handleChange}
                                        icon={search.icon}
                                        placeholder={search.placeholder}
                                        keyboardType={search.keyboardType}
                                        secureTextEntry={search.secureTextEntry}
                                    />


                                    <Text
                                        style={{
                                            textAlign: 'right',
                                            color: 'black',
                                            marginTop: 10
                                        }}
                                    >
                                        Forgot Password?
                                    </Text>
                                </View>

                            ) : (
                                <Search
                                    key={index}
                                    value={search.value}
                                    secureTextEntry={search.secureTextEntry}
                                    setValue={search.handleChange}
                                    keyboardType={search.keyboardType}
                                    icon={search.icon}
                                    placeholder={search.placeholder} />
                            )
                        ))}
                    </KeyboardAvoidingView>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Checkbox
                            status='checked'
                            onPress={() => { }}
                            color='black'
                        />
                        <Text style={{ color: 'black' }}>Remember me</Text>
                    </View>
                    <Button
                        mode='contained'
                        onPress={() => {
                            props.handleSubmit()

                        }}
                        style={{
                            marginTop: 10,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            borderRadius: 25
                        }}
                    >
                        {
                            props.loading ? (
                                <Loader />
                            ) : (
                                <Text style={{ color: 'white' }}>
                                    {props.buttonText}
                                </Text>
                            )
                        }
                    </Button>
                    {
                        props.type === 'login' ? (
                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'black',
                                        marginRight: 10
                                    }}
                                >
                                    Don't have an account?
                                </Text>
                                <Pressable
                                    onPress={() => {
                                        props.navigation.navigate('RegisterScreen')
                                    }}
                                >
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Register</Text>
                                </Pressable>
                            </View>
                        ) : (
                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: 'black',
                                        marginRight: 10
                                    }}
                                >
                                    Already have an account?
                                </Text>
                                <Pressable
                                    onPress={() => {
                                        props.navigation.navigate('LoginScreen')
                                    }}
                                >
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Login</Text>
                                </Pressable>
                            </View>
                        )
                    }
                </View>
            </View>
        </>
    )
}