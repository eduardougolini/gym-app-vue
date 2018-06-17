<template>
  <nb-container>
    <nb-header class="header">
      <nb-view :style="{ flex: 1, alignItems: 'center' }">
        <nb-thumbnail large :source="userImage" />
        <nb-text :style="{ marginTop: 20 }">Você está a X dias sem treinar</nb-text>
      </nb-view>
    </nb-header>
    <nb-tabs>
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
import GraphicsTabComponent from './GraphicsTabComponent';
import NutritionTabComponent from './NutritionTabComponent';
import React from 'react';
import { TabHeading, Icon, Text } from 'native-base';

export default {
  name: 'homeComponent',
  data: () => {
    return {
      userImage: userImage
    }
  },
  components: {
    GraphicsTabComponent,
    NutritionTabComponent
  },
  methods: {
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
  }
</style>
