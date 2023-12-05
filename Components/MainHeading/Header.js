import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../Constants/color";

function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>insightLink</Text>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flex: 0.125,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        paddingLeft: 25,
        paddingTop: 20,
        },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 30
    }
});
