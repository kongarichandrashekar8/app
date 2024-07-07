import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FAB } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const TopNav = () => {
  return (
    <View  className={"justify-between flex-row items-center pl-5 pt-10 pr-5 bg-[#EDF5FD]"}>
    <Text className={"text-3xl font-bold text-[#006aff] p-0 m-0"}>Kibu</Text>
    <MaterialCommunityIcons name="content-save-check-outline" size={30} color="black" />
    {/* <FAB color="white" size='mini' onPress={() => {}} style={{}}  icon={props => <Icon name="check" {...props} />} /> */}

</View>
  )
}

export default TopNav