import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { PRIMARY_COLOR } from '../Constants/color';
function Info({ route}) {
    const data = route.params.data;
    console.log(data);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: data.image}} style={styles.image} />
            </View>
            <View style={styles.usernameContainer}>
                <Text style={styles.username}>{data.username}</Text>
            </View> 
            <Text style={styles.name}>{data.senderName}</Text>
        </View>
    )
}
export default Info;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    imageContainer: {
        marginTop: 20,
        backgroundColor: 'black',
        padding: 2,
        borderRadius: 100,
    },
    username:{
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
})