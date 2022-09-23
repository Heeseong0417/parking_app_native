import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Home from '../Home'
import Main_home from '../tab_menu/header/Main_home';
import MyTabs from '../tab_menu/MyTabs';
import SignUp from '../tab_menu/SignUp';
import logo_comax from './logo_comax.json'
export  const Lottie: any =()=>{
    const [splash, setsplash] = useState(true)


    useEffect(() => {
      
      setTimeout(() => {
        setsplash(data => data = false)
      }, 3000);
      return () => {
       
      }
    }, [])
      return (<>
      {
splash ? (<View style={{flex:1,width:'100%',height:'100%', backgroundColor:'#5271ff'}}><LottieView  source={logo_comax} autoPlay loop /></View>):(<Main_home/>)

      }
      
      
      
      </>);

  }