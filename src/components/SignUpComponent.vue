<template>
  <nb-container>
    <nb-form>
        <nb-item floatingLabel class="name-input">
          <nb-label>Nome Completo</nb-label>
          <nb-input v-model="userData.name" autoCapitalize="words"/>
        </nb-item>
        <nb-item floatingLabel class="email-input">
          <nb-label>E-mail</nb-label>
          <nb-input v-model="userData.email" autoCapitalize="none" keyboardType="email-address"/>
        </nb-item>
        <nb-item floatingLabel class="password-input">
          <nb-label>Senha</nb-label>
          <nb-input v-model="userData.password" autoCapitalize="none" secureTextEntry/>
        </nb-item>
        <nb-item floatingLabel class="weight-input">
          <nb-label>Peso(kg)</nb-label>
          <nb-input v-model="userData.weight" keyboardType="numeric"/>
        </nb-item>
        <nb-item floatingLabel class="height-input">
          <nb-label>Altura(cm)</nb-label>
          <nb-input v-model="userData.height" keyboardType="numeric"/>
        </nb-item>
        <nb-body class="signup-button-block">
          <nb-button :onPress="registerUser">
            <nb-text>Cadastrar</nb-text>
          </nb-button>
        </nb-body>
    </nb-form>
  </nb-container>
</template>

<script>

import { Alert } from 'react-native';

export default {
  name: 'signUpComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => {
    return {
      userData: {
        name: '',
        email: '',
        password: '',
        weight: '',
        height: ''
      }
    }
  },
  methods: {
    registerUser: function() {
      console.log(this.userData)
      fetch('http://192.168.5.113:3000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.userData)
      }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(
          'Sucesso',
          'Seu usuário foi criado com sucesso',
          [
            {text: 'OK', onPress: () => this.navigation.navigate('Home')},
          ],
          { cancelable: false }
        );
      }).catch((error) => {
        console.log(error);
      });;
    }
  }
}
</script>

<style scoped>

.signup-button-block {
  margin-top: 50px;
}

</style>
