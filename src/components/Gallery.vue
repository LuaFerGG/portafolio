<!-- src/components/Gallery.vue -->
<template>
  <div>
    <!-- MINIATURAS EN CUADRÍCULA -->
   <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        v-for="(img, idx) in images"
        :key="idx"
        :src="img"
        alt="miniatura"
        class="w-auto max-h-[370px] object-cover object-top rounded-md cursor-pointer hover:scale-110 transition duration-100 ease-in-out"
        @click="open(idx)"
      />
    </div>

    <!-- MODAL PANTALLA COMPLETA -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-80 flex justify-center z-50"
      @click.self="close"
    >
                  <!-- Botón Cerrar -->
        <button
          @click.stop="close"
          class="absolute top-4 right-8  text-white text-4xl font-bold hover:opacity-20 transition duration-300 ease-in-out"
        >
          &times;
        </button>
                  <button
            v-if="current > 0"
            @click.stop="prev"
            class="absolute left-8 top-1/2 -translate-y-1/2 text-white text-6xl p-2"
          >
            ‹
          </button>
          <button
            v-if="current < images.length - 1"
            @click.stop="next"
            class="absolute right-8 top-1/2 -translate-y-1/2 text-white text-6xl p-2"
          >
            ›
          </button>
      <!-- Contenedor scrollable centrado con margen lateral -->
      <div
        class="w-full max-w-[90vw] h-screen overflow-y-auto p-4 relative mx-auto"
      >

        <!-- IMAGEN AMPLIADA -->
        <div class="flex justify-center">
          <img
            :src="images[current]"
            alt="imagen ampliada"
            class="w-full h-auto object-contain rounded"
          />
        </div>
                <div class="relative flex justify-center">
          <!-- Botón anterior -->
          </div>

     </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const isOpen = ref(false)
const current = ref(0)

function open(idx) {
  current.value = idx
  isOpen.value = true
}
function close() {
  isOpen.value = false
}
function next() {
  if (current.value < props.images.length - 1) {
    current.value++
  }
}
function prev() {
  if (current.value > 0) {
    current.value--
  }
}
</script>
