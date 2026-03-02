<script lang="ts" setup>
import {Menu} from 'lucide-vue-next'

import {    
  NavigationMenu,
  NavigationMenuItem,
NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

//import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue'


interface MenuItems {
    label: string,
    href: string,
    onClick?: () => void 
}

interface Props {
    items: MenuItems[],
    homeRoute?: string
}

withDefaults (defineProps<Props>(),{
    homeRoute: '/'
})

const videreMenu = ref<boolean>(true)
const handleResize =()=> {
    if(window.innerWidth <= 640) {
        videreMenu.value = false;
    } else{
        videreMenu.value = true;
    }
}

onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
})
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
})


</script>

<template>
<div>
    <Toggle 
          class="fixed top-4 right-4  block sm:hidden"
          @click="videreMenu= !videreMenu"
          >
            <Menu />
          </Toggle>
     <nav v-if="videreMenu" class="flex flex-col sm:flex-row justify-between px-3 md:block"> 
            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">
                    <NavigationMenuItem v-for="item in items" :key="item.label">
                        <a 
                        :href="item.href" 
                        @click.prevent = "item.onClick ? item.onClick() : null"
                        >
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white ' ]">
                                {{ item.label }}
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </nav>
</div>
</template>

<style scoped>

.icon-menu{
    color: rgb(20, 20, 207);
    width: 2rem;
    height: 2rem;
}

.icon-menu:hover{
    color: red;
    background:aqua;
}
@media (min-width: 640px) {
   .icon-menu {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
   
    }
}
.barra-superior {
  background-color: rgb(0, 0, 0);
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  z-index: 1;
}

</style>