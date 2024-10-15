import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import useTimers from './useTimers'; // Import the custom hook
import { styles } from './style'; // Import your styles

// Validation function to allow only numbers and validate time inputs
const validateInput = (value) => {
  return value.replace(/[^0-9]/g, '').slice(0, 2);
};

const TimerApp = () => {
  const {
    timers,
    timerInputs,
    addTimer,
    handleInputChange,
    startTimer,
    pauseTimer,
    resetTimer,
  } = useTimers(); // Use the custom hook

  const renderTimer = ({ item }) => {
    const { hours, minutes, seconds } = timerInputs[item.id] || { hours: '', minutes: '', seconds: '' };

    return (
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>
          {`${String(item.hours).padStart(2, '0')}:${String(item.minutes).padStart(2, '0')}:${String(item.seconds).padStart(2, '0')}`}
        </Text>

        <View style={styles.timeInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="HH"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(value) => handleInputChange(item.id, 'hours', validateInput(value))}
            value={hours}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.input}
            placeholder="MM"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(value) => handleInputChange(item.id, 'minutes', validateInput(value))}
            value={minutes}
          />
          <Text style={styles.colon}>:</Text>
          <TextInput
            style={styles.input}
            placeholder="SS"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={(value) => handleInputChange(item.id, 'seconds', validateInput(value))}
            value={seconds}
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => (item.running ? pauseTimer(item.id) : startTimer(item.id))}
          >
            <Text style={styles.buttonText}>{item.running ? 'Pause' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => resetTimer(item.id)}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TickTock Timer Hub</Text>
      <TouchableOpacity style={styles.button} onPress={addTimer}>
        <Text style={styles.buttonText}>Add Timer</Text>
      </TouchableOpacity>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <FlatList
          data={timers}
          renderItem={renderTimer}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false} 
        />
      </ScrollView>
    </View>
  );
};

export default TimerApp;
