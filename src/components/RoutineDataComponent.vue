<template>
  <nb-container>
    <nb-body>
      <nb-h3 class='title'>{{exercise.title}}</nb-h3>
      <nb-text class='content'>{{exercise.content}}</nb-text>
      <nb-text>Seu objetivo aqui é fazer {{exercise.sessions}} sessões de {{exercise.repetitions}} repetições</nb-text>
    </nb-body>
  </nb-container>
</template>

<script>
export default {
  name: 'routineDataComponent',
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      exercise: {}
    }
  },
  created() {
    this.exercise = this.navigation.getParam('exercise');
  }
}
</script>

<style scoped>

.title {
  margin-top: 10%;
}

.content {
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>
