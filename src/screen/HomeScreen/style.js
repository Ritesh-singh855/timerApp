// style.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'black'
  },
  title: {
    padding:10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black',
    backgroundColor:'white',
    borderWidth:5,
    borderColor:"red",
    borderRadius:10,
  },
  timerContainer: {
    marginVertical: 20,
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 40,
    width: '100%',
    backgroundColor:'white'
  },
  timerText: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 10,
  },
  timeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginVertical: 10,
    width: '30%',
    borderRadius: 10,
  },
  colon: {
    fontSize: 20,
    paddingHorizontal: 5,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'green', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white', // Set text color to white
    fontSize: 16,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    marginVertical: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
