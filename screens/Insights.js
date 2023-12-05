import { View, Text, StyleSheet, Image } from "react-native";
function Insights(){
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.heading}>Insights</Text>
        </View>
        <View style={styles.imageContainer}>
        </View>
        </>
    )
}

export default Insights;

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    imageContainer: {
        flexWrap: 'wrap',
    }
})