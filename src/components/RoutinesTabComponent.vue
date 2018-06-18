<template>
  <nb-container :style="{backgroundColor: '#fff'}">
        <nb-content padder>
            <nb-card :style="{width: 120, height: 150}">
                <nb-card-item>
                    <nb-left>
                        <nb-body>
                            <nb-text>Rotina 1</nb-text>
                        </nb-body>
                    </nb-left>
                </nb-card-item> 

                <nb-card-item cardBody class="card">
                    <image :source="cardImage" class="card-item-image"/>
                </nb-card-item>
                <nb-view class="background">
                    <nb-row
                        v-bind:width="firstRoutine"
                        class="progress"></nb-row>
                </nb-view>
            </nb-card>
        </nb-content>
      </nb-container>
</template>

<style>
.card-item-image {
  width: 120;
  height: 100;
}

.card {
  position: relative;
}

.background {
  width: 100%;
  height: 10;
  background-color: gray;
  position: absolute;
  bottom: 0;
}

.progress {
  background-color: blue;
  height: 10;
  position: absolute;
}
</style>    

<script>
import cardImage from "../assets/arm-routine.jpg";
export default {
  name: "routinesTabComponent",
  data: function() {
    return {
      firstRoutine: "45%",
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover"
        }
      }
    };
  }
};
</script>