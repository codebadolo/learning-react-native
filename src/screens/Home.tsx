import { View, Text  ,SafeAreaView , StyleSheet , Image, ScrollView} from 'react-native'
import React from 'react'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <SafeAreaView style ={ styles.bgn }  >
   <View>
   <Hero />
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
    backgroundColor:'#',

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