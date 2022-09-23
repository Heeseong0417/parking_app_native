import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image, SafeAreaView, Dimensions } from 'react-native';
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
import axios from "axios"
import  { VictoryChart,VictoryBar,VictoryTheme }  from "victory-native"
import { Header_create } from "./header/Header";
const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const SafetyStack = ({navigation, state_function}:any)=>{
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
  const [news, setNews] = useState([0,0,0,0,0]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
  const removeData = async () => {
    try {
      await AsyncStorage.clear();
  
      
      state_function("")
    } catch (e) {
      console.log(e+"");
    }
  };

  const fetchNews2 = async () => {
    const data1 = {data: "datDFdata"}
    
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError("");
      setNews([]);
        
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
        
      const response = await axios.post(
        'http://1.237.1.88:4500/parking_data'
      ,data1);
        
      // 데이터는 response.data.data 안에 들어있다.
      console.log(response.data)
      setNews(value => value =response.data);
    } catch (e) {
      setError(e+"");
    }
    // loading 끄기
    setLoading(false);
  };
  const fetchNews = async () => {
    const data1 = {data: "datDFdata"}
    
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError("");
      setNews([]);
        
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
        
      const response = await axios.put(
        'http://1.237.1.88:4500/parking_data'
      ,data1);
        
      // 데이터는 response.data.data 안에 들어있다.
      setNews(value => value =response.data);
    } catch (e) {
      setError(e+"");
    }
    // loading 끄기
    setLoading(false);
  };
  // 첫 렌더링 때 fetchNews() 한 번 실행


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
    fetchNews()
    const myInterval = () => {
        setTimeout(() => {
            fetchNews()
            console.log("실행됨")
          myInterval
        }, 3.6e+6)
      }

      myInterval()
  
    bootstrapAsync()

    return ()=>{
        myInterval
    }
  }, [])

return (
   
<>
<SafeAreaView style={{backgroundColor:"#5271ff"}} >


<Header_create name={"Safety"} nav={click_header}/>

<ScrollView style={[styles_main.main_con,{backgroundColor:"#e9e9e9"},styles_main.box_shadow]}>
<View>
        <Text style={[styles_main.mbox,styles_main.title_h2,styles_main.box_shadow,{marginTop:20}]}> 교통 안전 위험도</Text>
<Text style={[styles_main.title_h4]} > 교통안전 위험도 및 오늘의 차량 수를 확인할 수 있습니다. </Text>
      </View>
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
    </Card>
    <TouchableOpacity
        style= {styles_account.submitButton}
        onPress = {
            fetchNews
        
        }>
          <Text style = {styles_account.submitButtonText}>ping go</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(news)}</Text>
        <TouchableOpacity
        style= {styles_account.submitButton}
        onPress = {
        
            fetchNews2
        }>
          <Text style = {styles_account.submitButtonText}>ping go</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(news)}</Text>

        <View>
        <VictoryChart
     
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 }
        }}
         width={WINDOW_WIDHT*0.8}
         height={WINDOW_HEIGHT*0.4}
  theme={VictoryTheme.grayscale}
  domainPadding={20}>
  <VictoryBar
    style={{ data: { fill: "#b8b8d2" } }}
    
    data={news}
  />
</VictoryChart>
        </View>
        </ScrollView></SafeAreaView>
    </>

  );

}


export default SafetyStack;

