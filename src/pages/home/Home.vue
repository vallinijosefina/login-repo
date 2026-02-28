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
        href: '#Sobre mi',
        onClick: () => scrollToSection('#Sobre mi')
    },
    {
        label: 'Profesional',
        href: '#Información profesional',
        onClick: () => scrollToSection('#Información profesional')
    },
    {
        label: 'Trabajos',
        href: '#videre',
        onClick: () => scrollToSection('#videre')
    },
    {
        label: 'Contacto',
        href: '#contactus',
        onClick: () => scrollToSection('#contactus')
    }
]
</script>



<template>
 <NavigatorPrimarius :items="menuItems" home-route="/" />
    <header class="titulus">
        <h1 class="text-black">Josefina Vallini</h1>
    </header>

    <section class="Inicio">
        <img scr="/imagines/Presentacion.jpg"/>
    </section>

    <section id= "Sobre mi">
        <div>
            <h1>Sobre mi</h1>
        </div>
        
    </section>

    <section id="Información profesional">
         <div>
            <h1>Inofrmación Profesional</h1>
        </div>
    </section>

    <section id="Trabajos">
         <div>
            <h1>Trabajos</h1>
        </div>
        <!-- <RouterLink/> -->
    </section>

    <section id="Contacto">
         <div>
            <h1>Contacto</h1>
        </div>
    </section>

</template>




<style scoped>
.icon-home{
    color: slateblue;
    width: 3rem;
    height: 3rem;
}
.icon-home:hover{
    color: rgb(59,41,70);
    background-color: slateblue;
}
.extra-nav {
  background-color: rgb(59,41,70);
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px) {
    .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
    }
}
</style>