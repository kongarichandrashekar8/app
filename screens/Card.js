import React from 'react'
import { View,Text } from 'react-native'
const Card = ({title, text, time}) => {
  return (
    <View className="block max-w-sm pt-5 pl-5 pr-5 pb-3 mt-1 ml-2 mr-3 mb-1 bg-slate-50 border border-gray-200 rounded-lg shadow" >

<Text className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</Text>
<Text className="font-normal text-gray-700 dark:text-gray-400">{text}</Text>

<Text className='pt-4 text-xs'>{time}</Text>
</View>
  )
}

export default Card