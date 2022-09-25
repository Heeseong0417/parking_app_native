import {styles, styles_slider, styles_main} from "../../style/Styles"

import * as React from 'react';
import { Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';

import   Icon  from "react-native-vector-icons/FontAwesome5";
import Man from'../splash/man.png'
import { Header , ListItem, Avatar,Card,LinearProgress, FAB, ScreenWidth  } from '@rneui/base';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";
import { Header_create } from "./header/Header";
import Tooltip from 'react-native-walkthrough-tooltip';
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { Background } from "victory-native";
import daz from'../../assets/images/flower-.jpg'
import flr from'../../assets/images/daisy.jpg'
const weather ={
비:'오늘은 비가 오는 날입니다. 외출 시 주의하세요.',
맑음:'오늘은 화창할 것으로 예상됩니다.',
흐림:"오늘은 흐리거나 안개가 낄 예정이므로 외출 시 주의 하세요."


}

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const HomeStack =({navigation}:any)=>{
const [info, setinfo] = useState({'주민차량' :"0","택배차량":"0","통학차량":"0","택시차량":"0","배달차량":"0" })
  const [showTip, setTip] = useState(true);
const [state, setstate] = useState("")
const [name, setename] = useState("")

const click_header=()=>{

  navigation.navigate("Account")
}

const loading=()=>{
  return( <FAB
    loading
    visible={true}
    icon={{ name: 'add', color: "black" }}
    size="small"
  />)
}

useEffect(() => {
  // Storage에서 토큰 가져옴, 다른 화면으로 네비게이트
  const bootstrapAsync = async () => {
    let userToken:any;
    let userName:any;

    try {
      userToken = await AsyncStorage.getItem('uid')
      userName = await AsyncStorage.getItem('name')
      setstate(data => data = userToken)
      setename(data => data = userName)
    } catch (e) {
      // 토큰 가져오기 실패 FIXME: alert해주기
    }

    // FIXME: 토큰 유효한지 확인해주기

    // 스크린 언마운트됨, 버려짐
    dispatch({ type: 'RESTORE_TOKEN', token: userToken })
  }

  bootstrapAsync()
}, [])
return(   
  <>
  <SafeAreaView style={{backgroundColor:"#5271ff"}} >

<Header_create name={"Home"} nav={click_header}/>
<ScrollView style={[{backgroundColor:"#f8f9fa"}]}  >

<View style={[styles_main.main_card]}>
    <Text style={[styles_main.main_card_title]}>HOME</Text>
    <Text style={[styles_main.main_card_text]}>실시간 교통 정보 및 차량 정보를 볼 수 있습니다.</Text>
   </View>



<View style={[styles_main.main_card_nomargin]}>
    <View style={[styles_main.mbox]}>
          <TouchableOpacity
          
   
            style={{ justifyContent: "flex-end"  ,
            alignItems: "center"}}
            onPress={() => navigation.navigate("Traffic")}
          >
             <Text style={styles_main.text_b}>  실시간 교통 위험도 <Icon
              style={{padding:20}}
              name={"chevron-right"}
              color={"gray"}
              size={15}
            /> </Text>
           
          </TouchableOpacity>
        


      <LinearProgress style={{ marginVertical: 10 }} />
      <Text style={styles_main.text_b}>65%</Text>
    </View>        
<View style={[{}]}>
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
        <View style={{justifyContent:"space-around",flexDirection:"row"}} ><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text,{alignItems:"center"}]}><Icon name={'car'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   주민 차량 : " +info.주민차량}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text,{alignItems:"center"}]}><Icon name={'bus-alt'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   통학 차량 : " +info.통학차량}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text,{alignItems:"center",justifyContent:"space-around"}]}><Icon name={'truck'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   택배 차량 : " +info.택배차량}</Text>
        </View>
        </View>

        <View style={[styles_slider.slide1,{alignItems:"center", paddingBottom:5}]}>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text]}><Icon name={'taxi'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   택시 차량 : " +info.택시차량}</Text></View>
        <View style={{justifyContent:"space-around",flexDirection:"row"}}><Text onPress={() => navigation.navigate("Listitems")} style={[styles_slider.text]}><Icon name={'motorcycle'} color={"#5271ff"} size={WINDOW_WIDHT/20} />{"   배달 차량 : " +info.배달차량}</Text></View>
        </View>
      </Swiper>
      </View>



    <View style={{flex:1,  justifyContent: "space-between",flexDirection: 'row',padding:20,marginBottom:WINDOW_HEIGHT/12,marginTop:20}}>
    <View style={[styles_main.box_b,{flex:2,}]}>

<Text style={[styles_main.text_g,{color:'white'}]}>{weather.비}</Text>
</View>
<View style={[{marginTop:30, borderRadius:100},styles_main.box_shadow]}>
 <Avatar onPress={()=>setTip(true)} size="small"  source={Man}></Avatar>   
</View>
   </View>


  
  
    </View> 
   <View style={[styles_main.main_card]}>
<View>
<Text style={[styles_main.main_card_title]}> 이것은 헤더이다. </Text>
<Text style={[styles_main.main_card_text]}>이것이 헤더입니다. 이것은 아무거나 쓴 글입니다.</Text>
<View style={[styles_main.main_card]}>
<View style={[styles_main.main_card_divide]}>
 <Image style={[styles_main.main_card_img]} source={Man}></Image>
  <View style={[styles_main.main_card_divt]}>
    <Text style={[styles_main.main_card_sub]}>이것은 카드다</Text>
    <Text style={[styles_main.main_card_text]}> 왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.왜냐하면 이것은 카드이기 떄문이다.</Text>
    </View>

</View>
  </View>
  </View>
<View style={[styles_main.main_card_divide]}>
  <Image style={[styles_main.main_card_img]} source={flr}></Image>
  <View style={[styles_main.main_card_divt]}><Text style={[styles_main.main_card_sub]}>이것은 카드다</Text>
  <Text style={[styles_main.main_card_text]}> 왜냐하면 이것은 카드이기 떄문이다.</Text>
  </View>
</View>
</View>
 
</View>

  </ScrollView></SafeAreaView></> 
)

}

export default HomeStack;


function dispatch(arg0: { type: string; token: any; }) {
  throw new Error("Function not implemented.");
}

/**
 *  <ListItem
      
        bottomDivider
        onPress={() => navigation.navigate("Login")}
      >
        <ListItem.Content>
          <ListItem.Title style={styles_main.text_b}>{"주민차량"}</ListItem.Title>
     
        </ListItem.Content>     
        <FAB
        loading
        visible={true}
        icon={{ name: 'add', color: "black" }}
        size="small"
      />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title style={styles_main.text_b}>{"택배차량"}</ListItem.Title>
        </ListItem.Content>
        <FAB
        loading
        visible={true}
        icon={{ name: 'add', color: "black" }}
        size="small"
      />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title style={styles_main.text_b}>{"통학차량"}</ListItem.Title>
        </ListItem.Content>
        <FAB
        loading
        visible={true}
        icon={{ name: 'add', color: "black" }}
        size="small"
      />
      </ListItem>

      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title style={styles_main.text_b}>{"택시차량"}</ListItem.Title>
        </ListItem.Content>
        <FAB
        loading
        visible={true}
        icon={{ name: 'add', color: "black" }}
        size="small"
      />
      </ListItem>
      <ListItem
        bottomDivider
        onPress={() => navigation.navigate("Listitems")}
      >
        <ListItem.Content>
          <ListItem.Title style={styles_main.text_b}>{"배달차량"}</ListItem.Title>
        </ListItem.Content>
        <FAB
        loading
        visible={true}
        icon={{ name: 'add', color: "black" }}
        size="small"
      />
      </ListItem>
 */
