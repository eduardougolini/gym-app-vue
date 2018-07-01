<template>
  <nb-container>

    <nb-body class="body">
      <nb-icon class="icon" name="person" :style="{fontSize: 70}"></nb-icon>

      <nb-form>
          <nb-item floatingLabel class="email-input">
            <nb-label>E-mail</nb-label>
            <nb-input v-model="credentials.email" autoCapitalize="none" keyboardType="email-address" />
          </nb-item>
          <nb-item floatingLabel class="password-input">
            <nb-label>Senha</nb-label>
            <nb-input v-model="credentials.password" autoCapitalize="none" secureTextEntry />
          </nb-item>
      </nb-form>

      <view class="forgot-password-container">
        <nb-button
          transparent
          :onPress="() => this.props.navigation.navigate('ForgotPassword')"
          >
          <nb-text 
            :style="{fontSize: 12, fontColor: '#333'}"
            >Esqueci minha senha</nb-text>
        </nb-button>
      </view>

      <view class="center-container">
        <nb-button
        :onPress="loginAction">
          <nb-text>Login</nb-text>
        </nb-button>
      </view>
      
      <nb-row class="horizontal-center-container">
        <nb-icon class="icon" name="logo-facebook" :style="{color: '#3B579D'}"></nb-icon>
        <nb-icon class="icon" name="logo-googleplus" :style="{color: '#DD5044'}"></nb-icon>
        <nb-icon class="icon" name="logo-twitter" :style="{color: '#55ACEE'}"></nb-icon>
      </nb-row>
    </nb-body>

    <nb-footer class="footer">
      <nb-button
        transparent
        :onPress="() => this.props.navigation.navigate('SignUp')">
          <nb-text>Criar nova conta</nb-text>
        </nb-button>
    </nb-footer>
  </nb-container>
</template>
 
<script>

import { Alert } from 'react-native';

export default {
  name: 'loginComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data: () => {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginAction: function() {
      fetch('http://192.168.5.113:3000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.credentials)
      }).then((response) => response.json())
      .then((responseJson) => {
        this.navigation.navigate('Home')
      }).catch((error) => {
        console.log(error)
        Alert.alert(
          'Falha',
          'Credenciais inválidas',
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


<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}

.body {
  width: 100%;
  margin-top: 15%;
}

.footer {
  border-color: transparent;
  background-color: transparent;
  height: 40px;
}

.email-input,
.password-input {
  width: 80%;
}

.center-container {
  margin-top: 40px;  
}

.horizontal-center-container {
  margin-top: 20px;
}

.icon {
  margin-left: 30px;
  margin-right: 30px;
}

</style>
