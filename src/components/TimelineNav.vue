<template>
  <nav>
    <div class="wrapper">
      <div class="nodes">
        <div class="line">
          <div class="blue">
            <div class="red-container" ref="revealBar">
              <div class="red"></div>
            </div>
          </div>
        </div>

        <div
          v-for="(node, idx) in nodes"
          :key="idx"
          class="node"
          :class="{ active: activeNodes[idx] }"
          @click="scrollTo(idx)"
          ref="nodeEls"
        >
          <div class="active-circle">
            <div class="splash"></div>
            <div class="cover">
              <div class="white"></div>
            </div>
          </div>
          <div class="inactive-circle">
            <div class="small-cover"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="items">
    <div
      v-for="(it, idx) in pages"
      :key="idx"
      class="item"
      ref="itemEls"
    >
      <div v-if="idx === 0" class="text-center text-gray-400 font-bold py-32">Scroll</div>
      <div v-else class="bg-red-200 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-8 max-w-7xl mx-auto h-auto rounded-xl mb-20">
        <div class="flex flex-col gap-4">
          <!-- Logo -->
          <div>
            <img src="/img/01.png" alt="Logo" class="w-32 h-auto" />
          </div>
          <!-- Descripción -->
          <div>
            <p class="text-gray-700 text-sm pl-2">
              Es una herramienta diseñada para gestionar y sincronizar datos en proyectos multicloud, optimizando la eficiencia y simplificando los procesos. 
              Su branding refleja flexibilidad, simplicidad y fiabilidad.<br><br>
              Es una herramienta diseñada para gestionar y sincronizar datos en proyectos multicloud, optimizando la eficiencia y simplificando los procesos. 
              Su branding refleja flexibilidad, simplicidad y fiabilidad.
            </p>
          </div>
          <!-- Web -->
          <div class="mt-auto">
            <a href="https://fireweb.digiapps.com.co" class="text-[#242424] font-bold underline text-sm">fireweb.digiapps.com.co</a>
          </div>
        </div>
        <!-- Galería -->
        <Gallery :images="proyectoUnoImages" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Gallery from './Gallery.vue' // Asegúrate de importar correctamente

const proyectoUnoImages = [
  '/img/proyecto1_1.png',
  '/img/proyecto1_2.png',
  '/img/proyecto1_3.png'
]

const pages = Array.from({ length: 8 }) // 1 scroll + 7 secciones
const nodes = pages.slice(1)
const itemEls = ref([])
const nodeEls = ref([])
const revealBar = ref(null)

const positions = []
const heights = []
const activeNodes = ref(nodes.map(() => false))
const stepDistance = 101

function updateMetrics() {
  positions.length = 0
  heights.length = 0
  itemEls.value.forEach(el => {
    positions.push(el.offsetTop)
    heights.push(el.offsetHeight)
  })
}

function onScroll() {
  const scrollTop = window.scrollY
  const docHeight = window.innerHeight
  const nodeTop = scrollTop + docHeight
  let current = 0

  for (let i = -1; i < positions.length - 1; i++) {
    if (nodeTop > positions[i]) {
      current = i
      if (i >= 0) activeNodes.value[i - 1] = true
    } else {
      if (i >= 0) activeNodes.value[i - 1] = false
    }
  }

  let totalWidth = 0
  if (nodeTop < positions[0]) {
    totalWidth = 0
  } else if (nodeTop >= positions[positions.length - 1]) {
    totalWidth = stepDistance * positions.length
  } else {
    const nextStep = (nodeTop - positions[current]) / (positions[current + 1] - positions[current])
    totalWidth = stepDistance * (current + nextStep + 1)
  }
  if (revealBar.value) {
    revealBar.value.style.width = totalWidth + 'px'
  }
}

function scrollTo(idx) {
  const targetIndex = idx + 1
  const topPos = positions[targetIndex] || 0
  window.scrollTo({ top: topPos - window.innerHeight + 10, behavior: 'smooth' })
}

onMounted(async () => {
  await nextTick()
  updateMetrics()
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', updateMetrics)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateMetrics)
})
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Squada+One");

nav {
  position: relative;
  width: 100%;
  padding: 1rem;
  z-index: 10;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.line {
  height: 4px;
  background: #ccc;
  position: relative;
}

.blue {
  height: 100%;
  background: #3b82f6;
  position: relative;
}

.red-container {
  height: 100%;
  overflow: hidden;
}

.red {
  background: #ef4444;
  height: 100%;
  width: 0;
  transition: width 0.3s ease;
}

.nodes {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  position: relative;
}

.node {
  cursor: pointer;
  position: relative;
}

.node.active .active-circle {
  transform: scale(1.2);
}

.active-circle,
.inactive-circle {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: white;
  border: 2px solid #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

.active-circle {
  background: #3b82f6;
  transition: transform 0.3s ease;
}

.splash {
  width: 12px;
  height: 12px;
  background: #ef4444;
  border-radius: 9999px;
}

.items {
  scroll-behavior: smooth;
  padding-top: 4rem;
}
</style>
