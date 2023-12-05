import { View, Text, StyleSheet, Image } from "react-native"
import { PRIMARY_COLOR } from "../../Constants/color"

function FollowBox(props) {
    return (
        <>
            <View style={styles.Container}>
                <View style={styles.imgContainer}>
                    <Image source={{ uri: props.data.image }} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.data.name}</Text>
                    <Text style={styles.username}>{props.data.username}</Text>
                </View>
                <View style={styles.followContainer}>
                    <Text style={styles.followText}>Follow</Text>
                </View>
            </View>
</>
    )
}

export default FollowBox

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        },
    textContainer:{
        flex: 1,
    },
    followContainer: {
        backgroundColor: PRIMARY_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    name: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
    },
    followText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
})

