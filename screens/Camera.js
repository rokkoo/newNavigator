import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Camera extends Component {
  render() {
    return (
      <View style={ styles.container } >
        <Text> Camera page </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});