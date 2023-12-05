import { View, Image, StyleSheet } from 'react-native';

function Profile(props) {
    console.log(props.route);
    return (
            <View style={styles.Container}>
                <Image style={styles.image} source={{uri: props.route.params.data}} />
            </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: 350,
    }
})

