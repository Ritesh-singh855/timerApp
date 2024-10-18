import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
  Button,
} from "react-native";
import axios from "axios";
import {useDispatch,
  // useSelector
} from "react-redux";
// import {toggleLanguage} from "

import { styles } from './style'; 


function Home({route}) {

  // const {} = route.params
  // const currentLanguage = useSelector(state => state.language.currentLanguage)
  // const dispatch = useDispatch()
  // const handelToggleLanguage = ()=>{
  // axios.post('https://www.tatd.in/app-api/driver/trusted-driver/switch-language-api.php',{ "action": "update_language", "current_language": "english" }).then(()=>{
  //   dispatch(toggleLanguage())
  // });

  
  

  // }

  return (
    <View style={styles.container}>
      <Text style={{paddingBottom:10}}>welcome, {}</Text>
      <Text style={{paddingBottom:10}}>current Language {}</Text>
      <Button title = "Toggle Language" />

     
    
    </View>
  );
};

export default Home;
