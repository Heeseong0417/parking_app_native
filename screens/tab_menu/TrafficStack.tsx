
import * as React from 'react';
import { StyleSheet,Dimensions , Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image,ImageBackground } from 'react-native';

import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress,Tile  } from '@rneui/base';

import { useEffect, useState } from 'react';
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import {LineChart} from'react-native-chart-kit'
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { styles_account ,styles_main} from '../../style/Styles';
import Swiper_ from '../swiper/Swiper';
import { Header_create } from './header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo_header from './header/Logo_header';
import  { VictoryChart,VictoryBar,VictoryTheme,VictoryAxis,VictoryLine, TextSize, VictoryPie }  from "victory-native"
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const TrafficStack =({navigation}:any)=>{
  const click_header=()=>{

    navigation.navigate("Account")
  }
  
  const [state, setstate] = useState("")
  const [filldata, setfilldata] = useState(70)
  const [info, seteinfo] = useState({
uid:"",
name:"",
email:"",
carnum:""

  })
  const [news, setNews] = useState([0,0,0,0,0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <SafeAreaView>
    
    <ScrollView style={[styles_main.main_con,{backgroundColor:"#f8f9fa"},styles_main.box_shadow]} stickyHeaderIndices={[1]}>
    <Logo_header/>
<Header_create name={"Traffic"} nav={click_header} /> 
    <View style={[styles_main.main_card]}>
    <Text style={[styles_main.main_card_title]}>TRAFFICS</Text>
    <Text style={[styles_main.main_card_text]}> 교통량 통계 및 시간대별 통계를 확인할 수 있습니다.</Text>
   </View>


     
    
      <View style={[styles_main.mbox]}>
          <Text style={[styles_main.main_card_sub,{paddingTop:10,paddingLeft:10}]}>시간대별 통계</Text>
          <View style={styles_main.stick}/>     
       <View style={[styles_main.chart_con]}>
        <VictoryChart     
     animate={{
       duration: 2000,
       onLoad: { duration: 1000 }
     }}
      width={WINDOW_WIDHT}
      height={WINDOW_HEIGHT*0.4}
theme={VictoryTheme.grayscale}

domainPadding={20}>
  <VictoryAxis
    dependentAxis={true}
    style={{
      axis: {stroke: 'transparent'},
      ticks: {stroke: 'transparent'},
      tickLabels: {fontSize: 12, padding: 5},
    }}
    
  />
 <VictoryAxis

style={{
  axis: {stroke: 'transparent'},
  ticks: {stroke: 'transparent'},
  tickLabels: {fontSize: 12, padding: 5},
}}

/>
<VictoryLine
padding={20}
interpolation="natural"

 style={{ data: { stroke:"#b8b8d2",strokeWidth: 5 } }}
 labels={[10, 15, 7, 20, 14, 12, 10, 20]}


 data={ [{x:"8",y:10},{x:"10",y:15},{x:"12",y:7},{x:"14",y:20},{x:"16",y:14},{x:"18",y:10},{x:"19",y:20}]}
/>


</VictoryChart>

  


</View>
</View>


<View style={[styles_main.mbox,{marginBottom:20}]}>
          <Text style={[styles_main.main_card_sub,{paddingTop:10,paddingLeft:10}]}>요일별 통계</Text>
      
<View style={styles_main.stick}/>
        <View  style={[styles_main.chart_con]}>
        <VictoryChart     
     animate={{
       duration: 2000,
       onLoad: { duration: 1000 }
     }}
      width={WINDOW_WIDHT}
      height={WINDOW_HEIGHT*0.4}
theme={VictoryTheme.grayscale}

domainPadding={20}>
  <VictoryAxis
    dependentAxis={true}
    style={{
      axis: {stroke: 'transparent'},
      ticks: {stroke: 'transparent'},
      tickLabels: {fontSize: 12, padding: 5},
    }}
    
  />
 <VictoryAxis

style={{
  axis: {stroke: 'transparent'},
  ticks: {stroke: 'transparent'},
  tickLabels: {fontSize: 12, padding: 5},
}}

/>
<VictoryBar
padding={20}

cornerRadius={{top: 4}}
 style={{ data: { fill: "#b8b8d2"} }}
 labels={[20, 45, 28, 80, 99, 43, 50]}


 data={ [{x:"Mon",y:20},{x:"Tue",y:45},{x:"Wed",y:28},{x:"Thr",y:80},{x:"Fri",y:99},{x:"Sat",y:43},{x:"Sun",y:50}]}
/>


</VictoryChart>
        </View>
        
    </View> 
  

    </ScrollView></SafeAreaView></>
  );
  // return(<View><Text>hi</Text></View>);
  }
export default TrafficStack;