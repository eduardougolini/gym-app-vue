<template>
  <nb-container>
    <nb-title class="title">Atualize seus dados</nb-title>
    <nb-form class="form">
      <nb-item :style="{ marginLeft: '20%' }" floatingLabel class="weight-input">
        <nb-label>Peso(kg)</nb-label>
        <nb-input v-model="weight" keyboardType="numeric"/>
      </nb-item>
      <nb-grid :style="{ marginTop: 40}">
        <nb-row :style="{ marginLeft: '30%' }">
          <nb-button
            :onPress="updateUserData">
            <nb-text>Atualizar</nb-text>
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
  name: 'configComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      userData: {},
      weight: 0
    }
  },
  created() {
    this.userData = Store.getters["User/getUserData"];
    this.weight = this.userData.weight;
  },
  methods: {
    updateUserData: function() {
      fetch(`http://192.168.5.113:3000/updateUserInfo/${this.userData._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        weight: this.weight
      })
    }).then((response) => response.json())
    .then((responseJson) => {
      Store.dispatch('User/updateUserData', responseJson);
      this.navigation.navigate('Drawer');
    }).catch((error) => {
      Alert.alert(
        'Falha',
        'Falha ao atualizar dados do usuário',
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

.title {
  margin-top: 40%;
  margin-bottom: 5%;
}

.form {
  flex: 1;
  align-content: center;
  width: 80%;
}

</style>
