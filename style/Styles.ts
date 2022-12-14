
import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';

const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

export const styles = StyleSheet.create({
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
    },
    fonts:{ }
  });

  export const styles_account = StyleSheet.create({
    
    mainstyle : {
      alignItems:"center",
      alignContent:"center",
      justifyContent:'center',
      padding:0,
      flex:1,
 color:"dark",
  fontSize:20
  
    },
    textInput: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
    },
    submitButton: {
      borderRadius:5,
      fontFamily:'Helvetica Rounded Bold',
      alignContent:'center',
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
     padding:10,
     margin:10,
      backgroundColor: "rgba(112,113,116,1)",
      width: WINDOW_WIDHT/5,
      
    },
    submitButtonText: {
      color: 'white'
    },
    textcolor:{
      fontFamily:'Helvetica Rounded',
      //shadowColor:'black',
      fontSize:WINDOW_WIDHT/36 ,
      color:'gray'
      
    },
    textcolor_bold:{
      fontFamily:'Helvetica Rounded Bold',
      //shadowColor:'black',
      fontSize:15,
      color:'gray',
      fontWeight:'bold'
    },
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      fontFamily:'Helvetica',
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    titletext:{
      fontFamily:'Helvetica',
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      }
    
  })
  export const styles_slider = StyleSheet.create({
    wrapper: {
padding:10,
height:WINDOW_HEIGHT/4

    },
    slide1: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     

    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      padding:5,
      fontWeight:"bold",
        color:"gray",
        opacity: 0.8,
        fontFamily:"GmarketSansTTFMedium",
        fontSize:WINDOW_WIDHT/30
      
    }
  })
  
  export const styles_main = StyleSheet.create({
header_black:{
  backgroundColor: "#5271ff", 
  height:20
},
    header_con:{
  flexDirection:"row",
  paddingTop:10,
  backgroundColor: "#5271ff",
  justifyContent:"space-around",
  color:"#fff",
  fontWeight:"700",
  fontFamily:"Helvetica",
  fontSize:WINDOW_WIDHT/20
},header_text:{
  justifyContent:"space-between",color:"#fff",fontWeight:"700",fontFamily:"Helvetica",fontSize:WINDOW_WIDHT/20

},stick:{
  paddingHorizontal:10,
  margin:10,
borderBottomWidth:1,
opacity:0.3,
color:"gray"

},
    main_con:{
      height:WINDOW_HEIGHT*0.94,
  backgroundColor:"#5271ff",
marginBottom:WINDOW_HEIGHT/13,
 borderRadius:10,
},
    main_sc :{
  margin:20,

flex:1,
flexDirection:"column",
justifyContent:"center",
alignItems:"center"

},
text_b:{
  padding:10,
  color:"black",
  opacity: 0.8,
  fontFamily:"GmarketSansTTFMedium",
  fontSize:WINDOW_WIDHT/30
},
text_w:{
  padding:10,
color:"white",
opacity: 0.8,
fontFamily:"GmarketSansTTFMedium",
fontSize:WINDOW_WIDHT/30

},text_g:{
  padding:10,
  color:"black",
  opacity: 0.8,
  fontFamily:"GmarketSansTTFMedium",
  fontSize:WINDOW_WIDHT/40
  
  },box_b:{
    alignItems:"center",
   justifyContent:"center",
    backgroundColor:"black",
    opacity: 0.8,
   borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopEndRadius:30,
    borderColor:'black',

    height:WINDOW_HEIGHT/20,
    width:WINDOW_WIDHT*0.6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  box_board:{
    borderWidth: 1,
    alignItems:"center",
   justifyContent:"center",
    opacity: 0.8,
borderRadius:5,

    borderColor:'#E2E2E2',
    shadowColor:"black",
  },title_h1:{

    padding:10,
    alignItems:"center",
   justifyContent:"center",
   color:"black",
    opacity: 0.8,
    fontFamily:"GmarketSansTTFBold",
    fontSize:WINDOW_WIDHT/20,
    fontWeight:"bold"
  },
  title_h4:{

    padding:10,
    alignItems:"center",
   justifyContent:"center",
   color:"black",
    opacity: 0.8,
    fontFamily:"GmarketSansTTFBold",
    fontSize:WINDOW_WIDHT/40,
    fontWeight:"bold"},
    title_h2:{

      padding:10,
      alignItems:"center",
     justifyContent:"center",
     color:"black",
      opacity: 0.8,
      fontFamily:"GmarketSansTTFBold",
      fontSize:WINDOW_WIDHT/30,
      fontWeight:"bold"},
  
  box_shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },mbox:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
    borderRadius:20,
    backgroundColor :"white",
   
    padding:10,
    margin:15
  },
  main_card:{
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 

   
    padding:10,
    marginVertical:10,
  },
  main_card_nomargin:{
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 

   


  },
  main_card_title:{
color:"black",
opacity:0.8,

fontFamily:"GmarketSansTTFBold",
fontSize:WINDOW_WIDHT/15,
fontWeight:'bold'
  },
  main_card_sub:{
    color:"black",
    opacity:0.8,
    fontFamily:"GmarketSansTTFMedium",
    fontSize:WINDOW_WIDHT/20,
    fontWeight:'bold'
    
      },
      main_card_text:{
        color:"black",
        opacity:0.8,
        fontFamily:"GmarketSansTTFMedium",
        fontSize:WINDOW_WIDHT/30
      },
      main_card_divide:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
      },
      main_card_img:{
        flex:2,
        backgroundColor:"gray",
        resizeMode: "cover",
        borderRadius:5,
        height:WINDOW_HEIGHT>WINDOW_WIDHT? WINDOW_HEIGHT/8:WINDOW_HEIGHT/2,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        marginRight:10,
        opacity:0.8
      },main_card_divt:{
        borderRadius:5,
        marginLeft:10,
        padding:10,
       
        flex:3,
        justifyContent:"space-around",
        alignItems:"flex-start",
       
       
      },icon_con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      logo_img:{
        width:WINDOW_WIDHT/3,
        padding:10,
      
        resizeMode:"contain"
      },tabbar_text:{
   
        color:"white",
        opacity: 0.8,
        fontFamily:"GmarketSansTTFMedium",
        fontSize:WINDOW_WIDHT/30
      },chart_con:{
        
      
        flex:1,alignContent:"center",flexDirection:"row",alignItems:"center"


      }



  })