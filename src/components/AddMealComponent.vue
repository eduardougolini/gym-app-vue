<template>
  <nb-container class="container">
    <nb-h3 class="title">Adicionando {{ mealType }}</nb-h3>
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
        <nb-body class="body">
          <view class="center-container">
            <nb-button
              :onPress="loginAction">
              <nb-text>Adicionar</nb-text>
            </nb-button>
          </view>
        </nb-body>
    </nb-form>
  </nb-container>
</template>

<script>
export default {
  name: 'addMealComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      mealType: '',
      meal: {
        fats: 0,
        carbs: 0,
        proteins: 0
      }
    }
  },
  created() {
    this.mealType = this.navigation.getParam('mealType');
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
  margin-top: 15%;
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
