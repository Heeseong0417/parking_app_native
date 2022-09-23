import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { styles_account } from "../../style/Styles";
import { createBottomTabNavigator, BottomTabBarProps} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image, Settings, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import {firebase_db} from '../../firebase';
import { useEffect, useState } from 'react';
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

import ScrollTabView from "react-native-swiper-view"
import AsyncStorage from "@react-native-async-storage/async-storage";
//////////////////////////////////네비게이션 타입/////////////////////////////////////////
import Swiper from "react-native-swiper"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from "../auth/Login";
import HomeStack from "./HomeStack";
import TrafficStack from "./TrafficStack";
import CarStack from "./CarStack";
import AccountStack from "./AccountStack";
import { SafeAreaView } from "react-native-safe-area-context";
import SafetyStack from "./SafetyStack";
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
export type BnbNavigator = {

  Home: undefined;
  Traffic: undefined;
  Safety: undefined;
  CarLog:undefined;
  Account:undefined;  
  jumpTo(arg0: string): void;
  
};
//////////////////////////////////네비게이션 타입/////////////////////////////////////////
const Tab = createMaterialTopTabNavigator();
const Tab2 = createBottomTabNavigator<BnbNavigator>();

const Stack = createStackNavigator();

function makeIconRender(name: string,color: string,focused:boolean) {
  console.log(focused)
  return (
    <Icon name={name} color={focused ?"#B8B8D2":color} size={30} />
  );
}

const MyButton=()=> {
  const navigation = useNavigation<BnbNavigator>();
  return (
    <View style={{paddingRight:20}}>
    <TouchableOpacity onPress={()=>navigation.jumpTo("Account")}>
      <Icon name={"ios-person-circle"} color={"white"} size={30} />
    </TouchableOpacity></View>
  );
}





export default function Main(){
  const [state, setstate] = useState("")
const [email, setemail] = useState("")
const [key, setkey] = useState(0)

const state_function =(state: string)=>{
console.log("state_function 실행 ~ ")
  setstate(data => data = state)
  console.log("state 상태 : "+state)
}

  const getitem =  () => {
    try {
       setstate( data => data = AsyncStorage.getItem('uid')+"")
       setemail(data => data = AsyncStorage.getItem('email')+"")
    } catch (e) {
      // 오류 예외 처리
    }
  }


const bootstrapAsync = async () => {
  let userToken: string ;
  let userEmail: string ;

  try {
    userToken = await AsyncStorage.getItem('uid')+""
    userEmail = await AsyncStorage.getItem('email')+""
    setstate(data => data = userToken)
    setemail(data => data = userEmail)
  } catch (e) {
    console.log(e);
    Alert.alert(e+"");
    // 토큰 가져오기 실패 FIXME: alert해주기
  }

  // FIXME: 토큰 유효한지 확인해주기

  // 스크린 언마운트됨, 버려짐
 // dispatch({ type: 'RESTORE_TOKEN', token: userToken })
}

useEffect(() => {
  
  // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
  const bootstrapAsync = async () => {
    let userToken: string ;
    let userEmail: string ;

    try {
      userToken = await AsyncStorage.getItem('uid')+""
    userEmail = await AsyncStorage.getItem('email')+""
      if(typeof userToken !== 'undefined' || userToken !== null){

        setstate(data => data = userToken)
      setemail(data => data = userEmail) 
      }
      
    } catch (e) {
      console.log(e);
      Alert.alert(e+"");
      // 토큰 가져오기 실패 FIXME: alert해주기
    }

    // FIXME: 토큰 유효한지 확인해주기

    // 스크린 언마운트됨, 버려짐
   // dispatch({ type: 'RESTORE_TOKEN', token: userToken })
  }

  bootstrapAsync()
return ()=>{
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('uid');
      await AsyncStorage.removeItem('email');
    } catch (e) {
      console.error(e);
    }
  };
 // removeData()
}
  
}, [key])
  
    return (
      <>
        {typeof state === "undefined" || state === null || state === "" ? (
      
        <Login state={state_function}></Login>

        ) : (
          
          <Tab.Navigator
        
          tabBarPosition="bottom"
        
          sceneContainerStyle={
            {
              backgroundColor:"#5271ff"
            }
          }
                     screenOptions={{
                      
              tabBarLabelStyle:{fontSize:WINDOW_WIDHT/50},
             
                
                tabBarInactiveTintColor:"#B8B8D2",
                tabBarActiveTintColor : "#3D5CFF",
             
              
              tabBarStyle: [{ backgroundColor: "#5271ff"/**#308FFF */,height:WINDOW_HEIGHT/12}],
              
            }
            
               
          }
            
        
           
          >
           
            <Tab.Screen
              name="Home"
              component={HomeStack}
              
              options={{
                tabBarIcon:({focused,color})=> (
                  
                 
                  <Icon style={{alignItems: "center"}} name={'home'} color={color} size={WINDOW_WIDHT/16} />
             
                )
                
              }}
            ></Tab.Screen>

            <Tab.Screen
              name="Traffic"
              component={TrafficStack}
              options={{ tabBarIcon:({focused, color})=> (
                <Icon style={{alignItems: "center"}} name={'ios-bar-chart'} color={color} size={WINDOW_WIDHT/16} />
          ) }}
            ></Tab.Screen>
           
            <Tab.Screen
              name="Safety"
              component={SafetyStack}
              options={{ tabBarIcon:({focused,color})=> (
                <Icon style={{alignItems: "center"}} name={'ios-shield-checkmark'} color={color} size={WINDOW_WIDHT/16} />
                ) }}
            ></Tab.Screen>
            
            <Tab.Screen
              name="CarLog"
              component={CarStack}
              options={{
                tabBarIcon:({focused,color})=> ( <Icon style={{alignItems: "center"}} name={'car'} color={color} size={WINDOW_WIDHT/16} />),
              }}
            ></Tab.Screen>
            <Tab.Screen
              name="Account"

              options={{
                tabBarIcon:({focused,color}:any)=> (
                  <Icon style={{alignItems: "center"}} name={'ios-person-circle'} color={color} size={WINDOW_WIDHT/16} />
      ),
             
              }}

            >

              {(props) => <AccountStack state_function={state_function} />}
            </Tab.Screen>

          </Tab.Navigator>

          )}


      </>
    )
}

