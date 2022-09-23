
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Card } from '@rneui/base';
import React, { Component, useState } from 'react';
import { TextInput, StyleSheet, View, Text, Alert, Button, TouchableOpacity, SafeAreaView, useWindowDimensions, Dimensions, Image } from 'react-native';
import comax from '../splash/comax.jpg'
import { signIn, signUp } from "../auth/auth";
import User from "../auth/user"

const Login=({navigation,state}:any)=> {

 
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, seterror] = useState('');
  const WINDOW_WIDHT = Dimensions.get("window").width; // Dimensions.get("screen").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;
  const login = (email: string, password: string) => {
    //alert(`email: ${email} password: ${password}`);
  }
  const signInSubmit = async () => { // 로그인 함수
    
    
    try {
     
     // Alert.alert("email : "+email+" password : "+password)
      const user = await signIn(email,password);
      const user_tocken = JSON.stringify(user)
      
     console.log(typeof user_tocken + user_tocken)

     
     
      if(typeof user_tocken !=="undefined"){
         let user_info = await User(email)

         console.log("유저 이름 : "+ JSON.stringify(user_info))
        
     

      
      
      AsyncStorage.setItem("uid",user_tocken)
     AsyncStorage.setItem("email",user_info[0].email);
     AsyncStorage.setItem("name",user_info[0].name)
     AsyncStorage.setItem("carnum",user_info[0].carnum)
     console.log("user tocken : "+user_tocken + user_info[0].email)
  }
     else{
      Alert.alert("이메일 또는 비밀번호를 정확히 입력하세요 !");

     }
     
      //Alert.alert(JSON.stringify(user));
    
      state(user_tocken)
    } catch (e) {
      seterror(err => err = ""+e)
      Alert.alert("이메일 또는 비밀번호를 정확히 입력하세요 !");
      console.log(""+e)
    }
  }
 
  return (
<>

      
   
      <View style={{flex:1,justifyContent:"center",alignContent:"center"}} >




            
         <Card>
          <Card.Title style={{marginTop:100,marginBottom:100}}>
             <Text>주차 관제 시스템 로그인 </Text>
           
 <Card.Divider />
 </Card.Title>
      
      

   


      <Text>
        이메일 및 비밀번호를 입력하세요.
      </Text> 
    


      <TextInput style={styles.textInput}
        placeholder = "Email"
        placeholderTextColor = "#b8b8d2"
        onChangeText={text => setEmail(text)} value={email} />
      <TextInput style={styles.textInput}
        placeholder = "Password"
        placeholderTextColor = "#b8b8d2"
        onChangeText={text => setPassword(text)} value={password} />
      <TouchableOpacity
        style= {styles.submitButton}
      
        onPress = {
          () => 
          
          signInSubmit()
        }>
          <Text style = {styles.submitButtonText}>로그인</Text>
        </TouchableOpacity>
        <Text> {error}</Text> 
       <Card.Divider/>
     <Card.FeaturedSubtitle>

     </Card.FeaturedSubtitle>
</Card>

        </View>
        
      
        <View style={{flex:1}}/> 
    </>
  );
};

const styles = StyleSheet.create({
  mainstyle : {
    
    padding:15,
    flex: 1,
fontFamily:"Roboto",
fontSize:20,
justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    margin: 15,
    height: 40,
    borderColor: '#b8b8d2',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#b8b8d2',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white'
  }
});
export default Login;

