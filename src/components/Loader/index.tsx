import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { COLORS } from '../../constants/AppConstant'

export default function Loader() {
  return (
    <ActivityIndicator animating={true} color={COLORS.white} />
  )
}