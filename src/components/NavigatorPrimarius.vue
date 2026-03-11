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
          class="fixed top-4 right-4 rounded p-1 block sm:hidden bg-[#ffffffb9]"
          @click="videreMenu= !videreMenu"
          >
            <Menu />
          </Toggle>
     <nav v-if="videreMenu" class="menu flex flex-col sm:flex-row justify-end rounded p-1 "> 
            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">
                    <NavigationMenuItem v-for="item in items" :key="item.label">
                        <a 
                        :href="item.href" 
                        @click.prevent = "item.onClick ? item.onClick() : null"
                        >
                            <NavigationMenuLink 
                                :class="[, 
                                    'text-md bg-transparent hover:bg-transparent hover:font-bold hover:text-[#1414cf] transition-all' 
                                    
                                    ]" 
                                    
                                    >
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
    color: #1414cf;
    width: 2rem;
    height: 2rem;
}

@media (min-width: 640px) {
   .icon-menu {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
    }
}
@media (min-width: 640px) {
        .menu {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
    }
}
@media (max-width: 640px) {
        .menu {
            background: #ffffffb9;
            position: fixed;
            top: 53px;
            right: 16px;
        }
}
</style>