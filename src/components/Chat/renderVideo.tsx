import { View, Text } from 'react-native'
import React from 'react'
import Video from 'react-native-video'

export default function renderVideo(props: any) {
  return (
    <View>
      <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        controls
        style={{ width: 300, height: 300 }} 
        />
    </View>
  )
}