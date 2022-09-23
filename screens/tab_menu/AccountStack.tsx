import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import  MaterialCommunityIcons  from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';

import { useEffect, useState } from 'react';
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { firebase_db } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles_account, styles_main} from "../../style/Styles"
import { Header_create } from "./header/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const AccountStack = ({navigation, state_function}:any)=>{
  const click_header=()=>{

    navigation.navigate("Account")
  }


  const [state, setstate] = useState("")
  const [info, seteinfo] = useState({
uid:"",
name:"",
email:"",
carnum:""

  })
  const removeData = async () => {
    try {
      await AsyncStorage.clear();
  
      
      state_function("")
    } catch (e) {
      console.log(e+"");
    }
  };
  useEffect(() => {
    // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
    const bootstrapAsync = async () => {
     
  
      try {
  
        info.uid = await AsyncStorage.getItem('uid')+""
        info.name = await AsyncStorage.getItem('name')+""
        info.email = await AsyncStorage.getItem('email')+""
        info.carnum = await AsyncStorage.getItem('carnum')+""

        setstate(data => data = info.uid)
       
        seteinfo(data => data = info)

      } catch (e) {
        // 토큰 가져오기 실패 FIXME: alert해주기
      }
  
      // FIXME: 토큰 유효한지 확인해주기
  
      // 스크린 언마운트됨, 버려짐
   
    }
  
    bootstrapAsync()
  }, [])

return (
   
<>
<SafeAreaView>
<Header_create name={"Account"} nav={click_header}/>
<ScrollView style={[styles_main.main_con,{backgroundColor:"#e9e9e9"},styles_main.box_shadow]}>
<View style={[styles_main.main_con,{backgroundColor:"#e9e9e9"},styles_main.box_shadow]}>
    <Card
      containerStyle={{ marginTop: 15, alignSelf: "auto", borderRadius: 20 }}
    >
      <Card.Title style={{ textAlign: "left" }}>회원정보</Card.Title>
      <Card.Divider />
      <Card.FeaturedTitle>
      <View style={{ flexDirection: "row",padding:10}}>
        <Avatar
          source={{ uri: "https://randomuser.me/api/portraits/men/4.jpg" }}
          size={WINDOW_WIDHT/5}
          containerStyle={{marginRight:10}}/>

        <View>
          <Text style={styles_account.textcolor}>
            <MaterialCommunityIcons
              name={"person"}
              color={"fff"}
              size={10}
            />
          이름 : {info.name}
          </Text >
          <Text style={styles_account.textcolor}>
            <MaterialCommunityIcons name={"mail"} color={"fff"} size={10} />
            이메일 : {info.email}
          </Text >
          <Text style={styles_account.textcolor}>
            <MaterialCommunityIcons name={"ios-card-outline"} color={"fff"} size={10} />
            차량 번호 : {info.carnum}
          </Text>
           {/**   <Text style={styles_account.textcolor}>
        
            <MaterialCommunityIcons name={"ios-code-slash"} color={"fff"} size={30} />
            토큰 : {state}
          </Text>*/
          <TouchableOpacity
        style= {styles_account.submitButton}
        onPress = {
         removeData
         
        }>
          <Text style = {styles_account.submitButtonText}>로그아웃</Text>
        </TouchableOpacity>}
        </View>
      </View></Card.FeaturedTitle>
    </Card></View>
    </ScrollView>
    </SafeAreaView>
    </>
  );
}

export default AccountStack;

function dispatch(arg0: { type: string; token: any; }) {
  throw new Error("Function not implemented.");
}
