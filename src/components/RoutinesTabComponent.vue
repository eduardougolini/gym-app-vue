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

                <nb-card-item cardBody>
                    <image :source="cardImage" class="card-item-image"/>
                    <nb-body :style="{width: '100%'}">
                      <nb-view class="background">
                          <nb-row
                             v-bind:width="fatProgress"
                              class="progress"></nb-row>
                      </nb-view>
                    </nb-body>
                </nb-card-item>
            </nb-card>
        </nb-content>
      </nb-container>
</template>

<style>
.card-item-image {
  width: 120;
  height: 100;
}

.background {
  width: 50%;
  height: 20;
  background-color: gray;
}

.progress {
  background-color: blue;
  height: 20;
  position: absolute;
}
</style>    

<script>
import cardImage from "../assets/arm-routine.jpg";
export default {
  name: "routinesTabComponent",
  data: function() {
    return {
      fatProgress: "45%",
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