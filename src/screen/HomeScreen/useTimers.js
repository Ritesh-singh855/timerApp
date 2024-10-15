import { useState } from 'react';
import { Alert } from 'react-native';

const useTimers = () => {
  const [timers, setTimers] = useState([]);
  const [timerInputs, setTimerInputs] = useState({});

  // Function to add a new timer
  const addTimer = () => {
    if (timers.length < 5) {
      const newTimer = {
        id: Date.now().toString(),
        hours: 0, // Default hours
        minutes: 0, // Default minutes
        seconds: 0, // Default seconds 
        running: false,
        intervalId: null,
      };
      setTimers((prevTimers) => [...prevTimers, newTimer]);
    } else {
      Alert.alert('Limit Reached', 'You can only add up to 5 timers.');
    }
  };

  // Function to handle input change for hours, minutes, and seconds
  const handleInputChange = (timerId, field, value) => {
    setTimerInputs((prevInputs) => ({
      ...prevInputs,
      [timerId]: {
        ...prevInputs[timerId],
        [field]: value
      }
    }));
  };

  // Helper function to decrement the time by 1 second
  const decrementTime = (id) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) => {
        if (timer.id === id) {
          let { hours, minutes, seconds } = timer;
          if (seconds > 0) {
            seconds--;
          } else if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            clearInterval(timer.intervalId);
            Alert.alert('Timer Ended', `Timer ${id} has finished!`);
          }
          return { ...timer, hours, minutes, seconds };
        }
        return timer;
      })
    );
  };

  // Function to start a timer
  const startTimer = (id) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) => {
        if (timer.id === id && !timer.running) {
          const intervalId = setInterval(() => decrementTime(id), 1000);
          return { ...timer, running: true, intervalId };
        }
        return timer;
      })
    );
  };

  // Function to pause a timer
  const pauseTimer = (id) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) => {
        if (timer.id === id && timer.running) {
          clearInterval(timer.intervalId);
          return { ...timer, running: false };
        }
        return timer;
      })
    );
  };

  // Function to reset a timer
  const resetTimer = (id) => {
    const { hours = 0, minutes = 0, seconds = 0 } = timerInputs[id] || {};
    setTimers((prevTimers) =>
      prevTimers.map((timer) =>
        timer.id === id
          ? { ...timer, hours: parseInt(hours, 10), minutes: parseInt(minutes, 10), seconds: parseInt(seconds, 10), running: false }
          : timer
      )
    );

    // Clear the interval after resetting
    const timerToClear = timers.find((timer) => timer.id === id);
    if (timerToClear?.intervalId) {
      clearInterval(timerToClear.intervalId);
    }
  };

  return {
    timers,
    timerInputs,
    addTimer,
    handleInputChange,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default useTimers;
