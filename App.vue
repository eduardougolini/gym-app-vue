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
import AddMealComponent from './src/components/AddMealComponent';

Vue.use(VueNativeBase);

const AppNavigation = StackNavigator(
  {
    Login: LoginComponent,
    Home: HomeComponent,
    SignUp: SignUpComponent,
    ForgotPassword: ForgotPasswordComponent,
    AddMeal: AddMealComponent
  },
  {
    initialRouteName: 'Login',
  }
);

export default {
  components: { 
    Root,
    AppNavigation 
  },
  created: function() {
    this.loadFonts();
  },
  methods: {
    loadFonts: async function() {
      try {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
      } catch (error) {
        console.log("some error occured", error);
      }
    }
  }
}
</script>