<template>
  <nb-container>
    <imageBackground class="header" :source="dumbbellImage" :style="{width: '100%', resizeMode: 'cover'}">
      <nb-button 
        transparent 
        :style="{ marginLeft: 5 }"
        :onPress="() => { this.props.navigation.navigate('DrawerOpen') }">
        <nb-icon name="menu" :style="{ color: 'white' }" />
      </nb-button>
      <nb-view :style="{ flex: 1, alignItems: 'center' }">
        <nb-thumbnail large :source="userImage" />
        <nb-text :style="{ marginTop: 10, color: 'white' }">Você está a {{ userData.daysWithoutTraining }} dias sem treinar</nb-text>
      </nb-view>
    </imageBackground>
    <nb-tabs>
      <nb-tab :heading="getRoutinesTabHeading()">
        <routines-tab-component :navigation="navigation"/>
      </nb-tab>
      <nb-tab :heading="getGraphicsTabHeading()">
        <graphics-tab-component />
      </nb-tab>
      <nb-tab :heading="getNutritionTabHeading()">
        <nutrition-tab-component :navigation="navigation"/>
      </nb-tab>
    </nb-tabs>
  </nb-container>
</template>

<script>

import userImage from "../assets/user.jpg";
import dumbbellImage from "../assets/background.jpg";
import RoutinesTabComponent from './RoutinesTabComponent';
import GraphicsTabComponent from './GraphicsTabComponent';
import NutritionTabComponent from './NutritionTabComponent';
import React from 'react';
import { TabHeading, Icon, Text } from 'native-base';
import Store from '../store/index';

export default {
  name: 'homeComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => {
    return {
      userData: {},
      userImage: userImage,
      dumbbellImage: dumbbellImage
    }
  },
  components: {
    GraphicsTabComponent,
    NutritionTabComponent,
    RoutinesTabComponent
  },
  beforeMount() {
    this.loadUserData();
  },
  methods: {
    loadUserData: function() {
      this.userData = Store.getters["User/getUserData"];
    },
    getRoutinesTabHeading: () => {
      return (
        <TabHeading>
          <Icon name="bicycle" />
        </TabHeading>
      );
    },
    getGraphicsTabHeading: () => {
      return (
        <TabHeading>
          <Icon name="pie" />
        </TabHeading>
      );
    },
    getNutritionTabHeading: () => {
      return (
        <TabHeading>
          <Icon name="nutrition" />
        </TabHeading>
      );
    }
  }
}
</script>

<style scoped>
  .header {
    height: 180px;
    padding-top: 10px;
  }
</style>
