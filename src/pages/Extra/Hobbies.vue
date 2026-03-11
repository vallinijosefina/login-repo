<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

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
  }, 800); // 7000ms = 7 segundos
});

onUnmounted(() => {
  // Limpiamos el timer para evitar fugas de memoria
  clearInterval(timer);
});


const Curious = ref<string>('ill.png')

</script>

<template>
    <div class=" min-h-[900px] text-white "
            :style="{
                backgroundImage: `url('/imagines/Presentacion/papel2.png')`,
                backgroundSize: 'cover',
            }"> 
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
        <img 
            src="/imagines/Hobbies/Rulo.png" 
            alt=""
            class="w-[80px] mx-4 flex justify-end items-center"
            >
        <div class=" grid grid-col md:grid-cols-2 space-x-15 space-y-20 justify-center justify-items-center mx-auto w-fit ">
           <HoverCard >
                <HoverCardTrigger class="w-[250px] h-auto">
                    <img class="w-60 h-auto" src="/imagines/Hobbies/AAmo.png" alt="">
                </HoverCardTrigger>
                <HoverCardContent >
                <img src="/imagines/Hobbies/Family.jpg" alt="">
                <p  class="descrip">A mi familia y amigos</p>
                </HoverCardContent>
            </HoverCard>
             <HoverCard>
                <HoverCardTrigger class="w-[180px] h-auto mb-4">
                    <img class="w-60 h-auto" src="/imagines/Hobbies/Arg.png" alt="">
                </HoverCardTrigger>
                <HoverCardContent>
                <img src="/imagines/Hobbies/SantaFe.JPG" alt="">
                
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger>
                    <img class="w-60 h-auto" src="/imagines/Hobbies/Pasion.png" alt="">
                </HoverCardTrigger>
                <HoverCardContent>
                <img src="/imagines/Hobbies/Dance.png" alt="">
                <p class="descrip">Bailar todos los estilos de danza que puedan existir</p>
                </HoverCardContent>
            </HoverCard>
             <HoverCard>
                <HoverCardTrigger>
                    <img class="w-60 h-auto cursor-pointer" src="/imagines/Hobbies/Comida.png" alt="">
                </HoverCardTrigger>
                <HoverCardContent side="left" class="w-48 mr-2">
                    <img src="/imagines/Hobbies/Papa.avif" alt="">
                    <p class="descrip">Pastel de papa de mi abuela</p>
                </HoverCardContent>
                <HoverCardContent side="right" class="w-48 ml-2">
                    <img src="/imagines/Hobbies/Alfa.jpeg" alt="">
                    <p class="descrip">Y los alfajores</p>
                </HoverCardContent>
            </HoverCard>
            <HoverCard>
                <HoverCardTrigger class="w-[170px] h-auto">
                    <img class="cursor-pointer" src="/imagines/Hobbies/Musica.png" alt="">
                </HoverCardTrigger>
                    <HoverCardContent side="left" class="w-48 mr-2">
                        <img src="/imagines/Hobbies/Musica/Grasa.jpg" alt="">
                    </HoverCardContent>
                     <HoverCardContent side="top" class="w-48 mr-2">
                        <img src="/imagines/Hobbies/Musica/Milo.jpg" alt="">
                    </HoverCardContent>
                    <HoverCardContent side="right" class="w-48 ml-2">
                        <img src="/imagines/Hobbies/Musica/Ari.png" alt="">
                    </HoverCardContent>
            </HoverCard>

            <HoverCard>
                <HoverCardTrigger class="w-[250px] h-auto">
                    <img class="cursor-pointer" src="/imagines/Hobbies/Dream.png" alt="">
                </HoverCardTrigger>
                    <HoverCardContent>
                        <img src="/imagines/Hobbies/dreams.PNG" alt="">
                    </HoverCardContent>
            </HoverCard>
        </div>
    </div>
</template>

<style scoped>
.paper-container {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px;
}
 .paper-img {
  max-width: 300px;
  height: auto;
} 
 

</style>