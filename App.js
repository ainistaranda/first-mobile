import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName={'Max'}/>
      <Welcome firstName={'Kevin'}/>
      <Text style={styles.bigText}>Hello!⚡️</Text>
      <Counter/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: '125vw',
    color: 'white',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#5c1010',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
