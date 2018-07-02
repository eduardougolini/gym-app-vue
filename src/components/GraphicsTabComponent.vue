<template>
  <nb-container :style="{backgroundColor: '#fff'}">
    <nb-content padder>
      <nb-grid>
        <nb-col>
          <nb-card :style="{width: 120, height: 150}" >
            <nb-card-item button :onPress="() => {console.log('clicou')}">
              <nb-left>
                <nb-body>
                  <nb-text class="line">Peso</nb-text>
                </nb-body>
              </nb-left>
            </nb-card-item> 
            <nb-card-item cardBody>
              <nb-text class="line">Você ganhou</nb-text> 
            </nb-card-item>
            <nb-card-item cardBody>
              <nb-title class="line">2 Kg</nb-title>
            </nb-card-item>
            <nb-card-item cardBody>
              <nb-text class="line">no último mês</nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
        <nb-col>
            <nb-card :style="{width: 120, height: 150}" >
            <nb-card-item button :onPress="() => {console.log('clicou')}">
              <nb-left>
                <nb-body>
                  <nb-text class="line">Força</nb-text>
                </nb-body>
              </nb-left>
            </nb-card-item> 
            <nb-card-item cardBody>
              <nb-text class="line">Você aumentou</nb-text> 
            </nb-card-item>
            <nb-card-item cardBody>
              <nb-text class="line">a carga em</nb-text> 
            </nb-card-item>
            <nb-card-item cardBody>
              <nb-title class="line">5%</nb-title>
            </nb-card-item>
            <nb-card-item cardBody>
              <nb-text class="line">no último mês</nb-text>
            </nb-card-item>
          </nb-card>
        </nb-col>
        <nb-col></nb-col>
      </nb-grid>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  name: 'graphicsTabComponent'
}
</script>

<style scoped>

.line {
  display: block;
  width: 100%;
  text-align: center;
}

</style>
