import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import DetailsScreen from './screens/DetailsScreen';
import TopNav from './screens/TopNav';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Profile from './screens/Profile';
import Home2 from './screens/Home2';
import AddNote from './screens/AddNote';
import ProfilePage from './screens/ProfilePage';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator   screenOptions={
       {
        tabBarLabelStyle: { marginBottom: 5 }, // Adjust marginBottom to reduce space
        tabBarIconStyle: { marginBottom: -5 }, // Adjust marginBottom to reduce space
        tabBarActiveTintColor: '#006aff',
        tabBarInactiveTintColor: 'gray',

     
       
      }} 
     
      >


        <Tab.Screen name="Home"  component={AddNote} options={{ header: () => <TopNav />, tabBarIcon:  ()=>   <MaterialCommunityIcons color="#5b5d66" name="home-variant" size={30} />
}}/>

      <Tab.Screen name="Notes" component={Home} options={{ headerStyle:{backgroundColor:'#EDF5FD'}, tabBarIcon:  ()=>   <MaterialCommunityIcons  name="animation" color="#5b5d66" size={30} />}}/>
      <Tab.Screen name="Profile" component={ProfilePage} options={{headerStyle:{backgroundColor:'#006aff'}, headerShown:false,  tabBarIcon:  ()=>   <MaterialCommunityIcons name="account" color="#5b5d66" size={30} />}}/>

    </Tab.Navigator>
  );
}