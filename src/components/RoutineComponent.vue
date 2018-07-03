<template>
  <nb-container>
    <nb-list>
      <nb-list-item
          v-for="exercise in exercisesList"
          :key="exercise.title"
          button
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
