<template>
    <nb-container>
        <nb-text class="calories-counter">Calorias Restantes: X</nb-text>
        <nb-view :style="{marginLeft: '10%'}">
        <nb-label>Carboidratos</nb-label>
        </nb-view>
        <nb-body :style="{width: '100%'}">
            <nb-view class="background">
            <nb-row
                v-bind:width="carbsProgress"
                class="progress"></nb-row>
            </nb-view>
        </nb-body>

        <nb-view :style="{marginLeft: '10%'}">
        <nb-label>Proteinas</nb-label>
        </nb-view>
        <nb-body :style="{width: '100%'}">
            <nb-view class="background">
            <nb-row
                v-bind:width="proteinProgress"
                class="progress"></nb-row>
            </nb-view>
        </nb-body>

        <nb-view :style="{marginLeft: '10%'}">
        <nb-label>Gordura</nb-label>
        </nb-view>
        <nb-body :style="{width: '100%'}">
            <nb-view class="background">
            <nb-row
                v-bind:width="fatProgress"
                class="progress"></nb-row>
            </nb-view>
        </nb-body>

        <nb-footer class="footer">
            <nb-button
                 transparent
                :onPress="showOptions">
                <nb-text>Adicionar Refeição</nb-text>
            </nb-button>
         </nb-footer>
    </nb-container>
</template>

<script>
import { ActionSheet } from "native-base";

export default {
  name: "nutritionTabComponent",
  data() {
    return {
      carbsProgress: "15%",
      proteinProgress: "30%",
      fatProgress: "45%",
      mealOptions: ["Café da manhã", "Almoço", "Janta", "Lanches", "Cancelar"],
      optionCancelIndex: 4,
      clicked: 0
    };
  },
  methods: {
      showOptions: function() {
            ActionSheet.show({
                options: this.mealOptions,
                cancelButtonIndex: this.optionCancelIndex,
                title: "Selecione uma opção"
            },
            buttonIndex => {
                this.clicked = this.mealOptions[buttonIndex];
            }
          );
      }
  }
};
</script>

<style scoped>
.calories-counter {
  margin-top: 10px;
  margin-bottom: 30px; 
  text-align: center;
}

.footer {
  border-color: transparent;
  background-color: transparent;
  height: 40px;
}

.background {
  width: 80%;
  height: 20px;
  background-color: gray;
  border-radius: 20px;
}

.progress {
  background-color: blue;
  height: 20px;
  position: absolute;
  border-radius: 20px;
}
</style>