<script lang="ts" setup>
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue'
import { scrollToSection } from '@/utils/ScrolltoSection'

import Button from '@/components/ui/button/Button.vue';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ref } from 'vue';
import { Card,CardContent } from '@/components/ui/card';
import { trabajos, type Trabajos } from '@/pages/TrabajosHechos/data';
const listaTrabajos = ref< Trabajos[]>( trabajos )

// import CarrusImagium from '@/components/CarrusImagium.vue';

const menuItems = [
    {
        label: 'SOBRE MI',
        href: '#Sobre-mi',
        onClick: () => scrollToSection('#Sobre-mi')
    },
    {
        label: 'TRABAJOS',
        href: '#Trabajos',
        onClick: () => scrollToSection('#Trabajos')
    },
    {
        label: 'CONTACTO',
        href: '#Contacto',
        onClick: () => scrollToSection('#Contacto')
    }
]
</script>



<template>
    <header class="mi-nombre flex items-center justify-between ">
        <img 
            class="w-35 px-6 m-2 hover:scale-250 ease-in-out"
            src="/imagines/minombre.png">
         <NavigatorPrimarius 
            class="px-6 py-4 "
            :items="menuItems" 
            home-route="/"/>
    </header>

    <section class="Inicio">
        <img src="/imagines/Presentacion.png"/>
    </section>

    <section id= "Sobre-mi" 
            class="flex flex-col md:flex-row items-center justify-between gap-2 m-10">
       
        <img 
            class="w-120 rounded object-cover object-center mt-2 mb-4  "
            src="/imagines/Trabajos/Fotografia/StandStillWarmer.png"
        >
        <div class="descripcion">
            <h1>SOBRE MI</h1>
            <p class="parrafo">Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia.Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia.Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia</p>
       </div>

       <Button variant="link"
                class="relative p-0 h-auto w-auto transition-all duration-300 animate-sacudida hover:pause-animation">
            <RouterLink to="/Hobbies">
             <img src="/imagines/Presentacion/Bt1.png" class=" object-contain" alt="Icono">
            
            </RouterLink>
     
        </Button>

    </section>

    <section id="Información-profesional"
            class="relative min-h-[400px] px-10 py-20 text-white"
            :style="{
                backgroundImage: `url('/imagines/Presentacion/Fondo.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed' 
            }">
         <div>
            <h1>INFORMACIÓN PROFESIONAL</h1>
            <p class="parrafo">Actualmente estoy en segundo año de la carrera Diseño y Tecnologías Creativas</p>
            <p class="parrafo">Poseo conocimientos en varios programas de Adobe, tales son Photoshop, Ilustrator, Indesign, Premiere</p>
            <div class="flex flex-row  w-[55px] h-[55px] mt-20 space-x-4" >
                <img src="/imagines/Presentacion/ill.png" alt="">
                <img src="/imagines/Presentacion/pho.png" alt=""> 
                <img src="/imagines/Presentacion/ind.png" alt="">
                <img src="/imagines/Presentacion/pre.png" alt="">
            </div>
        </div>
    </section>

    <section id="Trabajos">
        <div class="m-10">
            <h1 >TRABAJOS</h1>
            <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 ">
                <Card 
                    v-for="mitrabajo in listaTrabajos"
                    class="group relative overflow-hidden cursor-pointer object-contain h-full w-auto h-[450px] bg-[#191050] rounded"
                    :style="{
                        backgroundImage: ` url('/imagines/Trabajos/${ mitrabajo.imago }')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
                >
                    <CardContent 
                    class="absolute inset-0 h-full w-full flex flex-col items-center justify-center 
                opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out px-4"
      :style="{
          backgroundImage: `linear-gradient(rgba(25, 16, 80, 0.3), rgba(25, 16, 80, 0.2)), url('/imagines/Caards.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
      }"
      @click="$router.push(`/trabajo/${ mitrabajo.id }`)"
    >
      <h2 class="text-white text-2xl text-center font-GeneralSans-Light uppercase tracking-widest">
        {{ mitrabajo.titulus }}
      </h2>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>

    <section id="Contacto" class="mt-20 m-9 pt-3 border-t-4 border-[#20127ea2]">
        <h1 class="mb-6">CONTÁCTAME</h1>
        <div class="flex flex-col-2 sm:cols-1 gap-4 items-center ">
            <div class="justify-center text-center space-y-5">
                <p class="especial">¿Tienes un proyecto en mente?</p>
                <p>¡Hablemos!</p>
            </div>
            <form 
                    class="border rounded md:w-3/4 lg:w-3/4 lg:h-[600px] p-6 aspect-square flex flex-col gap-5 ml-10"
                    :style="{
                        backgroundImage: ` url('/imagines/Caards.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
            >

                <div class="space-y-2 flex flex-col">
                    <label class="nomen">Nombre</label>
                     <Input required class="bg-[rgba(255,255,255,0.57)]  border rounded-lg px-3"/>
                </div>      
                <div class="space-y-2 flex flex-col">
                    <label class="nomen">Apellidos</label>
                     <Input required class="bg-[rgba(255,255,255,0.57)]  border rounded-lg px-3"/>
                </div>
                <div class="space-y-2 flex flex-col">
                    <label class="nomen">Tu idea de proyecto</label>
                    <textarea 
                        required 
                        rows="4" 
                        class="bg-[rgba(255,255,255,0.57)] border rounded-lg px-3 py-2 resize-none outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    ></textarea>                
                </div>
                <div>
                    <Select>
                        <SelectTrigger class="bg-[rgba(255,255,255,0.17)] cursor-pointer">
                            <SelectValue class="nomen " placeholder="Servicio que buscas" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Fotografía">
                                Fotografía
                            </SelectItem>
                            <SelectItem value="Diseño de identidad">
                                Diseño de identidad visual
                            </SelectItem>
                            <SelectItem value="Diseño Gráfico">
                                Diseño gráfico
                            </SelectItem>
                            <SelectItem value="Diseño Editorial">
                                Diseño editorial
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div class="space-y-2 flex flex-col">
                    <label class="nomen">Mail</label>
                     <Input required class="bg-[rgba(255,255,255,0.57)]  border rounded-lg px-3"/>
                </div>

                <Button 
                    type="submit"
                    class="enviar w-full text-md text-bg-[#21127e] bg-[rgba(255,216,87,0.94)]  hover:bg-[#21127e] hover:text-white mt-4"
                    >
                    ENVIAR
                </Button>

            </form>

        </div>
        

    </section>

</template>




<style scoped>

#Sobre-mi img {
    width: 200px;          /* tamaño de la imagen */
    height: auto;
}
.descripcion{
    margin: 40px;
}
@media (max-width: 600px) {
    #Sobre-mi {
        flex-direction: column;
        text-align: center;
    }

    #Sobre-mi img {
        width: 150px;
    }
}
.nomen {
  font-family: 'GeneralSans-Light', sans-serif;
  color: #ffffff; 
  font-size: 18px;
}  
.enviar {
  font-family: 'GeneralSans-Variable', sans-serif;
}
.especial {
    font-size: xx-large;
}
</style>