import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hero = () => {
  return (
    <View>
      <Text style={styles.textsize}>this is the Hero</Text>
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
    textsize: {
        fontSize: 20,
   

    }

})