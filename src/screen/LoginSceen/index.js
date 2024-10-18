import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Button
} from "react-native";
import { styles } from './style'; 



function Login() {
    
    const [mobile, setMobile] = useState('');
    const [data, setData] = useState('');
const navigation = useNavigation()
    const handleLogin =() => {
        
        // if(mobile.length !== 0){
        //     Alert.alert('Invalid Mobile Number');
            console.log(data)
        // }
        // else{
            axios.post('https://www.tatd.in/app-api/driver/login/driver-login.php', { "mobile": mobile })
            .then((res) => {
            //   setData(res.data);  // Extract the data from the response
              navigation.navigate('otp',{mobile}) 
            })
            // .catch((error) => {
            //   console.error("There was an error!", error);  // Handle the error
            // });
    //
    // navigation.navigate('otp',{mobile}) 
 //8118813148
//)
console.log(data)

        // };
        return;
    }
// useEffect(() => {
//    axios.post('https://www.tatd.in/app-api/driver/login/driver-login.php',{"mobile": mobile}).then(
//         navigation.navigate('otp',{mobile}) )
// },[mobile])
    



  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Enter your Mobile number"
      keyboardType="numeric"
      maxLength={10}
      value={mobile}
      onChangeText={setMobile}
      />
      <Button title ='submit' onPress={handleLogin}/>
     
    
    </View>
  );
};

export default Login;
