<template>
  <nb-container>

    <nb-body class="body">
      <nb-icon class="icon" name="person" :style="{fontSize: 70}"></nb-icon>

      <nb-form>
          <nb-item floatingLabel class="email-input">
            <nb-label>E-mail</nb-label>
            <nb-input />
          </nb-item>
          <nb-item floatingLabel class="password-input">
            <nb-label>Senha</nb-label>
            <nb-input secureTextEntry />
          </nb-item>
      </nb-form>

      <view class="forgot-password-container">
        <nb-text 
          :style="{fontSize: 12, fontColor: '#333'}"
          v-bind:onPress="() => this.props.navigation.navigate('ForgotPassword')"
          >Esqueci minha senha</nb-text>
      </view>

      <view class="center-container">
        <nb-button
        :onPress="() => this.props.navigation.navigate('Home')">
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
      <nb-text v-bind:onPress="() => this.props.navigation.navigate('SignUp')">Criar nova conta</nb-text>
    </nb-footer>
  </nb-container>
</template>
 
<script>

  export default {
    name: 'loginComponent',
    props: {
      navigation: {
        type: Object
      }
    },
    data: () => {
      return {
        emailInput: '',
        passwordInput: ''
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
  height: 35px;
}

.email-input,
.password-input {
  width: 80%;
}

.forgot-password-container {
  margin-top: 20px;  
}

.center-container {
  margin-top: 40px;  
}

.horizontal-center-container {
  margin-top: 20px;
}

.icon {
  margin-left: 10px;
  margin-right: 10px;
}

</style>
