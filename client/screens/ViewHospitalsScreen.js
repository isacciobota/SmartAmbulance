import React, { useState } from 'react'
import {Text, View, StyleSheet, Dimensions, ScrollView, TextInput} from 'react-native';
import FloatingButton from '../components/FloatingButton';
//Icons
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { getHospitals } from '../services/loadHospitals';
import { TapGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export default function ViewHospitalScreen() {

  const [Hospitals ,setHospitals] = useState(window.hospitals);
  let mounted=true;
  getHospitals().then(d=>{ if(mounted) setHospitals(d)});

  return (
    <View style={styles.container}>
      
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.textInput} placeholderTextColor="grey"/>
        <Entypo style={{padding:8, marginHorizontal: 20, marginTop:3}} name="magnifying-glass" color='black' size={22}/>
      </View>

      <View style={{height: height-224}}>
      <ScrollView>
        { Hospitals.map((item) => {
        item.key=item.username;
          return (
            <View style={styles.imageView}>
              <View style={{flexDirection: 'row',}} key={item.key}>
                {/* Aici e Name practic */}
                <Text style={styles.entityName}>{item.name}</Text>
            <TapGestureHandler onHandlerStateChange={  () => fetch(window.URL+'hospitals/'+item._id, { method: 'DELETE', headers: { 'auth-token': [window.token] }  }) }>
                <FontAwesome style={styles.entityIcon} name="trash-o" size={19} color='black'/>
                </TapGestureHandler>
              </View>
              <View style={{backgroundColor: 'white', height:3, width:width, marginBottom: 5}}></View>
              <View style={{flexDirection: 'row',}}>
                <Text style={styles.entityField}>• {item.address}</Text>
              </View>
            </View>
          )
          })}      
      </ScrollView></View>
      <FloatingButton style={{bottom:100}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingBottom: 15,
    width: width/1.1,
    marginBottom: 20,
  },
  searchBar:{
    borderRadius: 10,
    width: width/1.1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
  },
  textInput:{
    padding: 8,
    flex: 1,
    marginLeft: 25,
  },
  entityName: {
    padding: 10,
    marginLeft: 10,
    marginVertical: 5,
    fontSize: 15,
    flex:1,
  },
  entityField: {
    padding: 3,
    marginLeft: 10,
    fontSize: 15,
    flex:1,
  },
  entityField2: {
    padding: 3,
    fontSize: 15,
    flex:1,
  },
  entityIcon: {
    padding: 8,
    marginRight: 20,
    marginVertical: 5,
  },
});