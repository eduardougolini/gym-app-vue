<template>
  <nb-container class="container">
    <nb-h3 class="title">Adicionando {{ meal.type }}</nb-h3>
    <nb-form>
      <nb-item floatingLabel class="fat-input">
        <nb-label>Gorduras(g)</nb-label>
        <nb-input v-model="meal.fats" keyboardType="numeric" />
      </nb-item>
      <nb-item floatingLabel class="carb-input">
        <nb-label>Carboidratos(g)</nb-label>
        <nb-input v-model="meal.carbs" keyboardType="numeric" />
      </nb-item>
      <nb-item floatingLabel class="protein-input">
        <nb-label>Proteínas(g)</nb-label>
        <nb-input v-model="meal.proteins" keyboardType="numeric" />
      </nb-item>
      <nb-grid :style="{ marginTop: 40}">
        <nb-row :style="{ marginLeft: '17%' }">
          <nb-button
            :onPress="addMeal">
            <nb-text>Adicionar</nb-text>
          </nb-button>
          <nb-button 
            dark 
            :style="{ marginLeft: 15}"
            :onPress="() => { this.props.navigation.navigate('Drawer') }">
            <nb-text>Cancelar</nb-text>
          </nb-button>
        </nb-row>
      </nb-grid>
    </nb-form>
  </nb-container>
</template>

<script>
import Store from '../store/index';
import { Alert } from 'react-native';

export default {
  name: 'addMealComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      userData: {},
      meal: {
        user: '',
        fats: 0,
        carbs: 0,
        proteins: 0,
        type: '',
        date: ''
      }
    }
  },
  created() {
    let date = new Date();
    this.userData = Store.getters["User/getUserData"];
    this.meal.user = this.userData._id;
    this.meal.type = this.navigation.getParam('mealType');
    this.meal.date = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`;
  }, 
  methods: {
    addMeal: function() {
      fetch('http://192.168.5.113:3000/addMeal', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.meal)
      }).then(() => {
        this.navigation.navigate("Drawer");
      }).catch((error) => {
        Alert.alert(
          'Falha',
          'Falha ao cadastrar refeição',
          [
            {text: 'OK'}
          ],
          { cancelable: false }
        );
      });
    }
  }
}
</script>

<style scoped>

.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}

.title {
  margin-top: 25%;
}

.body {
  margin-top: 10%;
}

.fat-input,
.carb-input,
.protein-input {
  width: 80%;
}

</style>
