import React from 'react';
import { View, TextInput } from 'react-native';
import { Send } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';


const renderInputToolbar = (props: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          backgroundColor: 'white',
          borderRadius: 15,
          borderColor: 'black',
          borderWidth: 1,
          marginHorizontal: 10,
          marginVertical: 5,
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          placeholder="Type a message..."
          value={props.text}
          onChangeText={props.onTextChanged}
          placeholderTextColor="black"
          style={{
            color: 'black',
            width: '80%',
          }}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Send {...props}
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons name="send" size={24} color="black" />
          </Send>
        </View>
      </View>
    );
  };

  export default renderInputToolbar;