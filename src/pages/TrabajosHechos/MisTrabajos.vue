
<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { trabajos, type Trabajos } from './data';

const route = useRoute()
const router = useRouter()
const mitrabajo =ref<Trabajos | undefined>(
    trabajos.find(char => char.id === Number(route.params.id))
)
</script>

<template>
    <div v-if="mitrabajo" class="flex flex-col w-full max-w-[1400px] m-10 mx-auto my-8 px-5 md:px-20">
        <div>
            <h1 class="titulus"> 
                {{mitrabajo.titulus}}
            </h1>
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <img 
                class="flex shadow"
                :src="`../imagines/Trabajos/${ mitrabajo.imago }`" 
                alt="" />
            <img 
                class="flex shadow"
                :src="`../imagines/Trabajos/${ mitrabajo.imago2 }`" 
                alt="" />
            <img 
                class="flex shadow"
                :src="`../imagines/Trabajos/${ mitrabajo.imago3 }`" 
                alt="" />
            <img 
                class="flex shadow"
                :src="`../imagines/Trabajos/${ mitrabajo.imago4 }`" 
                alt="" />
            <img 
                class="flex shadow"
                :src="`../imagines/Trabajos/${ mitrabajo.imago5 }`" 
                alt="" />
        </div>
        
            <div class="toda-la-info">
                <p class="descriptione">
                    {{ mitrabajo.descripcione }}
                </p>
                        
                <div class="info-secundaria">
                    <p class=""> 
                       {{ mitrabajo.date }}
                    </p>
                    <p class="">
                        {{ mitrabajo.cliente }}
                    </p>
                    <p class="mb-1">
                        {{ mitrabajo.creditos }}
                    </p>
                    <p class="cursor-pointer border rounded-lg p-2" @click="router.push(`/trabajos`)">
                    Volver</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.titulus{
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 1024px) {
  .titulus{
    font-size: 3rem;
    line-height: 1;
  }
}
 
.descriptione {
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  max-width: 48rem;
}
 
 
@media (min-width: 1024px) {
    .toda-la-info {
    max-width: 35rem;
  }
}

.figure-quote {
  display: flex;
  justify-content: center;
  min-width: min-content;
}

.figure-quote > img {
  object-fit: contain;
}
.info-secundaria p {
    font-family: 'GeneralSans', sans-serif;
    color: #191050; 
    font-size: 0.8rem; /* Esto equivale a text-sm (aprox 14px) */
   
}
</style>