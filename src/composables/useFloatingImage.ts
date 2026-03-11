import { ref, onMounted, onUnmounted } from 'vue'

export const useFloatingImage = () => {
  const x = ref(0)
  const y = ref(0)
  const isVisible = ref(false)
  const currentImage = ref('')

  const updatePosition = (e: MouseEvent) => {
    x.value = e.clientX
    y.value = e.clientY
  }

  const showImage = (url: string) => {
    currentImage.value = url
    isVisible.value = true
  }

  const hideImage = () => {
    isVisible.value = false
  }

  onMounted(() => {
    window.addEventListener('mousemove', updatePosition)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', updatePosition)
  })

  return { x, y, isVisible, currentImage, showImage, hideImage }
}