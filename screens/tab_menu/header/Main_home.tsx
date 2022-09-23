

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View ,StatusBar ,Button,ScrollView, Alert,TouchableOpacity,Image, Settings, SafeAreaView } from 'react-native';
import SiteUp from '../SignUp'
const Stack = createStackNavigator();

const Main_home =()=>{

    return(
<>

<NavigationContainer>



<Stack.Navigator      
            screenOptions={
             
              {
                headerShown:false,
               headerTitle:"차량 출입 기록",
              headerStyle: {
                
               
              },
              headerTintColor: "black",
              headerBackTitle: "",
             
            }}
            

             
          >

    <Stack.Screen name="main" component={SiteUp} options={
             
             {
            
             }}/>
          </Stack.Navigator>

</NavigationContainer>

</>

    )
}

export default Main_home