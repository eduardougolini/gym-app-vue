<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>
 
<script>

import Vue from "vue-native-core";
import { StackNavigator } from "vue-native-router";
import { Root, VueNativeBase } from "native-base";
import HomeComponent from './src/components/HomeComponent';
import SignUpComponent from './src/components/SignUpComponent';

Vue.use(VueNativeBase);

const AppNavigation = StackNavigator(
  {
    Home: HomeComponent,
    SignUp: SignUpComponent
  },
  {
    initialRouteName: 'Home',
  }
);

export default {
    components: { 
      Root,
      AppNavigation 
    }
}
</script>