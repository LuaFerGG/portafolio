<template>
<header class="bg-[#E3E3E3] pt-[10px] sm:pt-[40px] pl-4 pr-4 lg:pl-20 lg:pr-20 z-10 transition-[padding] duration-300 ease-in-out">
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 p-4 text-[#868686]">
    
    <!-- Grupo: Email + Botones -->
    <div class="flex flex-row justify-center sm:justify-start items-center space-x-3 sm:space-x-4 font-semibold order-1 sm:order-none">
      <span class="hidden sm:inline" v-show="!isMobile">luafergg@gmail.com</span>

      <!-- Botón Copiar -->
      <button
        @click="copyToClipboard"
        class="bg-[#FFFFFF] shadow-sm w-[80px] sm:w-[100px] px-2 sm:px-4 py-1 rounded-full hover:bg-[#242424] hover:text-light00 transition text-center text-sm sm:text-base">
        {{ isMobile ? 'E-mail' : 'Copy' }}
      </button>

      <!-- Botón CV -->
      <a
        href="https://drive.google.com/file/d/14ONub5qdbXsatwyGjADjbIdWKlNV_r-l/view"
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
  <span class="lg:inline-block md:inline-block hidden hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">LinkedIn</span>

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
  <span class="lg:inline-block md:inline-block hidden hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">Behance</span>

  <span class="hidden md:inline-block  lg:inline">/</span>

  <!-- Fireweb (solo en móvil) -->
  <a 
    href="https://fireweb.digiapps.com.co"
    target="_blank"
    class="social-link hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition flex items-center md:hidden">
    <img
      src="/icons/icon_fireweb.svg"
      alt="Fireweb"
      class="bg-[#FFFFFF] p-2 rounded-full w-9 inline-block" />
  </a>
  <!-- Nombre de Fireweb en escritorio -->
  <span class="lg:inline-block hidden  md:inline-block hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">Fireweb</span>
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

  <main class="bg-[#EEEDEC] h-screen"> <!--fondo- fondo-->
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
    <section class=" flex flex-col justify-center items-center text-center py-6 px-4">
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
    </section>
  </div>

  <!-- ------------------------------------------------------Galería infinita tipo cinta transportadora---------------- -->

    <section class="flex items-center overflow-hidden w-full h-[200px] pt-2 opacity-[90%]">
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
    </section>
     
    <section class="bg-[#E3E3E3] w-full rounded-t-[60px] flex flex-col justify-center items-center text-center py-16 shadow-[0_-4px_2px_-1px_#D9D9D9]">
      <div class="w-full flex flex-col items-center text-center content-center pt-16">
              <div @click="handleFall"
          :class="['',falling? 'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">
          <h1 class="font-bold text-4xl lg:text-6xl text-[#242424] leading-tight">
              Bringing Vision to Life,<br>One Pixel at a Time
          </h1>
          </div>
        <div @click="handleFall"
          :class="['relative w-full flex items-center justify-center my-20',falling? 'animate-fall pointer-events-none' :'']"
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
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 pb-18">
        <!-- --------------------------------------first card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px] order-2">
          <div class="">
            <img src="/icons/icon_dev1.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-lg text-[#242424] font-bold pb-4">Development</h3>
          <p class="text-md">Bringing your projects to life with a mix of creativity and innovation, always aiming for something functional and fun.</p>
          </div>
          <!-- --------------------------------------second card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px]  order-1">
          <div class="">
            <img src="/icons/icon_design.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-lg text-[#242424] font-bold pb-4">Design & Creative</h3>
          <p class="text-md">Every design is a conversation... one that connects, engages, and inspires.</p>
        </div>      
          <!-- --------------------------------------third card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px]">
          <div class="">
            <img src="/icons/icon_ux.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-lg text-[#242424] font-bold pb-4">UI & UX</h3>
          <p class="text-md">Interfaces that are clear, fast, and flowing... every click feels like part of a unique experience...</p>
        </div>
        <!-- --------------------------------------fourth card--------------------------------- -->
        
        <div class="p-8 text-left max-w-[250px]">
          <div class="">
            <img src="/icons/icon_plants.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-lg text-[#242424] font-bold pb-4">Plants :D</h3>
          <p class="text-md">And yes, I'm a plant maniac, finding joy in each new leaf and the natural beauty plants bring to any space.</p>
        </div>
        </div>
      </div>
    </section>
    <section>
      <div class="bg-[#E3E3E3] w-full flex flex-col justify-center items-center text-center pt-[160px] border-t border-[#d9d9d9] rounded-b-[60px] pb-20 shadow-[0_4px_3px_-1px_#D9D9D9] relative overflow-visible">   
        <div class="relative z-[100]">
          <img src="/foto.png" alt="Fer, diseñadora gráfica" class="w-[150px] rounded-full border-[6px] border-[#FFFFFF] shadow-lg object-cover"/>

          <img src="/icons/star.svg" class="absolute left-[-650px] top-[0px] w-8 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-220px] top-[45px] w-7 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-400px] top-[50px] w-6 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-500px] top-[10px] w-5 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-110px] top-[10px] w-4 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-650px] top-[0px] w-8 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-220px] top-[45px] w-7 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-400px] top-[50px] w-6 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-500px] top-[10px] w-5 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-110px] top-[10px] w-4 opacity-10"alt="Luna" />
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
          <img src="/icons/star.svg" class="absolute left-[-90px] top-[10px] w-8 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-495px] top-[99px] w-5 opacity-15"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-110px] top-[100px] w-4 opacity-15"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-40px] top-[200px] w-6 opacity-15"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-555px] top-[242px] w-5 opacity-15"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-184px] top-[260px] w-4 opacity-20"alt="Luna" />
          <img src="/icons/star.svg" class="absolute left-[-215px] top-[1px] w-4 opacity-20"alt="Luna" />
          <img src="/icons/moon.svg" class="absolute right-[-400px] top-[1px] w-8 opacity-10" alt="Luna"/>

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
          <img src="/icons/star.svg" class="absolute right-[-90px] top-[10px] w-8 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-495px] top-[99px] w-5 opacity-5"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-110px] top-[100px] w-4 opacity-20"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-40px] top-[200px] w-6 opacity-15"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-555px] top-[242px] w-5 opacity-25"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-184px] top-[260px] w-4 opacity-10"alt="Luna" />
          <img src="/icons/star.svg" class="absolute right-[-215px] top-[1px] w-4 opacity-10"alt="Luna" />

        <!-- Burbuja siempre visible -->
<div class="relative bottom-[100px] z-[9999]">
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
            href="https://wa.me/+573223929826"
            target="_blank"
            class="bg-[#FFFFFF] font-bold text-[#242424] w-[130px] py-2 rounded-full transition-transform mx-auto hover:scale-105 shadow-sm text-center inline-block"
          >Whatsapp</a>
        </div>
      </div>
    </section>

<footer class="py-[50px] px-[24px] md:px-[150px] z-10">
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
         class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">
         LinkedIn</a>
      <span>/</span>
      <a href="https://www.behance.net/laferackerma1"
         target="_blank"
         class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">
         Behance</a>
      <span>/</span>
      <a href="https://fireweb.digiapps.com.co"
         target="_blank"
         class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">
         Fireweb</a>
    </div>
    
  </div>

</footer>

  </main>

</template>

<script setup>
import confetti from 'canvas-confetti';
import { ref, nextTick, onMounted } from 'vue';
import gsap from 'gsap';
import { useI18n } from 'vue-i18n';



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
</style>
