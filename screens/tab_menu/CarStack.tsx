import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from 'react';
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image } from 'react-native';
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";

import { FlatList } from "react-native-gesture-handler";
import { Header , ListItem, Avatar,Card,LinearProgress  } from '@rneui/base';

import { useEffect, useState } from 'react';
import { doc,collection,collectionGroup, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore/lite";
import LineGraph from '@chartiful/react-native-line-graph';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { firebase_db } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles_account, styles_main } from "../../style/Styles";
import { Header_create } from "./header/Header";
import { SafeAreaView } from "react-native-safe-area-context";



//////////////////////////////////네비게이션 타입/////////////////////////////////////////
type ListScreenProp = StackNavigationProp<ProfileStackParamList, 'Click_items'>;
export type ProfileStackParamList = {
  List_items: undefined;
  Click_items: undefined;
  name: undefined;
};
const Stack = createStackNavigator<ProfileStackParamList>();

const CarStack = ({navigation}: any)=>{
  const click_header=()=>{

    navigation.navigate("Account")
  }
//////////////////////////리스트 아이템/////////////////////////////////
const List_car = ()=>{

  const navigation = useNavigation<ListScreenProp>();
  return (

      <>
         <SafeAreaView style={{backgroundColor:"#5271ff"}}> 
          <Header_create name={"Car log"} nav={click_header}/>
          <ScrollView style={[styles_main.main_con,{backgroundColor:"#e9e9e9"},styles_main.box_shadow]}>
          <View>
        <Text style={[styles_main.mbox,styles_main.title_h2,styles_main.box_shadow,{marginTop:20}]}>주차 기록</Text>
<Text style={[styles_main.title_h4]} >나의 주차 기록을 확인 할 수 있습니다. </Text>
      </View>
      <View style={styles_main.stick}/>
    <Text style={styles_account.textcolor}>{carnum}</Text>
    <View>
  {value_data&&value_data.length !== 0 ? (<>
          {
          value_data.map((l, i) => (
        
     
            <ListItem  key={i} bottomDivider onPress={() => navigation.navigate("Click_items")}>
              <Avatar source={{uri: l.car_info.car_type}} />
              <ListItem.Content>
                <ListItem.Title>{l.car_info.car_type}</ListItem.Title>
                <ListItem.Subtitle>{l.car_info.regi_num}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }</>):("")}</View>
  </ScrollView>
</SafeAreaView></>
  )
}
//////////////////////////클릭  아이템/////////////////////////////////
const Click_car = (navigation:any)=>{

  return (

    <ScrollView>
    <Card>
    <Text style={styles_account.textcolor}>{carnum}</Text>
 
  <Text style={styles_account.textcolor}>
 {JSON.stringify(value_data)}   
  </Text>
  </Card>
  </ScrollView>

  )
}
/////////////////////////

const [value_data, setvalue_data] = useState([
    {
      car_info: {
        car_type: "",
        is_resident: "",
        regi_num: "",
        visit_purpose: "",
      },
      ta_history: {
        is_facility_damage: "",
        is_people_damage: "",
        num_of_ta: "",
      },
      time_info: {
        departure_time: "",
        entrace_time: "",
      },
    },
  ]);
  const [carnum, setcarnum] = useState("")
  const addCollection =collection(firebase_db,'parking_system');
  
  const defalut_data =async (car_num: string) => {
      console.log(JSON.stringify(car_num))
    const q = await query(
    addCollection,
      where("car_info.regi_num", "==",car_num),
      //orderBy("risk", "desc"),
    
      //limit(1)
    );
    const getdata = await getDocs(q);
    const resultdata = getdata.docs.map(doc => ({ ...doc.data() }));
   
    setvalue_data(data => data =JSON.parse(JSON.stringify(resultdata)))
    //console.log(resultdata);
   // alert(resultdata)
  }
  const bootstrapAsync = async () => {
     
  
    try {
      let carnum_info = await AsyncStorage.getItem('carnum')+""
      setcarnum(data => data= carnum_info)
      defalut_data(carnum_info)

    }catch(e){
      
    }
   
    
  }
  useEffect(() => {
   
  bootstrapAsync()
    
   
    return () => {
     
    }
  }, [])
  ///////////////////////////////리스트아이템 메인 네비게이션/////////////////////////////////////////
    return (


        <Stack.Navigator      
          
        screenOptions={
             
              { 
             
                headerTitle:"",
                headerShown:false,
                
         }}
            

             
          >

    <Stack.Screen name="List_items" component={List_car} />
    <Stack.Screen name="Click_items" component={Click_car} options={
             
             {
              headerShown:true,
              headerTitle:carnum,
             }}/>


           

          </Stack.Navigator>
  
    );
    }
  export default CarStack;
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      textinfo:{
        margin:10, 
        textAlign: 'center',
        fontSize: 17,    
      },
    });
  