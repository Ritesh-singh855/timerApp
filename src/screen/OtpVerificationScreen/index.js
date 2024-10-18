import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Button
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { styles } from './style'; 


function Otp({route}) {
    const [otp, setOtp] = useState('');
    const navigation = useNavigation();
    const {mobile} = route.params;
    console.log(route)

 const handelOtpVerification = ()=>{
  axios.post('https://www.tatd.in/app-api/driver/login/verify-otp-login.php',{ "mobile": mobile, "otp": otp }).then(
    navigation.navigate('Home',{mobile})
  )
 }


  return (
    <View style={styles.container}>
       <TextInput
      style={styles.input}
      placeholder="Enter your OTP"
      value={otp}
      onChangeText={setOtp}
      />
  
    <TouchableOpacity style={styles.button} title='Verify OTP' onPress={handelOtpVerification}>
    <Text ></Text>
    </TouchableOpacity>
    
    </View>
  );
};

export default Otp;
