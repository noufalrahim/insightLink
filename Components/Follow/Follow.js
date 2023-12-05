import { View, Text, StyleSheet, TextInput } from 'react-native';
import FollowBox from './FollowBox';
import { Ionicons } from "@expo/vector-icons"
function Follow({ route }) {
    return (
        <View>
            <View>
                {/* SearchBar */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Search" style={styles.textInput} />
                    <Ionicons name="search" size={24} color="black" style={{ position: 'absolute', right: 10, top: 10 }} />
                </View>
            </View>
            <FollowBox data={route.params.data} />
        </View>
    )
}

export default Follow;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    inputContainer: {
        backgroundColor: '#dbdbdb',
        borderRadius: 10,
        margin: 10,
    },
    textInput: {
        padding: 10,
        fontSize: 20,
    },  
})

