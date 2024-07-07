// import { Avatar } from '@react-native-material/core';
// import React from 'react';
// import { View, Text, Image, Button, StyleSheet, SafeAreaView } from 'react-native';

// const ProfilePage = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>

        
//         <View style={styles.profileContainer}>
//         <Avatar
//         size={150}
//       image={
//         <Image
//           source={{ uri: "https://mui.com/static/images/avatar/2.jpg" }}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,

//             borderRadius: 28,
//           }}/>}/>
    
//           <Text className={'pt-2 '} style={styles.profileText}>Chandrashekar Kongari</Text>
//           <Text className={'pb-1'} style={styles.profileText}>kongarichandrashekar8@gmail.com</Text>
    
//           <View className='rounded-xl border bg-card text-card-foreground border-[#e4e6f7] shadow p-4'>
  
//           <Text style={styles.profileText}>Organization: ABC Corp</Text>
//           <View style={styles.separator} />
//           <Text style={styles.profileText}>Role: Developer</Text>
//           </View>
//         </View>

//         <Button title="Logout" onPress={() => console.log('Logout pressed')} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f8f8',
//     padding: 5,


//   },
//   content: {
//     alignItems: 'center',

//     paddingTop: 60,



//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
//   profileText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   separator: {
//     height: 1,
//     width: '100%',
//     backgroundColor: '#e4e6f7',
//     marginVertical: 5,
//   },
// });

// export default ProfilePage;

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Container = styled(View, 'flex-1 items-center  bg-white');
const Header = styled(View, 'w-full h-48 bg-[#EDF5FD] items-center justify-center');
const AvatarContainer = styled(View, 'w-28 h-28 ml-4 rounded-full bg-white overflow-hidden border-4 border-white -mt-16');
const Avatar = styled(Image, 'w-full h-full');
const Name = styled(Text, 'text-lg font-bold mt-1');
const ButtonRow = styled(View, 'flex-row space-x-8 mt-4');
const Card = styled(View, 'bg-white p-4 rounded-lg border border-gray-300 shadow-md mt-2');
const Row = styled(View, 'flex-row items-center');

const ProfilePage = () => {
  return (
    <Container>
       
      <Header style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
      

      <MaterialCommunityIcons style={{ position: 'absolute', top: 40, right: 25 }}  name="logout-variant" color="#5b5d66" size={30} />

        
      </Header>
      <AvatarContainer>
        <Avatar source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }} />
      </AvatarContainer>
      
      <Text className='text-gray-400'>chandrashekar@kibuhq.com</Text>
      <Name>Chandrashekar Kongari</Name>
     
      <Card className='w-5/6'>
      <Row>
          <Text className="text-base font-bold ">Organization: </Text>
          <Text className="">Kibu</Text>
        </Row>
        <Row>
          <Text className="text-base font-bold ">Role: </Text>
          <Text className="">Admin</Text>
        </Row>
      </Card>
    </Container>
  );
};

export default ProfilePage;

