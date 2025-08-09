<template>
  <main class="scroll-container h-screen overflow-y-scroll"> <!--fondo- fondo-->
 <section class="snap-section h-screen">
<header class="bg-[#E3E3E3] pt-[10px] sm:pt-[40px] pl-4 pr-4 lg:pl-20 lg:pr-20 z-10 transition-[padding] duration-300 ease-in-out">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 p-4 text-[#868686]">
    
    <!-- Grupo: Email + Botones -->
    <div class="flex flex-row justify-center sm:justify-start items-center space-x-3 sm:space-x-4 font-semibold order-1 sm:order-none">
      <span class="hidden sm:inline" v-show="!isMobile">luafergg@gmail.com</span>

      <!-- Botón Copiar -->
      <button
        @click="copyToClipboard"
        class="bg-[#FFFFFF] shadow-sm w-[80px] sm:w-[100px] px-2 sm:px-4 py-1 rounded-full hover:bg-[#242424] hover:text-[#FFFFFF] transition text-center text-sm sm:text-base">
        {{ isMobile ? 'E-mail' : 'Copy' }}
      </button>

      <!-- Botón CV -->
      <a
        href="https://drive.google.com/file/d/1lAJUdKh9xiTvvBpqNfB7r6Qt__8zbAiV/view"
        target="_blank"
        class="bg-[#FFFFFF] shadow-sm w-[80px] sm:w-[100px] px-2 sm:px-4 py-1 rounded-full hover:bg-[#242424] hover:text-[#FFFFFF] transition inline-block text-center text-sm sm:text-base">
        CV
      </a>
    </div>

<div class="flex justify-center sm:justify-end items-center flex-wrap gap-6 sm:gap-4 text-[#868686] order-2 sm:order-none">
  <!-- LinkedIn (solo en móvil) -->
  <a 
    href="https://www.linkedin.com/in/lua-ackermann-18014a355/"
    target="_blank"
    class="social-link hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition flex items-center space-x-0 md:hidden">
    <img 
      src="/icons/icon_linkedin.svg"
      alt="LinkedIn"
      class="bg-[#FFFFFF] p-2 ml-3 rounded-full w-9 inline-block" />
  </a>
  <!-- Nombre de LinkedIn en escritorio -->
  <a
    href="https://www.linkedin.com/in/lua-ackermann-18014a355/"
    target="_blank">
    <span class="lg:inline-block md:inline-block hidden hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">LinkedIn</span>
  </a>

  <span class="hidden md:inline-block lg:inline">/</span>

  <!-- Behance (solo en móvil) -->
  <a 
    href="https://www.behance.net/laferackerma1"
    target="_blank"
    class="social-link hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition flex items-center md:hidden">
    <img
      src="/icons/icon_behance.svg"
      alt="Behance"
      class="bg-[#FFFFFF] p-2 rounded-full w-9 inline-block" />
  </a>
  <!-- Nombre de Behance en escritorio -->
  <a
    href="https://www.behance.net/laferackerma1"
    target="_blank">
    <span class="lg:inline-block md:inline-block hidden hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">Behance</span>
  </a>

  <span class="hidden md:inline-block  lg:inline">/</span>

  <!-- Fireweb (solo en móvil) -->
  <a 
    href="https://github.com/LuaFerGG"
    target="_blank"
    class="social-link hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition flex items-center md:hidden">
    <img
      src="/icons/icon_fireweb.svg"
      alt="Fireweb"
      class="bg-[#FFFFFF] p-2 rounded-full w-9 inline-block" />
  </a>
  <!-- Nombre de Fireweb en escritorio -->
  <a
    href="https://github.com/LuaFerGG"
    target="_blank">
    <span class="lg:inline-block hidden  md:inline-block hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">Github</span></a>
</div>

  </div>
</header>
  <!-- Notificación con animación de entrada y salida -->
  <transition name="fade-slide">
    <div
      v-if="copied"
      class="fixed top-4 left-[253px] bg-[#242424] text-[#FFFFFF] px-4 py-1 rounded-full shadow-sm z-50">
      ¡Copiado!
    </div>
  </transition>

<div class="bg-[#E3E3E3] py-6 lg:py-12 rounded-b-[60px] shadow-[0_4px_2px_-1px_#D9D9D9]">
    <div class="flex justify-center items-start pt-[40px]">
      <div class="relative">
        <img src="/foto.png" alt="Foto de perfil" class="w-[150px] rounded-full border-[6px] border-[#FFFFFF] shadow-lg object-cover"/>

        <!-- Burbuja de chat encima de la imagen -->
<div
  class="absolute -top-10 left-1/2 sm:left-[60%] translate-x-[-50%] sm:translate-x-0 bg-[#FFFFFF] px-4 py-2 whitespace-nowrap rounded-3xl shadow-md text-sm text-[#242424] font-bold chat-bubble transition-all"
  @mouseover="handleHover"
  @mouseleave="handleLeave"
>
  {{ bubbleText }}

  <!-- Puntita de la burbuja -->
  <div class="absolute bottom-0 left-5 w-0 h-0 border-l-[10px] border-l-transparent
    border-r-[10px] border-r-transparent border-t-[10px] border-t-[#FFFFFF] translate-y-full"></div>
</div>

      </div>
    </div>

    <!-- Texto y titulo -->
    <div class=" flex flex-col justify-center items-center text-center py-6 px-4">
      <div class="">
<h1 class="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#242424] leading-tight">
  Heart in digital<br />
  <span class="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#868686]">
    brands, products, impact
  </span>
  <br />and experience..
</h1>


<a href="https://www.behance.net/laferackerma1" target="_blank" rel="noopener noreferrer">
  <button 
    class="mt-[60px] mb-3 bg-[#242424] text-[#FFFFFF] shadow-md font-semibold text-md px-8 py-4
      rounded-full flex items-center gap-2 transition-transform mx-auto hover:scale-105 transition">
      Latest Shots
    </button>
      </a>
    </div>
    </div>
  </div>
  <!-- ------------------------------------------------------Galería infinita tipo cinta transportadora---------------- -->

    <div class="flex items-center overflow-hidden w-full h-[200px] pt-2 opacity-[90%]">
      <div
        id="carousel"
        class="flex w-[200%] animate-scroll">
      <img
        v-for="(image, index) in duplicatedImages"
        :key="index"
        :src="`/img/${image}`"
        :alt="`Imagen ${index + 1}`"
        class="h-[110px] w-auto px-10 object-cover opacity-100"/>
      </div>
    </div>
  </section>    
     
    <section class="snap-section h-screen bg-[#E3E3E3] w-full rounded-t-[60px] flex flex-col justify-center items-center text-center py-[90px]  lg:py-20 shadow-[0_-4px_2px_-1px_#D9D9D9]">
      <div class="w-full flex flex-col items-center text-center content-center pt-0 lg:pb-10">
              <div @click="handleFall"
          :class="['',falling? 'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">
          <h1 class="font-bold text-3xl md:text-6xl text-[#242424] leading-tight pb:0 lg:pb-20">
              Bringing Vision to Life,<br>One Pixel at a Time
          </h1>
          </div>
        <div @click="handleFall"
          :class="['relative w-full flex items-center justify-center mt-[50px] md:mt-0',falling? 'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">
          <div class="absolute left top-[3px] bg-[#242424]
          text-[#FFFFFF] rotate-[6deg] text-sm px-2 py-2 z-50 opacity-0 cursor-pointer hover:opacity-100 transition-opacity duration-300 ease-in-out">Don't touch</div>
          <div class="absolute w-full border-t border-[#d9d9d9]"></div>
        <div @click="handleFall"
          :class="['bg-[#FFFFFF] text-[#242424] rounded-full font-bold text-lg max-w-[150px] px-10 py-2 z-40 shadow-md',falling ? 
          'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">Services
        </div>
      </div>
      </div>
                    <div @click="handleFall":class="['',falling? 'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-0 lg:gap-20">
        <!-- --------------------------------------first card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px] order-2">
          <div class="">
            <img src="/icons/icon_dev1.svg" alt="" class="w-[48px] py-4"/>
          </div>
          <h3 class="text-xl text-[#242424] font-bold pb-4">Development</h3>
          <p class="text-md">Bringing your projects to life with a mix of creativity and innovation, always aiming for something functional and fun.</p>
          </div>
          <!-- --------------------------------------second card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px]  order-1">
          <div class="">
            <img src="/icons/icon_design.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-xl text-[#242424] font-bold pb-4">Design & Creative</h3>
          <p class="text-md">Every design is a conversation... one that connects, engages, and inspires.</p>
        </div>      
          <!-- --------------------------------------third card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px]">
          <div class="">
            <img src="/icons/icon_ux.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-xl text-[#242424] font-bold pb-4">UI & UX</h3>
          <p class="text-md">Interfaces that are clear, fast, and flowing... every click feels like part of a unique experience...</p>
        </div>
        <!-- --------------------------------------fourth card--------------------------------- -->
        
        <div class="p-8 text-left max-w-[250px]">
          <div class="">
            <img src="/icons/icon_plants.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-xl text-[#242424] font-bold pb-4">Plants :D</h3>
          <p class="text-md">And yes, I'm a plant maniac, finding joy in each new leaf and the natural beauty plants bring to any space.</p>
        </div>
        </div>
      </div>
    </section>

    <section class="snap-section bg-[#E3E3E3] flex flex-col justify-center items-center h-screen w-full">
    <div class="relative text-center pb-24   flex items-left">
      <h2 class="text-6xl font-bold">A Journey<br>Through My Portfolio...</h2>
    </div>
    <div class="container flex flex-row gap-8">
    
  <!-- Mitad izquierda: video -->
  <div class="relative w-[700px] h-[400px] items-center rounded-xl overflow-hidden">
    <a
      href="https://brave-dune-0aab1210f-dev.eastus2.4.azurestaticapps.net/#storage-features"
      target="_blank"
      class="m-2 px-2 py-1 z-20 text-xs text-white absolute right-0 flex items-center justify-center rounded-full bg-red-500 cursor-pointer
      hover:bg-white hover:text-red-500 hover:animate-ping">
      <i class="fa-solid fa-code"></i>
      <span class="pl-2 font-bold">I'm Coding...</span>
    </a>
    <!-- Título y descripción -->
  <div 
  class="absolute bottom-0 left-0 w-full h-[400px] z-10 
         bg-gradient-to-t from-black to-transparent
         flex justify-between items-end opacity-100 hover:opacity-0 
         transition-opacity duration-300 ease-in-out px-6 pb-4 cursor-pointer"
         @click="playAndFullscreen"
>
  <!-- Título y descripción a la izquierda -->
  <div class="flex flex-col items-start max-w-[70%]">
    <img src="/video/logo-sky-book.svg" class="pb-2 h-10">
    <p class="text-sm text-gray-400 font-normal">
      Sky is a web-based cloud storage tool that allows individuals and organizations to securely store, organize, and share their files, accessible from any device with an internet connection.
    </p>
  </div>

  <!-- Botón a la derecha -->
  <button 
    @click.stop="toggleVideo" 
    class="text-xl text-gray-300 rounded hover:text-white"
  >
    {{ isPlaying ? '⏸' : '▶' }}
  </button>
</div>

    <video
      ref="myVideo"
      src="/video/sky.mp4"
      poster="/thumbnails/thumb1.jpg"
      class="w-full h-full object-cover"
      muted
      loop
      autoplay
    ></video>
  </div>

  <!-- Mitad derecha: contenido -->
  <div class="flex-1 flex flex-col gap-6">
    <div class="flex-1 flex flex-row gap-6">
     <div class="relative flex-1 rounded-xl overflow-hidden group">
  <!-- Imagen de fondo -->
  <img
    src="/thumbnails/thumb2.jpg"
    class="w-full h-full object-cover"
    alt="Background"
  />

  <!-- Contenedor del logo -->
  <div
    class="absolute bottom-0 left-0 w-full h-full flex flex-col items-start justify-end bg-gradient-to-t from-black to-transparent p-4 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
  >
    <img src="/video/logo-fireweb-book.svg" class="h-8 pb-2" alt="Logo" />
    <p class="text-sm text-gray-400 font-normal">
      Fireweb is a tool that makes editing Firestore data simple and intuitive.
    </p>
  </div>

  <!-- Enlace invisible sobre toda el área -->
  <a
    href="https://fireweb.digiapps.com.co/"
    target="_blank"
    class="absolute inset-0"
  ></a>
</div>
      <div class="flex-1 bg-gray-600 rounded-xl"></div>
    </div>
    <div class="flex-1 flex flex-row gap-4">
    <div class="flex-1 bg-gray-400 rounded-xl"></div>
      <div class="flex-1 bg-gray-600 rounded-xl"></div>
      <div class="flex-1 bg-gray-400 rounded-xl"></div>
      <div class="flex-1 bg-gray-600 rounded-xl"></div>

    </div>
  </div>
</div>

    </section>

    <section class="snap-section h-screen">
      <div class="bg-[#E3E3E3] w-full flex flex-col justify-center items-center text-center pt-[150px] lg:pt-[250px] rounded-b-[60px] pb-28 shadow-[0_4px_3px_-1px_#D9D9D9]relative overflow-visible">   
        <div class="relative z-[10]">
          <img src="/foto.png" alt="Fer, diseñadora gráfica" class="w-[150px] rounded-full border-[6px] border-[#FFFFFF] shadow-lg object-cover"/>

  <img
    v-for="(star, index) in stars"
    :key="index"
    :src="star.src"
    class="absolute opacity-10"
    :class="[
      star.side === 'left' ? `left-[${star.x}px]` : `right-[${star.x}px]`,
      `top-[${star.y}px]`,
      `w-${star.size}`
    ]"
    alt="Estrella"
  />  
        </div>

      <div class="relative inline-block">
        <!-- Ícono -->
        <img
          src="/icons/moon.svg"
          @click="cambiarPoema"
          class="absolute left-[-400px] top-[1px] w-8 cursor-pointer opacity-15 hover:opacity-100 hover:scale-150 transition"
          alt="Luna"
        />
   
            <img
          src="/icons/star.svg"
          @click="cambiarPoema"
          class="absolute left-[-300px] top-[100px] w-7 cursor-pointer opacity-15 hover:opacity-100 hover:scale-150 transition"
          alt="Luna"
        />
                <img
          src="/icons/heart.svg"
          class="absolute left-[-400px] top-[200px] w-8 opacity-10 "
          alt="Luna"
        />

            <img
          src="/icons/star.svg"
          @click="cambiarPoema"
          class="absolute right-[-300px] top-[100px] w-8 cursor-pointer opacity-15 hover:opacity-100 hover:scale-150 transition"
          alt="Luna"
        />
                <img
          src="/icons/heart.svg"
          @click="cambiarPoema"
          class="absolute right-[-100px] top-[200px] w-5 cursor-pointer opacity-10 hover:opacity-100 hover:scale-150 transition"
          alt="Luna"
        />

        <!-- Burbuja siempre visible -->
<div class="relative bottom-[100px] z-[10 ]">
  <!-- Tooltip flotante que crece hacia arriba -->
<div
  class="absolute left-1/2 bottom-[60px] -translate-x-1/2 bg-[#FFFFFF] text-[#242424] font-bold text-sm px-4 py-2 rounded-xl shadow-md min-w-[400px] w-auto max-h-[190px] h-auto transition-all duration-500 ease-in-out"
>
  <!-- Contenido dinámico -->
  {{ poemaActual }}
</div>

  <!-- Triángulo tipo "cola" anclado debajo del tooltip -->
  <div
    class="absolute bottom-[50px] left-[200px] w-0 h-0 border-l-[10px] border-l-transparent
    border-r-[10px] border-r-transparent border-t-[10px] border-t-[#FFFFFF]"
  ></div>
</div>

          <!-- Título principal -->
          <h1 class="font-oswald font-bold lg:text-6xl pt-8 text-4xl text-[#242424]">Tell me about your<br>next project</h1>
        </div>

        <div class="flex justify-center items-center text-center gap-6 pt-16">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=luafergg@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#242424] font-bold text-white w-[130px] py-2 rounded-full transition-transform mx-auto hover:scale-105 shadow-sm text-center inline-block"
          >e-mail</a>
          <a
            href="https://wa.me/+573204875335"
            target="_blank"
            class="bg-[#FFFFFF] font-bold text-[#242424] w-[130px] py-2 rounded-full transition-transform mx-auto hover:scale-105 shadow-sm text-center inline-block"
          >Whatsapp</a>
        </div>
      </div>
   

<footer class="py-[80px] px-[24px] md:px-[150px] z-10">
  <div class="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center text-center md:text-left relative">

    <!-- Derechos reservados -->
    <div class="order-3 md:order-1 font-semibold">
      <span>© 2025 All rights reserved.</span>
    </div>

    <!-- Logo -->
        <img src="/icons/logo_lu.svg"
            class="w-12 order-1 md:order-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2"
            alt="Logo Lüa">
        <!-- Links -->
        <div class="flex flex-wrap justify-center items-center space-x-4 order-2 md:order-3">
          <a href="https://www.linkedin.com/in/lua-ackermann-18014a355/"
            target="_blank"
            class="hover:underline hover:text-[#242424] hover:font-bold  decoration-[#242424] transition">
            LinkedIn
          </a>
          <span>/</span>
          <a href="https://www.behance.net/laferackerma1"
            target="_blank"
            class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">
            Behance
         </a>
          <span>/</span>
          <a href="https://fireweb.digiapps.com.co"
            target="_blank"
            class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">
            Fireweb
          </a>
        </div>
      </div>
    </footer>
  </section>
</main>

</template>

<script setup>
import confetti from 'canvas-confetti';
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { useI18n } from 'vue-i18n';
import Gallery from '@/components/Gallery.vue'


const myVideo = ref(null)
const isPlaying = ref(false)

// Reproduce/pausa y activa fullscreen al hacer click en el contenedor
function playAndFullscreen() {
  if (!myVideo.value) return

  if (myVideo.value.paused) {
    myVideo.value.play()
    isPlaying.value = true
  } else {
    myVideo.value.pause()
    isPlaying.value = false
  }

  // Solicitar fullscreen si no está activo
  if (document.fullscreenElement !== myVideo.value) {
    if (myVideo.value.requestFullscreen) {
      myVideo.value.requestFullscreen()
    } else if (myVideo.value.webkitRequestFullscreen) {
      myVideo.value.webkitRequestFullscreen()
    } else if (myVideo.value.msRequestFullscreen) {
      myVideo.value.msRequestFullscreen()
    }
  }
}

function toggleVideo() {
  if (!myVideo.value) return
  if (myVideo.value.paused) {
    myVideo.value.play()
    isPlaying.value = true
  } else {
    myVideo.value.pause()
    isPlaying.value = false
  }
}

function toggleFullScreen() {
  if (!myVideo.value) return
  if (myVideo.value.requestFullscreen) {
    myVideo.value.requestFullscreen()
  }
}

function resetToThumbnail() {
  if (myVideo.value) {
    myVideo.value.pause()
    myVideo.value.currentTime = 0
    isPlaying.value = false
  }
}

onMounted(() => {
  if (!myVideo.value) return
  // Actualizar el estado isPlaying si el usuario usa controles nativos
  myVideo.value.addEventListener('play', () => {
    isPlaying.value = true
  })
  myVideo.value.addEventListener('pause', () => {
    isPlaying.value = false
  })
})
// Botones de navegación con íconos y posición
const botones = [
  { icono: '/icons/icon_lu.svg', index: 0, posicion: 1.4, iconoY: 10 },
  { icono: '/icons/icon_art.svg', index: 1, posicion: 10, iconoY: 15 },
  { icono: '/icons/icon_awana.svg', index: 2, posicion: 20.6, iconoY: 10 },
  { icono: '/icons/icon_rivera.svg', index: 3 , posicion: 30, iconoY: 10 },
  { icono: '/icons/icon_film.svg', index: 4, posicion: 40, iconoY: 15 },
  { icono: '/icons/icon_elephant.svg', index: 5, posicion: 45, iconoY: 15 },
  { icono: '/icons/icon_plant.svg', index: 6, posicion: 50, iconoY: 15 },
  { icono: '/icons/icon_000.svg', index: 7, posicion: 54, iconoY: 15 },
  { icono: '/icons/icon_cat.svg', index: 8, posicion: 60, iconoY: 15 },
  { icono: '/icons/icon_dev.svg', index: 9, posicion: 70.6, iconoY: 10 },
  { icono: '/icons/icon_mycare.svg', index: 10, posicion: 79.6, iconoY: 10 },
  { icono: '/icons/icon_fireweb.svg', index: 11, posicion: 83.6, iconoY: 10 },
]


// Fichas informativas
const fichas = [
  {
    logo: '/icons/logo_lu.svg',
    descripcion: `I'm a passionate graphic designer with experience in branding, advertising, and UI/UX. I focus on turning ideas into designs that look great and work even better. As a “visual storyteller and pixel whisperer,” I listen closely to what each project needs and bring it to life. I'm currently learning to code to take on new challenges with a broader perspective.<br><br>Beyond design, I have a deep love for biology — especially botany. There's something magical about how plants grow and adapt, and that curiosity often finds its way into my creative process.`,
    web: 'https://planetfleet.com',
    images: ['/img/card_lua.png', '/img/card_lua2.png']
  },
  // otros objetos... 
    {
    logo: '/icons/icon_art.svg',
    descripcion: `Illustration is how I express what I can’t always say out loud. It helps me explore emotions and ideas through lines and color. Cartoons, in particular, let me find humor in the everyday and beauty in imperfection.<br><br>More than a technique, it’s a space where I recognize myself. Each drawing carries a part of me—my questions, laughter, and quiet thoughts. It’s how I connect, observe, and sometimes make others smile without a word.`,
    web: 'https://art.io',
    images: [  '/img/art_card.png', '/img/art_card2.png',
    ]
  },
  {
    logo: '/img/03.png',
    descripcion: `The tool functions as a visual editor for JSON documents in Firestore, making data editing intuitive and accessible. Thanks to this simplified interface, users can manage their databases without deep technical knowledge, speeding up workflows and reducing errors.<br><br>I contributed to the complete redesign of the project, creating a strong and functional visual identity—from the new logo to the interface and frontend development..`,
    web: 'https://fireweb.digiapps.com.co',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
      {
    logo: '/img/08.png',
    descripcion: `This project involved creating a logo for Rivera, a family-run company committed to providing the freshest and cleanest vegetables. The design features a simple, elegant “R” combined with a leaf, symbolizing growth, freshness, and nature.<br><br>The challenge was to create a clean and memorable logo that reflects the company’s values of quality and sustainability. The final design balances simplicity with meaning, representing Rivera’s dedication to healthy, natural produce.`,
    web: 'https://planetfleet.com',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
    {
    logo: '/icons/icon_film.svg',
    descripcion: `Esta plataforma ayuda a equipos creativos a colaborar en tiempo real y organizar sus ideas visuales de forma intuitiva.`,
    web: 'https://moonapp.io',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
  {
    logo: '/img/04.png',
    descripcion: `Es una herramienta diseñada para gestionar y sincronizar datos en proyectos multicloud, optimizando la eficiencia y simplificando los procesos.<br><br>Su branding refleja flexibilidad, simplicidad y fiabilidad.`,
    web: 'https://fireweb.digiapps.com.co',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
      {
    logo: '/icons/icon_plant.svg',
    descripcion: `Esta plataforma ayuda a equipos creativos a colaborar en tiempo real y organizar sus ideas visuales de forma intuitiva.`,
    web: 'https://art.io',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
      {
    logo: '/img/02.png',
    descripcion: `This project aimed to capture the unique essence of a rural tourism farm. The client wanted a logo that combined key elements: hospitality, connection to the land, and care for the animals.<br><br>The farm offers immersive rural experiences, so the logo needed to convey warmth and approachability. The challenge was to blend all elements into a clear, harmonious design that captures the essence of the place. The result is a logo full of character, reflecting the countryside, connection to nature, and simple magic.

`,
    web: 'https://art.io',
    images: [  '/img/card_granja.png', '/img/card2.png',
    ]
  },
      {
    logo: '/icons/heart.svg',
    descripcion: `Esta plataforma ayuda a equipos creativos a colaborar en tiempo real y organizar sus ideas visuales de forma intuitiva.`,
    web: 'https://art.io',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
      {
    logo: '/icons/icon_dev.svg',
    descripcion: `Esta plataforma ayuda a equipos creativos a colaborar en tiempo real y organizar sus ideas visuales de forma intuitiva.`,
    web: 'https://art.io',
    images: [  '/img/card.png', '/img/card2.png',
    ]
  },
      {
    logo: '/img/05.png',
    descripcion: `My Care is a medical management solution designed to streamline the administration of patient records and appointments, optimizing the organization and tracking of care in an agile and effective way.<br><br>For the visual identity, I designed a cross made of four hearts that represents the effort to rehumanize healthcare services. The interface aims to provide a warm and close experience, emphasizing the importance of putting people at the center of medical care.`,
    web: 'https://art.io',
    images: [  '/img/card_care.png', '/img/card2.png',
    ]
  },
      {
    logo: '/img/01.png',
    descripcion: `The tool is a visual editor for JSON documents in Firestore that simplifies data management, speeding up processes and minimizing errors.<BR><BR>I contributed to the complete redesign of the project, developing a strong and functional visual identity—from the logo to the interface and frontend development. I focused on improving usability and user experience, ensuring clarity and trust in every element, while the flame in the logo symbolizes the tool’s dynamic and adaptable nature.`,
    web: 'https:fireweb.digiapps.com.co',
    images: [  '/img/fireweb-card.png', '/img/fireweb-card2.png',
    ]
  },


]

const currentIndex = ref(0)

function mostrarSiguiente() {
  if (currentIndex.value < fichas.length - 1) {
    currentIndex.value++
  }
}
const proyectoUnoImages = [
  '/img/fireweb-card.png',
  '/img/fireweb-card2.png',
]

const numLongLines = 6;
const shortPerGap = 13;
const totalTicks = (numLongLines - 1) * (shortPerGap + 2) - 0;
const interval = shortPerGap - 1;

const years = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];

function getYear(i) {
  const index = Math.floor(i / interval);
  return years[index] || '';
}


const stars = [
  { side: 'left', x: -650, y: 10, size: 8, src: '/icons/star.svg' },
  { side: 'left', x: -220, y: 45, size: 7, src: '/icons/star.svg' },
  { side: 'left', x: -400, y: 50, size: 6, src: '/icons/star.svg' },
  { side: 'left', x: -500, y: 10, size: 5, src: '/icons/star.svg' },
  { side: 'left', x: -110, y: 10, size: 4, src: '/icons/star.svg' },
  { side: 'right', x: -650, y: 0, size: 8, src: '/icons/star.svg' },
  { side: 'right', x: -220, y: 45, size: 7, src: '/icons/star.svg' },
  { side: 'right', x: -400, y: 50, size: 6, src: '/icons/star.svg' },
  { side: 'right', x: -500, y: 10, size: 5, src: '/icons/star.svg' },
  { side: 'right', x: -110, y: 10, size: 4, src: '/icons/star.svg' },
  { side: 'right', x: -90, y: 10, size: 8, opacity: 10, src: '/icons/star.svg' },
  { side: 'right', x: -495, y: 99, size: 5, opacity: 5, src: '/icons/star.svg' },
  { side: 'right', x: -110, y: 100, size: 4, opacity: 20, src: '/icons/star.svg' },
  { side: 'right', x: -40, y: 200, size: 6, opacity: 15, src: '/icons/star.svg' },
  { side: 'right', x: -555, y: 242, size: 5, opacity: 25, src: '/icons/star.svg' },
  { side: 'right', x: -184, y: 260, size: 4, opacity: 10, src: '/icons/star.svg' },
  { side: 'right', x: -215, y: 1, size: 4, opacity: 10, src: '/icons/star.svg' },
  { side: 'right', x: -400, y: 1, size: 8, opacity: 10, src: '/icons/moon.svg' },
  
  // Lado izquierdo
  { side: 'left', x: -300, y: 250, size: 8, opacity: 10, src: '/icons/star.svg' },
  { side: 'left', x: -495, y: 99, size: 5, opacity: 15, src: '/icons/star.svg' },
  { side: 'left', x: -110, y: 100, size: 4, opacity: 15, src: '/icons/star.svg' },
  { side: 'left', x: -40, y: 200, size: 6, opacity: 15, src: '/icons/star.svg' },
  { side: 'left', x: -555, y: 242, size: 5, opacity: 15, src: '/icons/star.svg' },
  { side: 'left', x: -184, y: 260, size: 4, opacity: 20, src: '/icons/star.svg' },
  { side: 'left', x: -215, y: 1, size: 4, opacity: 20, src: '/icons/star.svg' },

]

const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 850
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

const poemas = [
    `"Bajo el manto de estrellas  
tu mirada brilla,  
como el reflejo del cielo  
en el agua tranquila.

Cada destello en tus ojos  
es un secreto guardado,  
un universo entero  
en cada parpadeo.

No necesito palabras,  
con verte, ya lo entiendo:  
el brillo de las estrellas  
vive en tus ojos."`,

  `"Tu rostro emerge como un susurro en la penumbra, lento y sereno bajo la luz de la luna. Cada línea, cada curva, es una historia sin voz que solo la noche sabe escuchar. La luz roza tu piel con una suavidad que parece un recuerdo, y la luna, paciente, va pintando tu silueta como si fuera un secreto. El viento calla, el tiempo se detiene, y en ese instante suspendido, el mundo entero observa en silencio mientras la luna te besa con su caricia de plata."

`,

`"Te entrego mi corazón  
en cada suspiro que se pierde entre tus palabras,  
sin pedir nada a cambio,  
solo un ligero toque de tus labios mi piel.

Es un intercambio sencillo,  
un gesto leve,  
pero en ese roce,  
mi alma se despierta  
y mi ser se estremece.

No busco promesas ni eternidades,  
solo un instante en el que el mundo se detenga  
y solo existan tus labios,  
mi corazón,  
y la suavidad de este momento compartido."`
];

const poemaActual = ref('Busca donde las estrellas no solo brillan, sino susurran')
let yaMostroPrimera = false

function cambiarPoema() {
  if (!yaMostroPrimera) {
    yaMostroPrimera = true
    return
  }

  let nuevo
  do {
    nuevo = poemas[Math.floor(Math.random() * poemas.length)]
  } while (nuevo === poemaActual.value)

  poemaActual.value = nuevo
}
//*animacion caida botton
const falling = ref(false);
const showButton = ref(true);

const handleFall = () => {
  falling.value = true;
};

const handleAnimationEnd = () => {
  falling.value = false;
  showButton.value = false;

  setTimeout(() => {
    showButton.value = true;
  }, 3000);
};

const bubbleText = ref("Hi! What are we designing today?");

const phrases = [
  "Hi! What are we designing today?",
  "Awesome! Getting everything ready...",
  "Mmm I'm craving a burger 🍔",
  "Hakuna Matata",
  "Ready to create some magic!",
  "Time to design something amazing!",
  "Got something in mind? Let's make it happen!"
];

const isHovering = ref(false);
let hoverTimeout;

const createConfetti = () => {
  const bubble = document.querySelector('.chat-bubble');
  const rect = bubble.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x: (x / window.innerWidth), y: (y / window.innerHeight) },
    colors: ['#000000', '#454545', '#99999', '#C0C0C0', '#808080'],
  });
};

const handleHover = () => {
  if (!isHovering.value) {
    isHovering.value = true;

    const bubble = document.querySelector('.chat-bubble');
    bubble.style.transition = 'transform 1.5s ease-out';
    bubble.style.transform = 'scale(1.5)';

    hoverTimeout = setTimeout(() => {
      createConfetti();
      bubble.style.opacity = 0;
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      bubbleText.value = randomPhrase;

      setTimeout(() => {
        bubble.style.opacity = 1;
        bubble.style.transform = 'scale(1)';
        isHovering.value = false;
      }, 700);
    }, 300);
  }
};

const handleLeave = () => {
  if (isHovering.value) {
    clearTimeout(hoverTimeout);
    const bubble = document.querySelector('.chat-bubble');
    bubble.style.transition = 'transform 0.5s ease-in';
    bubble.style.transform = 'scale(1)';
    isHovering.value = false;
  }
};

const email = 'luafergg@gmail.com';
const copied = ref(false);

const copyToClipboard = () => {
  navigator.clipboard.writeText(email);
  copied.value = true;

  setTimeout(() => {
    copied.value = false;
  }, 2000);
};

const imageList = ['01.png', '02.png', '03.png', '04.png','05.png', '06.png', '07.png', '08.png'];
const duplicatedImages = [...imageList, ...imageList];





</script>

<style scoped>

  input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  margin-top: -1px; /* centra el thumb */
}
input[type="range"]::-moz-range-thumb {
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
}
  .timeline-wrapper {
    min-height: 100vh; /* Asegura espacio para el componente */
    position: relative;
  }
  .social-icon {
    width: 20px;
    height: 20px;
  }
    /* Ocultar los textos en pantallas pequeñas y mostrar los íconos */
  @media (max-width: 900px) {
    .social-link span {
      display: none;
    /* Reducir separación entre íconos */
    
  }

  .social-icon {
    display: inline-block; /* Mostrar los íconos */
  }

  .social-link img {
    display: inline-block;
  /* Separar el ícono del siguiente enlace */
      
  }
    
  }
  .scroll-container {
    scroll-snap-type: none;
  }

  @media (min-width: 768px) {
    .scroll-container {
      scroll-snap-type: y mandatory;
    }
  }


  .snap-section {
    scroll-snap-align: start;
    height: auto;
  }

  @media (min-width: 768px) {
    .snap-section {
      height: 100vh;
    }
}
</style>
