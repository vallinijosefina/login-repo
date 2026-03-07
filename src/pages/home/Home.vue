<script lang="ts" setup>
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue'
import { scrollToSection } from '@/utils/ScrolltoSection'

import Button from '@/components/ui/button/Button.vue';

import { ref } from 'vue';
import { Card,CardContent } from '@/components/ui/card';
import { trabajos, type Trabajos } from '@/pages/TrabajosHechos/data';
const listaTrabajos = ref< Trabajos[]>( trabajos )

// import CarrusImagium from '@/components/CarrusImagium.vue';

const menuItems = [
    {
        label: 'INICIO',
        href: '#',
        onClick: () => scrollToSection('#')
    },
    {
        label: 'SOBRE MI',
        href: '#Sobre-mi',
        onClick: () => scrollToSection('#Sobre-mi')
    },
    {
        label: 'PROFESIONAL',
        href: '#Información-profesional',
        onClick: () => scrollToSection('#Información-profesional')
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
        <!-- <h1 class="text-black text-xl ">
            Josefina Vallini
        </h1> -->
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
                    class=" cursor-pointer object-contain h-full w-auto bg-[#191050] rounded"
                    :style="{
                        backgroundImage: ` url('/imagines/Caards.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }"
                >
                    <CardContent 
                        class="object-contain h-full w-full flex flex-col items-center justify-around "
                        @click="$router.push(`/trabajo/${ mitrabajo.id }`)"
                        >
                        <h2 class="text-white mt-4">{{ mitrabajo.titulus }}</h2>
                        <img 
                            class=" rounded w-[400px] h-[450px] object-cover object-center mt-2 mb-4  "
                            :src="`/imagines/Trabajos/${ mitrabajo.imago }`" alt=""
                        >
                    </CardContent>
                </Card>

            </div>
        </div>
        
    </section>

    <section id="Contacto">
         <div>
            <h1>CONTACTO</h1>
            <p class="parrafo">@joseevallini
                618803643
                vallini.josefina@gmail.com
                be.net/JosefinaVallini
            </p>
        <!-- Formulario, logos instagram y eso  -->
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
</style>