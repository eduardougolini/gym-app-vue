<template>
    <nb-container>
        <nb-text class="calories-counter">Calorias Restantes: {{ neededCalories | formatNumber }}</nb-text>
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
        <nb-label>Proteínas</nb-label>
        </nb-view>
        <nb-body :style="{width: '100%'}">
            <nb-view class="background">
            <nb-row
                v-bind:width="proteinsProgress"
                class="progress"></nb-row>
            </nb-view>
        </nb-body>

        <nb-view :style="{marginLeft: '10%'}">
        <nb-label>Gordura</nb-label>
        </nb-view>
        <nb-body :style="{width: '100%'}">
            <nb-view class="background">
            <nb-row
                v-bind:width="fatsProgress"
                class="progress"></nb-row>
            </nb-view>
        </nb-body>

        <nb-footer class="footer">
            <nb-button
                 transparent
                :onPress="showOptions">
                <nb-icon class="icon" name="add-circle"></nb-icon><nb-text>Adicionar Refeição</nb-text>
            </nb-button>
         </nb-footer>
    </nb-container>
</template>

<script>
import { ActionSheet } from "native-base";
import Store from '../store/index';

export default {
  name: "nutritionTabComponent",
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      userData: {},
      tdee: 0,
      neededCalories: 0,
      nowDate: '',
      carbsProgress: "0%",
      proteinsProgress: "0%",
      fatsProgress: "0%",
      mealOptions: ["Café da manhã", "Almoço", "Janta", "Lanches", "Cancelar"],
      optionCancelIndex: 4,
      clicked: 0
    };
  },
  beforeMount() {
    let date = new Date();
    this.nowDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`;
    this.userData = Store.getters["User/getUserData"];
    this.tdee = this.neededCalories = ((this.userData['height'] * 6.25) + (this.userData['weight'] * 9.99) - (this.userData['age'] * 4.92) + 5) * 1.55;
    this.loadMeals();
  },
  methods: {
    showOptions: function() {
      ActionSheet.show({
        options: this.mealOptions,
        cancelButtonIndex: this.optionCancelIndex,
        title: "Selecione uma opção"
      },
      buttonIndex => {
        this.clicked = buttonIndex;
      });
    },
    loadMeals: function() {
      fetch(`http://192.168.5.113:3000/getMeals?user=${encodeURIComponent(this.userData._id)}&date=${encodeURIComponent(this.nowDate)}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
      .then((responseJson) => {
        this.calculateNeededCalories(responseJson);
      }).catch((error) => {
        console.log(error);
        Alert.alert(
          'Falha',
          'Falha ao receber as refeições',
          [
            {text: 'OK'}
          ],
          { cancelable: false }
        );
      });
    },
    calculateNeededCalories(meals) {
      const neededCarbPercent = 50;
      const neededProteinPercent = 20;
      const neededFatPercent = 30;
      let fat = 0;
      let protein = 0;
      let carb = 0;

      for(meal of meals) {
        fat += meal.fats;
        protein += meal.proteins;
        carb += meal.carbs;
      }

      this.carbsProgress = ((carb * 4 * 100) / (this.tdee * neededCarbPercent / 100)) + '%';
      this.proteinsProgress = ((protein * 4 * 100) / (this.tdee * neededProteinPercent / 100)) + '%';
      this.fatsProgress = ((fat * 9 * 100) / (this.tdee * neededFatPercent / 100)) + '%';

      this.neededCalories = this.tdee - (carb * 4) - (protein * 4) - (fat * 9);
    }
  },
  watch: {
    clicked(value) {
      if (this.mealOptions[value] === undefined || value === this.optionCancelIndex) {
        return;
      }

      this.navigation.navigate('AddMeal', {
        'mealType': this.mealOptions[value]
      });
    }
  },
  filters: {
    formatNumber: (value) => {
      return parseInt(value);
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

.icon {
  margin-right: 0px;
}
</style>