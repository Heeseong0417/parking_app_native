import {StyleSheet, View,Text, ImageBackground} from "react-native"
import Swiper from "react-native-swiper"
import {Tile}from'@rneui/base'
import { styles_slider } from "../../style/Styles"
const Swiper_ =()=>{

  return(<>
    <Swiper style={styles_slider.wrapper} showsButtons={true} >
        <View style={styles_slider.slide1}>
          <Text style={styles_slider.text}>Hello Swiper</Text>
        </View>
        <View style={styles_slider.slide2}>
          <Text style={styles_slider.text}>Beautiful</Text>
        </View>
        <View style={styles_slider.slide3}>
          <Text style={styles_slider.text}>And simple</Text>
        </View>
      </Swiper>
  </>)
  }

  export default Swiper_