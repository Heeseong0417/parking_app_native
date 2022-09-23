import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { color } from "@rneui/base";
import { Header } from "@rneui/themed"
import React, { useEffect, useState } from "react";
import {View, TouchableOpacity, Dimensions, GestureResponderEvent, Alert, StatusBar} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { styles_main } from "../../../style/Styles";
import {Text} from 'react-native'

type props ={
name:string
nav: any
}
export type BnbNavigator = {

    Home: undefined;
    Traffic: undefined;
    Safety: undefined;
    CarLog:undefined;
    Account:undefined;  
    jumpTo(arg0: string): void;
    
  };
  const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export const Header_create =({name,nav}: props)=>{
  const [state, setstate] = useState("none")
const [user, setuser] = useState("")
 
    return(
    <>
    <StatusBar backgroundColor="#5271ff" barStyle="light-content" />
    <View style={[styles_main.header_con,{height:WINDOW_HEIGHT/17}]}>
   <View>
     <Text style={[styles_main.header_text]}>{name}</Text>
   </View>
   <View></View>
  <TouchableOpacity style={[styles_main.header_text,{borderRadius:100}]} onPress={()=> nav()}>
    <Text style={[styles_main.header_text]}><Icon onTextLayout={()=>"my"}  color={"white"} name={"md-person-circle-outline"} size={WINDOW_WIDHT/15}/></Text>
  </TouchableOpacity>
      

    </View>
 

      </>
      )
 }
