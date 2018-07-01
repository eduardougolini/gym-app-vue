<template>
  <nb-body class="content">
    <nb-icon name="lock" :style="{fontSize: 70}"></nb-icon>
    <nb-h1>Esqueceu sua senha?</nb-h1>
    <nb-text 
      :style="{textAlign: 'center', marginTop: 15}"
      >Nós só precisamos do seu e-mail para fazer a recuperação da senha</nb-text>
    
    <nb-form>
      <nb-item floatingLabel class="email-input">
        <nb-label>E-mail</nb-label>
        <nb-input keyboardType="email-address" />
      </nb-item>
    </nb-form>

    <nb-body :style="{marginTop: 20}">
      <nb-button :onPress="resetPassword">
        <nb-text>
          Recuperar
        </nb-text>
      </nb-button>
    </nb-body>
  </nb-body>
</template>

<script>

import { Alert } from 'react-native';

export default {
  name: 'forgotPasswordComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => {
    email: ''
  },
  methods: {
    resetPassword: function() {
      Alert.alert(
          'Sucesso',
          'Em alguns instantes você receberá um e-mail com as instruções para a recuperação da sua senha',
          [
            {text: 'OK', onPress: () => this.navigation.goBack()},
          ],
          { cancelable: false }
        );
    }
  }
}
</script>

<style scoped>

  .email-input {
    width: 80%;
  }

</style>
