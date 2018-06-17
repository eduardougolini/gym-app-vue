<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>
 
<script>

import Vue from "vue-native-core";
import { StackNavigator } from "vue-native-router";
import { Root, VueNativeBase } from "native-base";
import LoginComponent from './src/components/LoginComponent';
import HomeComponent from './src/components/HomeComponent';
import SignUpComponent from './src/components/SignUpComponent';
import ForgotPasswordComponent from './src/components/ForgotPasswordComponent';

Vue.use(VueNativeBase);

const AppNavigation = StackNavigator(
  {
    Login: LoginComponent,
    Home: HomeComponent,
    SignUp: SignUpComponent,
    ForgotPassword: ForgotPasswordComponent
  },
  {
    initialRouteName: 'Login',
  }
);

export default {
    components: { 
      Root,
      AppNavigation 
    }
}
</script>