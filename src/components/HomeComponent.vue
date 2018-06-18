<template>
  <nb-container>
    <imageBackground class="header" :source="dumbbellImage" :style="{width: '100%', resizeMode: 'cover'}">
      <nb-view :style="{ flex: 1, alignItems: 'center' }">
        <nb-thumbnail large :source="userImage" />
        <nb-text :style="{ marginTop: 20, color: 'white' }">Você está a X dias sem treinar</nb-text>
      </nb-view>
    </imageBackground>
    <nb-tabs>
      <nb-tab :heading="getRoutinesTabHeading()">
        <routines-tab-component />
      </nb-tab>
      <nb-tab :heading="getGraphicsTabHeading()">
        <graphics-tab-component />
      </nb-tab>
      <nb-tab :heading="getNutritionTabHeading()">
        <nutrition-tab-component />
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

export default {
  name: 'homeComponent',
  data: () => {
    return {
      userImage: userImage,
      dumbbellImage: dumbbellImage
    }
  },
  components: {
    GraphicsTabComponent,
    NutritionTabComponent,
    RoutinesTabComponent
  },
  methods: {
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
    height: 170px;
    padding-top: 10px;
  }
</style>
