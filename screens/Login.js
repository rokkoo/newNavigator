import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Login extends Component {
goMain() {
    this.props.navigation.navigate("Main")
}
  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity
            onPress={() => this.goMain()}
         >
            <Text> Login page </Text>
        </TouchableOpacity>
      </View>
    );
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


export default Login;
