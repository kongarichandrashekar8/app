import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View, Model, Modal } from 'react-native';
import MainPage from './MainPage';
import TopNav from './TopNav';
import Card from './Card';
import { Stack, FAB, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
const HomeScreen = () => {
    const notes=[
        { id:"1",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       },
       { id:"2",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       },
       { id:"3",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       },
       { id:"4",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       }
       ,
       { id:"5",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       }
       ,
       { id:"6",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       }
       ,
       { id:"7",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       }
       ,
       { id:"8",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       }
       ,
       { id:"9",
         title:"Box Shadow Item",
         text:"Today chandrashekar did great job, he so great.",
         time:"10:44 PM . Today"
       }
       ]
     
       const [modalVisible,setModalVisible]=useState(false)
     
       const btn=()=>{
         console.log('btn clicked')
       }
      
  return (
    <View>
        <Text>wyd</Text>
    {/* <Modal
    
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
      <Button onPress={()=>setModalVisible(!modalVisible)}>close</Button>
      </View>
    </View>
  </Modal>
  <TopNav/>



  <FlatList
    data={notes}
    renderItem={({ item }) => <Card key={item.id} title={item.title} text={item.text} time={item.time}/>}
    keyExtractor={(item) => item.id}
  />
      <FAB color="#006aff" onPress={()=>setModalVisible(!modalVisible)} style={{position:'absolute',right:18, bottom:18,zIndex:10}}  icon={props => <Icon name="plus" {...props} />} /> */}
      </View>
  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

export default HomeScreen