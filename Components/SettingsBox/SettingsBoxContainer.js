import { View, StyleSheet } from "react-native";
import SettingsBox from "./SettingsBox";

function SettingsBoxContainer() {
    return (
        <View style={styles.container}>
            <SettingsBox title="Mode" icon="moon-outline" />
            <SettingsBox title="Account" icon="person-outline" />
            <SettingsBox title="Notification" icon="notifications-outline" />
            <SettingsBox title="Chat Settings" icon="chatbubbles-outline" />
            <SettingsBox title="Data and Storage" icon="cloud-upload-outline" />
            <SettingsBox title="Privacy and security" icon="lock-closed-outline" />
            <SettingsBox title="About" icon="information-circle-outline" />
            <SettingsBox title="Help" icon="help-circle-outline" />
            <SettingsBox title="Invite a friend" icon="person-add-outline" />
            <SettingsBox title="Logout" icon="log-out-outline" />
            <SettingsBox title="Delete my account" icon="trash-outline" />
        </View>
    )
}

export default SettingsBoxContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 20,
    }
})