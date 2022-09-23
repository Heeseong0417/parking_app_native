
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

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const TrafficStack =({navigation})=>{
  const click_header=()=>{

    navigation.navigate("Account")
  }
  const configforLine = {
    startAtZero: false,
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      prefix: "",
      offset: 0,
    },
  };
  const configforBar = {
    hasXAxisBackgroundLines: false,
    xAxisLabelStyle: {
      position: 'left',
      prefix: ''
    }
  };
  const styles = StyleSheet.create({
    chartforLine: {
      marginBottom: 30,
      padding: 0,
      paddingTop: 0,
      borderRadius: 20,
      width: 375,
      backgroundColor: "white",
    },
    chartforBar: {
      marginBottom: 30,
      padding: 0,
      paddingTop: 0,
      borderRadius: 20,
      backgroundColor: 'white',
      width: 350
    }
  });

  return (
    <>
    <SafeAreaView>
    <Header_create name={"Traffic"} nav={click_header} stickyHeaderIndices={[0]}/> 
    <ScrollView style={[styles_main.main_con,{backgroundColor:"#e9e9e9"},styles_main.box_shadow]}>
      <View>
        <Text style={[styles_main.mbox,styles_main.title_h2,styles_main.box_shadow,{marginTop:20}]}> 트래픽 통계</Text>
<Text style={[styles_main.title_h4]} > 교통량 통계 및 시간대별 통계를 확인할 수 있습니다. </Text>
      </View>

     
    
      <Card
        containerStyle={{
          marginTop: 15,
          borderRadius: 20,
          paddingLeft: 0,
        }}
      >
        <Card.Title /*style={{ textAlign: "left" }}*/>
          <Text>시간대별 통계</Text>
        </Card.Title>
        <Card.Divider/>
        
        <View style={styles_account.mainstyle}>
         
        <LineGraph
          data={[10, 15, 7, 20, 14, 12, 10, 20]}
          width={WINDOW_WIDHT*0.6}
          height={WINDOW_HEIGHT*0.4}
          isBezier
          hasShadow
          
          baseConfig={configforLine}
        
          lineColor="skyblue"
          dotColor="skyblue"
        />
        </View>     
      </Card>
      <Card
        containerStyle={{
          marginTop: 15,
          borderRadius: 20,
          paddingLeft: 0,
        }}
      >
        <Card.Title /*style={{ textAlign: "left" }}*/>
          <Text>요일별 통계</Text>
        </Card.Title>
        <Card.Divider/>
        <View style={styles_account.mainstyle}>
          <VerticalBarGraph
            data={[20, 45, 28, 80, 99, 43, 50]}
            labels={["Mon","Tue","Wed","Thr","Fri","Sat","Sun"]}
          
            width={WINDOW_WIDHT*0.6}
            height={WINDOW_HEIGHT*0.4}
            barRadius={5}
            barWidthPercentage={0.65}
            baseConfig={configforBar}
           
            barColor="skyblue"
            
          />
        </View>
      </Card>
    </ScrollView></SafeAreaView></>
  );
  // return(<View><Text>hi</Text></View>);
  }
export default TrafficStack;