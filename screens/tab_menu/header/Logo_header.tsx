import React from "react"
import {Dimensions, Image, Text, View} from "react-native"
import comax from "../../../assets/images/comax_white.png"
import { styles_main } from "../../../style/Styles";

const Logo_header =()=>{
    const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
    const WINDOW_HEIGHT = Dimensions.get("window").height;


    return (

        <View style={[{backgroundColor:"#5271ff", padding:20,flexDirection:"row",justifyContent:"flex-start"}]}>
<Image source={comax} style={[{width:WINDOW_WIDHT/3,height:WINDOW_HEIGHT/20,resizeMode:"contain"}]}/>  
<Text style={[styles_main.main_card_sub,{color:"white", fontStyle:"italic"}]}></Text>
</View>
  )
}

export default Logo_header