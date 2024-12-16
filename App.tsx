import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Diet from './components/SurveyPage.tsx';


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <Diet/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
});

export default App;
