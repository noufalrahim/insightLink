import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { COLORS } from '../../constants/AppConstant';

interface SearchBarProps {
  value: string;
  setValue: any;
  icon: string;
  placeholder: string;
  width?: any;
  borderRadius?: any;
  height?: any;
  keyboardType?: any;
  secureTextEntry?: boolean;
}



export default function Search({ value, setValue, icon, placeholder, width, borderRadius, height, keyboardType, secureTextEntry}: SearchBarProps) {

  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={(text) => {
        setValue(text);
      }}
      value={value}
      secureTextEntry={secureTextEntry ? secureTextEntry : false}
      keyboardType={keyboardType? keyboardType : 'default'}
      style={{   
        backgroundColor: COLORS.secondary,
        width: width,
        color: COLORS.black,
        borderColor: COLORS.black,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: borderRadius ? borderRadius : 50,
        height: height ? height : 60
      }}
      inputStyle={{
        color: COLORS.black
      }}
      iconColor={COLORS.black}
      icon={icon}
      placeholderTextColor={COLORS.black}
    />
  );
};

