import moment from "moment";
import React from "react";
import { Text, View } from "react-native";

export default function renderTime(props: any) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'grey', fontSize: 12 }}>
                {moment(props.currentMessage.createdAt).format('LT')}
            </Text>
        </View>
    );
}