import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image, SafeAreaView, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import  MaterialCommunityIcons  from "react-native-vector-icons/Ionicons";
import   Icon  from "react-native-vector-icons/FontAwesome5";
import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useEffect, useState } from 'react';
import { doc,collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { firebase_db } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {styles_account, styles_main, styles_slider} from "../../style/Styles"
import axios from "axios"
import  { VictoryChart,VictoryBar,VictoryTheme, VictoryPie, VictoryAxis }  from "victory-native"
import { Header_create } from "./header/Header";
import Logo_header from "./header/Logo_header";
import {Circle,Pie}  from 'react-native-progress';
import Progress from 'react-native-circular-progress-indicator';
import {ProgressChart} from "react-native-chart-kit"
import svg from 'react-native-svg'
import flr from'../../assets/images/daisy.jpg'
import Swiper from "react-native-swiper";

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;


const SafetyStack = ({navigation, state_function}:any)=>{
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
  const chart_default =["위험","주의","보통","안전"]
  const [info_car, setinfo_car] = useState({'주민차량' :"0","택배차량":"0","통학차량":"0","택시차량":"0","배달차량":"0" })
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

  const data12 = {
    labels: ["Swim"], // optional
    data: [0.4]
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



<ScrollView style={[styles_main.main_con,{backgroundColor:"#f8f9fa"},styles_main.box_shadow]} stickyHeaderIndices={[1]}>

<Logo_header/>
  
  <Header_create name={"Safety"} nav={click_header}/>

<View style={[styles_main.main_card]}>
    <Text style={[styles_main.main_card_title]}>SAFETY</Text>
    <Text style={[styles_main.main_card_text]}>교통안전 위험도 및 오늘의 차량 수를 확인할 수 있습니다. </Text>



   </View>
  
  

   

        <View style={[styles_main.mbox,{marginBottom:20}]}>
          <Text style={[styles_main.main_card_sub,{paddingTop:10,paddingLeft:10}]}>교통 위험도</Text>
      
<View style={styles_main.stick}/>
        <View  style={[styles_main.chart_con,{justifyContent:"center"}]}>
        <AnimatedCircularProgress
  duration={1000}
           size={200}
           width={5}
           fill={filldata} 
              tintColor={filldata > 89 ?"red" : filldata >69?  "#FF7A00": filldata >50 ? "blue":"green"}
              backgroundColor="#3d5875"
              arcSweepAngle={260}
              rotation={225}>
              {
                (fill) => (
                  <><Text style={[styles_main.main_card_title,{color:"#FF7A00"}]}>
                  교통 위험도
                </Text>
                <Text style={[styles_main.main_card_sub,{color:"#FF7A00"}]}>
                    {chart_default[1]}
                  </Text>
                <Text style={[styles_main.main_card_sub,{color:"#FF7A00"}]}>
                    {fill}%
                  </Text></>
                )
              }
            </AnimatedCircularProgress>

        </View>

        <View style={[styles_main.mbox]}>
        <TouchableOpacity onPress={() => navigation.navigate('CarLog')}>
           <Text style={[styles_main.text_b,{textAlign:"center"}]}> 차량정보 <Icon
            name={"chevron-right"}
            color={"gray"}
            size={15}
          /></Text>
        </TouchableOpacity>
     

   
         <Swiper style={styles_slider.wrapper} showsButtons={false} dotColor={'gray'} activeDotColor={'#b8b8d2'} autoplay={true}>
       <View style={[styles_main.main_card_divide]}>
      <Icon style={[styles_main.main_card_img]}name={'car'} color={"#5271ff"} size={WINDOW_WIDHT} />
       <View style={[styles_main.main_card_divt]}><Text style={[styles_main.main_card_text]}>fdfdfdfdfdffd</Text></View>
       </View>
        <View style={[styles_slider.slide1,{alignItems:"center", paddingBottom:10}]}>
        <View style={{justifyContent:"space-around",flexDirection:"row"}} ><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text,{alignItems:"center"}]}><Icon name={'car'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   주민 차량 : " +info_car.주민차량}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text,{alignItems:"center"}]}><Icon name={'bus-alt'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   통학 차량 : " +info_car.통학차량}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text,{alignItems:"center",justifyContent:"space-around"}]}><Icon name={'truck'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   택배 차량 : " +info_car.택배차량}</Text>
        </View>
        </View>

        <View style={[styles_slider.slide1,{alignItems:"center", paddingBottom:5}]}>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text]}><Icon name={'taxi'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   택시 차량 : " +info_car.택시차량}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text]}><Icon name={'motorcycle'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   배달 차량 : " +info_car.배달차량}</Text></View>
        </View>
      </Swiper>
      </View>
      

    </View> 
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
        </ScrollView></SafeAreaView>
    </>

  );

}


export default SafetyStack;

