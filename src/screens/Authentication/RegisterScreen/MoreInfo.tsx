import { View, Text } from 'react-native'
import React from 'react'
import { BASEURL, COLORS, MOREINFO } from '../../../constants/AppConstant'
import { Avatar, Button, TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios'
import { useAppContext } from '../../../context/AppContext'
import SnackBar from '../../../components/SnackBar'

interface TextSearchProps {
    value: string;
    setValue: (text: string) => void;
    multiline?: boolean;
    numberOfLines?: number;
    placeHolder?: string;
    height?: number;
}

function TextSearch({ value, setValue, multiline, numberOfLines, placeHolder, height }: TextSearchProps) {
    return (
        <View style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TextInput
                style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    padding: 10,
                    textAlignVertical: 'top',
                    backgroundColor: COLORS.lightGray,
                    elevation: 5,
                    height: height,
                    borderBottomWidth: 0,
                }}
                multiline={multiline}
                numberOfLines={numberOfLines}
                placeholder={placeHolder}
                placeholderTextColor={COLORS.black}
                onChangeText={(text) => setValue(text)}
                value={value}
                textColor={COLORS.black}
            />
        </View>
    )
}

export default function MoreInfo({ navigation, route }: { navigation: any, route: any }) {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [bio, setBio] = React.useState('');
    const [text, setText] = React.useState('');
    const [showSnackBar, setShowSnackBar] = React.useState(false);

    let { isAuthorized, AuthUser } = useAppContext();

    const userName = route.params.userName;
    const email = route.params.email;
    const password = route.params.password;

    const handleSubmit = async () => {
        console.log(`${BASEURL}${MOREINFO}`);

        if (!firstName || !lastName || !bio) {
            setText('Please fill all the fields');
            setShowSnackBar(true);
            return;
        }

        try {
            const response = await axios.post(`${BASEURL}${MOREINFO}`, {
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                userName: userName,
            })

            const resp = response.data;
            console.log(resp);
            if (resp.statusCode === 200) {
                console.log('User Info Updated');
                isAuthorized = true;
                AuthUser.firstName = firstName;
                AuthUser.lastName = lastName;
                AuthUser.bio = bio;
                AuthUser.avatar.icon = firstName[0].toUpperCase() + lastName[0].toUpperCase();
                AuthUser._id = userName;
                AuthUser.name = firstName + ' ' + lastName;
                AuthUser.userName = userName;
                AuthUser.email = email;
                AuthUser.password = password;

                isAuthorized = true;
                navigation.navigate('Home');

            }
            else if (resp.statusCode === 404 || resp.statusCode === 500) {
                console.log('User Info Not Updated');
                setText(resp.message);
                setShowSnackBar(true);
            }

        } catch (e) {
            console.log(e);
        }

    }

    return (
        <>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.primary,
                    alignItems: 'center',
                    paddingTop: 50,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: COLORS.white,
                        marginBottom: 20,
                    }}
                >
                    Tell us more about you!
                </Text>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Avatar.Icon
                        size={125}
                        icon={'account'}
                        style={{
                            backgroundColor: COLORS.secondary,
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            backgroundColor: COLORS.primary,
                            padding: 5,
                            borderRadius: 50,
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 85,
                        }}
                    >
                        <Icon name="camera" size={20} color={COLORS.white} />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        paddingHorizontal: 10,
                        width: '100%',
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <TextSearch
                            value={firstName}
                            setValue={(e) => {
                                setFirstName(e)
                            }}
                            placeHolder="First Name"
                            multiline={false}
                            height={40}
                        />
                        <TextSearch
                            value={lastName}
                            setValue={(e) => {
                                setLastName(e)
                            }}
                            placeHolder="Last Name"
                            multiline={false}
                            height={40}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}
                    >
                        <TextSearch
                            value={bio}
                            setValue={(e) => {
                                setBio(e)
                            }}
                            multiline={true}
                            numberOfLines={5}
                            placeHolder="write about you!"
                        />
                    </View>
                </View>
                <Button
                    onPress={handleSubmit}
                    style={{
                        marginTop: 30,
                    }}>
                    <Text
                        style={{
                            color: COLORS.gray,
                            fontSize: 15,
                        }}
                    >
                        Submit
                    </Text>
                </Button>
            </View>
            <SnackBar text={text} visible={showSnackBar} setVisible={setShowSnackBar} />
        </>
    )
}
