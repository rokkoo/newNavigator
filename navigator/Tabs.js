import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Main, Camera, Profile } from './../screens';

export default createBottomTabNavigator({
  Home: Main,
  Camera: Camera,
  Profile: Profile
});