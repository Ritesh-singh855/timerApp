import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeNavigation from './src/navigation/HomeNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
          <HomeNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
