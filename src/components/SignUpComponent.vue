<template>
  <nb-container>
    <nb-form>
        <nb-item floatingLabel class="name-input">
          <nb-label>Nome Completo</nb-label>
          <nb-input v-model="name" />
        </nb-item>
        <nb-item floatingLabel class="email-input">
          <nb-label>E-mail</nb-label>
          <nb-input v-model="email" />
        </nb-item>
        <nb-item floatingLabel class="password-input">
          <nb-label>Senha</nb-label>
          <nb-input v-model="password" />
        </nb-item>
        <nb-body class="signup-button-block">
          <nb-button>
            <nb-text>Cadastrar</nb-text>
          </nb-button>
        </nb-body>
    </nb-form>
  </nb-container>
</template>

<script>
export default {
  name: 'signUpComponent',
  data: () => {
    return {
      name: '',
      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>

.signup-button-block {
  margin-top: 50px;
}

</style>
