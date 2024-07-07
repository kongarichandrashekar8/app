// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import DetailsScreen from './screens/DetailsScreen';
import TopNav from './screens/TopNav';
import MyTabs from './MyTabs';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       {/* <StatusBar
        animated={true}
        backgroundColor="#61dafb"
     

      /> */}
      {/* <Stack.Navigator initialRouteName="Details" screenOptions={{  }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" options={{ header: () => <TopNav title="Home" /> }} component={DetailsScreen} />
      </Stack.Navigator> */}
       <MyTabs/>
    </NavigationContainer>
   
  );
}
