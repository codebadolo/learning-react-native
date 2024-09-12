import { View, Text  ,SafeAreaView , StyleSheet , ScrollView} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView>
     <View >
    <Text> Home page </Text>

  </View>
</SafeAreaView>
  ) ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  bgn:{
    backgroundColor:'#61dafb',
  } ,
  title: {
    marginTop: 24,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Home