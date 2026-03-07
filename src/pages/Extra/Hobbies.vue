<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue';

import img1 from '/imagines/Presentacion/Bt2.png'; 
import img2 from '/imagines/Presentacion/Bt3.png'; 
import img3 from '/imagines/Presentacion/Bt1.png'; 
import img4 from '/imagines/Presentacion/Bt1.png'; 
const images = [img1, img2, img3,img4];
const currentStep = ref(0);
let timer: number | undefined = undefined;

onMounted(() => {
  timer = setInterval(() => {
    // Incrementa el índice y vuelve a 0 al llegar al final
    currentStep.value = (currentStep.value + 1) % images.length;
  }, 600); // 7000ms = 7 segundos
});

onUnmounted(() => {
  // Limpiamos el timer para evitar fugas de memoria
  clearInterval(timer);
});
</script>

<template>
  <div class="paper-container">
    <transition name="fade" mode="out-in">
      <img 
        :key="currentStep" 
        :src="images[currentStep]" 
        alt="Papel abriéndose" 
        class="paper-img"
      />
    </transition>
  </div>
  <div>

  </div>
</template>

<style scoped>
.paper-container {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 8px;
}
 .paper-img {
  max-width: 300px;
  height: auto;
} 
 

</style>