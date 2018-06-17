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
        <nb-input />
      </nb-item>
    </nb-form>

    <nb-body :style="{marginTop: 20}">
      <nb-button>
        <nb-text>
          Recuperar
        </nb-text>
      </nb-button>
    </nb-body>
  </nb-body>
</template>

<script>
export default {
  name: 'forgotPasswordComponent'
}
</script>

<style scoped>

  .email-input {
    width: 80%;
  }

</style>
