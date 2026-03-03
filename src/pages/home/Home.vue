<script lang="ts" setup>
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue'
import { scrollToSection } from '@/utils/ScrolltoSection'

import { ref } from 'vue';
import { Card,CardContent } from '@/components/ui/card';
import { trabajos, type Trabajos } from '@/TrabajosHechos/data';
const listaTrabajos = ref< Trabajos[]>( trabajos )

const menuItems = [
    {
        label: 'Inicio',
        href: '#',
        onClick: () => scrollToSection('#')
    },
    {
        label: 'Sobre mi',
        href: '#Sobre-mi',
        onClick: () => scrollToSection('#Sobre-mi')
    },
    {
        label: 'Profesional',
        href: '#Información-profesional',
        onClick: () => scrollToSection('#Información-profesional')
    },
    {
        label: 'Trabajos',
        href: '#Trabajos',
        onClick: () => scrollToSection('#Trabajos')
    },
    {
        label: 'Contacto',
        href: '#Contacto',
        onClick: () => scrollToSection('#Contacto')
    }
]
</script>



<template>
    <header class="mi-nombre flex items-center justify-between px-6 py-4">
        <h1 class="text-black text-xl ">
            Josefina Vallini
        </h1>
         <NavigatorPrimarius 
            :items="menuItems" 
            home-route="/"/>
    </header>

    <section class="Inicio">
        <img src="/imagines/Presentacion.png"/>
    </section>

    <section id= "Sobre-mi" 
            class="flex items-center justify-between gap-2 m-10">

        <img src="/imagines/FOTOPERFIL.png">
        <div class="descripcion">
            <h1>Sobre mi</h1>
            <p class="parrafo">Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia.Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia.Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia</p>
        </div>
       
    </section>

    <section id="Información-profesional">
         <div>
            <h1>Información Profesional</h1>
            <p class="parrafo">Actualmente estoy en segundo año de la carrera Diseño y Tecnologías Creativas</p>
            <p class="parrafo">Poseo conocimientos en varios programas de Adobe, tales son Photoshop, Ilustrator, Indesign, Premiere</p>
        </div>
    </section>

    <section id="Trabajos">
        <div class="m-10">
            <h1>Trabajos</h1>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
                <Card 
                    class="cursor-pointer w-70 h-70  "
                    v-for="trabajos in listaTrabajos"
                    >
                <CardContent class="flex flex-col items-center justify-around w-60 h-60 ">
                    <h2 class="Caps">{{ trabajos.titulus }}</h2>
                    <img 
                        class=" object-cover object-top "
                        :src="`/imagines/Trabajos/${ trabajos.imago }`" alt=""
                    >
                </CardContent>
                </Card>

            </div>
        </div>
        
    </section>

    <section id="Contacto">
         <div>
            <h1>Contacto</h1>
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
    margin: 50px;
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
.parrafo{
    font-family: GeneralReg; /* ¿¿Cómo agrego la tipografia correctamente??  */
}
</style>