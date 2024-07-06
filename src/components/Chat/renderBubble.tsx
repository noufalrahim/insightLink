import { Bubble } from "react-native-gifted-chat";
import { View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Video from "react-native-video";
import { Text } from "react-native-paper";
import { AuthUser, COLORS } from "../../constants/AppConstant";
import renderTime from "./renderTime";


const renderBubble = (props: any) => {
    return (
        <Bubble
            {...props}
            onLongPress={() => { console.log('Long Pressed') }}
            renderTicks={(props: {
                loading: any; 
                user: { _id: string }; 
            }) => {
                if (props.user._id === AuthUser._id) {
                    return (
                        <View
                            style={{
                                marginRight: 1
                            }}
                        >
                            {
                                props.loading ? (
                                    <Ionicons name="time-outline" size={14} color="white" />
                                ) : (
                                    <Ionicons name="checkmark-done" size={15} color="white" />
                                )
                            }
                        </View>
                    )
                }
            }}
            wrapperStyle={{
                left: {
                    backgroundColor: COLORS.white,
                    borderWidth: 1,
                    borderColor: 'black',
                    paddingHorizontal: 5,
                },
                right: {
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: 5,
                },
            }}
        />
    );
}

export default renderBubble;
