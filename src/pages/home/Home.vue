<script lang="ts" setup>
import NavigatorPrimarius from '@/components/NavigatorPrimarius.vue'
import { scrollToSection } from '@/utils/ScrolltoSection'

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
        <h1 class="text-black text-xl">
            Josefina Vallini
        </h1>
         <NavigatorPrimarius 
            :items="menuItems" 
            home-route="/"/>
    </header>

    <section class="Inicio">
        <img src="/imagines/Presentacion.png"/>
    </section>

    <section id= "Sobre-mi">
         <img src="/imagines/FOTOPERFIL.png">
        <div class="descripcion">
            <h1>Sobre mi</h1>
            <p>Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia.Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia.Soy Josefina Vallini, tengo 20 años. Nací en la ciudad de Santa Fe en Argentina. Vine a España en el año 2024 para iniciar mis estudios en el Grado de Diseño y Tecnologías Creativas, en la Universidad Politécnica de Valencia</p>
        </div>
       
    </section>

    <section id="Información-profesional">
         <div>
            <h1>Información Profesional</h1>
            <p>Actualmente estoy en segundo año de la carrera Diseño y Tecnologías Creativas</p>
            <p>Poseo conocimientos en varios programas de Adobe, tales son Photoshop, Ilustrator, Indesign, Premiere</p>
        </div>
    </section>

    <section id="Trabajos">
        <div>
            <h1>Trabajos</h1>
        </div>
        <!-- <RouterLink/> y carrulus?? -->
    </section>

    <section id="Contacto">
         <div>
            <h1>Contacto</h1>
            <p>@joseevallini
                618803643
                vallini.josefina@gmail.com
                be.net/JosefinaVallini
            </p>
        <!-- Formulario, logos instagram y eso  -->
        </div>
    </section>

</template>




<style scoped>

#Sobre-mi{
  
    display: flex;
    align-items: center;   /* centra verticalmente */
    justify-content: space-between;
    gap: 2rem;       /* espacio entre texto e imagen */
}
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
</style>