import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import SettingsBoxContainer from '../Components/SettingsBox/SettingsBoxContainer';
import { useNavigation } from '@react-navigation/native';
function Settings() {
    const navigation = useNavigation();
    const showImageHandler = () => {
        navigation.navigate('Profile photo',{
            image: "https://media.licdn.com/dms/image/D5603AQHHzazLfgFqfg/profile-displayphoto-shrink_800_800/0/1685228999121?e=2147483647&v=beta&t=YqpySY1Crz129QYhSOrxg894Z5SLzM1rU34V_GnHl7M",
        });

    }
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Pressable style={styles.imageContainer} onPress={showImageHandler}>
                    <Image style={styles.image} source={require('../assets/photo.png')} />
                </Pressable>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Noufal Rahim</Text>
                    <Text style={styles.aboutText}>This is about me</Text>
                    <View style={styles.line}></View>
                </View>
            </View>
            <View style={styles.thinline}></View>
            <ScrollView style={styles.settingsContainer}>
                <SettingsBoxContainer />
            </ScrollView>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    about: {
        flexDirection: 'row',
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'red',
        marginLeft: 20,
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    textContainer: {
        alignItems: 'center',
        marginLeft: 50,
        marginTop: 35,
        width: "45%"
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    aboutText: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray',
        marginTop: 10,
    },
    thinline: {
        width: '100%',
        height: 0.2,
        backgroundColor: '#EBEBEB',
        marginTop: 10,
    }
})