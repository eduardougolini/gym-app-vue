<template>
  <nb-container>
    <nb-list :style="{ marginTop: 15 }">
      <nb-list-item
          v-for="exercise in exercisesList"
          :key="exercise.title"
          button
          :onPress="() => this.props.navigation.navigate('RoutineData', {
            exercise
          })"
      >
        <nb-left>
          <nb-text>
            {{exercise.title}}
          </nb-text>
        </nb-left>
        <nb-right>
          <nb-icon name="arrow-forward" class="body-icon-color" />
        </nb-right>
      </nb-list-item>
    </nb-list>
    <nb-grid :style="{ marginTop: 40}">
      <nb-row :style="{ marginLeft: '33%' }">
        <nb-button 
          dark 
          :style="{ marginLeft: 15}"
          :onPress="() => { this.props.navigation.navigate('Drawer') }">
          <nb-text>Voltar</nb-text>
        </nb-button>
      </nb-row>
    </nb-grid>
  </nb-container>
</template>

<script>
import Store from '../store/index';
import { Alert } from 'react-native';

export default {
  name: 'routineComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      userData: {},
      exercisesList: []
    }
  },
  created() {
    this.userData = Store.getters["User/getUserData"];

    fetch(`http://192.168.5.113:3000/getExercises?user=${encodeURIComponent(this.userData._id)}&routine=${encodeURIComponent(this.navigation.getParam('routine'))}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      this.exercisesList = responseJson;
    }).catch((error) => {
      Alert.alert(
        'Falha',
        'Falha ao buscar treino',
        [
          {text: 'OK'}
        ],
        { cancelable: false }
      );
    });
  }
}
</script>
