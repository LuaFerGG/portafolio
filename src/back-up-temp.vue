<template>
  <header class="bg-[#e3e3e3] pt-[40px] pl-20 pr-20 z-10">
    <div class="flex items-center justify-between p-4 text-[#868686]">
      <div class="flex items-center space-x-4 font-semibold">
        <span>luafergg@gmail.com</span>

        <!-- Botón Copiar -->
        <button
          @click="copyToClipboard"
          class="bg-white shadow-sm w-[100px] px-4 py-1 rounded-full hover:bg-[#242424] hover:text-white transition">
          Copy
        </button>

        <!-- Botón CV -->
        <a
          href="https://drive.google.com/file/d/14ONub5qdbXsatwyGjADjbIdWKlNV_r-l/view"
          target="_blank"
          class="bg-white shadow-sm w-[100px] px-4 py-1 rounded-full hover:bg-[#242424] hover:text-white transition inline-block text-center">
          CV
        </a>
      </div>

      <div class="flex items-center space-x-4 text-[#868686]">
        <a href="https://www.linkedin.com/in/lua-ackermann-18014a355/" target="_blank" class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424]transition">LinkedIn</a>
        <span>/</span>
        <a href="https://www.behance.net/laferackerma1" target="_blank" class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424]transition">Behance</a>
        <span>/</span>
        <a href="https://fireweb.digiapps.com.co" target="_blank" class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">Fireweb</a>
      </div>
    </div>
  </header>

  <!-- Notificación con animación de entrada y salida -->
  <transition name="fade-slide">
    <div
      v-if="copied"
      class="fixed top-4 left-[253px] bg-[#242424] text-white px-4 py-1 rounded-full shadow-sm z-50">
      ¡Copiado!
    </div>
  </transition>

  <main class="bg-[#EEEDEC] h-screen"> <!--fondo- fondo-->
  <div class="bg-[#e3e3e3] py-12 rounded-b-[60px] shadow-[0_4px_2px_-1px_#D9D9D9]">
    <div class="flex justify-center items-start pt-[50px]">
      <div class="relative">
        <img src="/foto.png" alt="Foto de perfil" class="w-[150px] rounded-full border-[6px] border-white shadow-lg object-cover"/>

        <!-- Burbuja de chat encima de la imagen -->
        <div class="absolute -top-8 left-[60%] bg-white px-4 py-2 whitespace-nowrap rounded-3xl shadow-md text-sm text-[#242424] font-bold chat-bubble transition-all"
          @mouseover="handleHover" @mouseleave="handleLeave">
          {{ bubbleText }}

          <!-- Puntita de la burbuja -->
          <div class="absolute bottom-0 left-5 w-0 h-0 border-l-[10px] border-l-transparent
          border-r-[10px] border-r-transparent border-t-[10px] border-t-white translate-y-full"></div>
        </div>
      </div>
    </div>

    <!-- Texto y titulo -->
    <section class=" flex flex-col justify-center items-center text-center py-6 px-4">
      <div class="max-w-3xl">
        <h1 class="font-oswald font-bold md:text-5xl text-[#242424] leading-tight">Heart in digital<br />
          <span class="inline-block text-5xl font-semibold text-[#868686] py-4">brands, products,impact</span>
          <br/> and experience..
        </h1>
<button 
  class="mt-[60px] mb-3 bg-[#242424] text-white shadow-md font-semibold text-md px-8 py-4
    rounded-full flex items-center gap-2 transition-transform mx-auto">
  Latest Shots
</button>
      </div>
    </section>
  </div>

  <!-- ------------------------------------------------------Galería infinita tipo cinta transportadora---------------- -->

    <section class="flex items-center overflow-hidden w-full h-[200px] pt-2 opacity-[90%]">
      <div
        id="carousel"
        class="flex w-[200%] animate-scroll hover:[animation-play-state:paused] cursor-pointer">
      <img
        v-for="(image, index) in duplicatedImages"
        :key="index"
        :src="`/img/${image}`"
        :alt="`Imagen ${index + 1}`"
        class="h-[110px] w-auto px-10 object-cover opacity-100"/>
      </div>
    </section>
    <section class="bg-[#e3e3e3] w-full rounded-t-[60px] flex flex-col justify-center items-center text-center py-16 shadow-[0_-4px_2px_-1px_#D9D9D9]">
      <div class="w-full flex flex-col items-center text-center content-center pt-20">
          <h1 class="font-oswald font-bold md:text-5xl text-[#242424] leading-tight">
              Colaborar con marcas y agencias para <br> crear resultados impactantes.<!--No olvidar cambiar esto, suena muy ridiculo. :(  no se me ocurrio nada intereante-->
          </h1>
        <div @click="handleFall"
          :class="['relative w-full flex items-center justify-center my-20',falling? 'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">
          <div class="absolute right-[820px] top-[-4px] bg-[#242424] text-[#fafafa] rotate-[6deg] text-sm px-2 py-2 z-50 opacity-0 cursor-pointer hover:opacity-100 transition-opacity duration-500 ease-in-out">Don't touch</div>
          <div class="absolute w-full border-t border-[#d9d9d9]"></div>
        <div @click="handleFall"
          :class="['bg-[#FAFAFA] text-[#242424] rounded-full font-bold text-lg max-w-[150px] px-10 py-2 z-40 shadow-md',falling ? 
          'animate-fall pointer-events-none' :'']"
          :style="{ visibility: showButton ? 'visible' : 'hidden',
          opacity: showButton ? 1 : 0,
          transition: 'opacity 0.6s ease-in-out'
           }"
          @animationend="handleAnimationEnd">Services
        </div>
      </div>
      </div>
        <div class="grid grid-cols-4 gap-20 pb-18">
        <!-- --------------------------------------first card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px]">
          <div class="">
            <img src="/icons/icon_dev1.svg" alt="" class="w-[50px] py-4"/>
          </div>
          <h3 class="text-lg text-[#242424] font-bold pb-4">Development</h3>
          <p class="text-md">Bringing your projects to life with a mix of creativity and innovation, always aiming for something functional and fun.</p>
          </div>
          <!-- --------------------------------------second card--------------------------------- -->
        <div class="p-8 text-left max-w-[250px]">
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
    </section>
<section>
  <div class="bg-[#e3e3e3] w-full flex flex-col justify-center items-center text-center pt-20 border-t border-[#d9d9d9] rounded-b-[60px] pb-20 shadow-[0_4px_3px_-1px_#D9D9D9] relative overflow-hidden">   
    <div class="relative">
      <img src="/foto.png" alt="Fer, diseñadora gráfica" class="w-[150px] rounded-full border-[6px] border-white shadow-lg object-cover"/>

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
      class="absolute right-[-400px] top-[200px] w-5 cursor-pointer opacity-10 hover:opacity-100 hover:scale-150 transition"
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
<div
  class="absolute right-[-210px] top-[-150px] bg-white text-[#242424] font-bold text-sm px-4 py-2 rounded-xl shadow-md max-w-[400px] min-h-[20px] transition-all duration-500 ease-in-ou"
>
  <!-- Triángulo tipo "cola" -->
  <div class="absolute -left-2 top-3 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white"></div>
  {{ poemaActual }}
</div>
      <!-- Título principal -->
      <h1 class="font-oswald font-bold md:text-6xl pt-8 text-[#242424]">Tell me about your<br>next project</h1>
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
        class="bg-[#FAFAFA] font-bold text-[#242424] w-[130px] py-2 rounded-full transition-transform mx-auto hover:scale-105 shadow-sm text-center inline-block"
      >Whatsapp</a>
    </div>
  </div>
</section>

    <footer class="py-[50px] pl-[150px] pr-[150px] z-10">
        <div class="flex items-center justify-between p-4">
          <div class="flex items-center space-x-4 font-semibold">
          <span>© 2025 All rights reserved.</span>
        </div>
        <div class="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/lua-ackermann-18014a355/" 
            target="_blank"
            class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424]transition">LinkedIn</a>
            <span>/</span>
          <a
            href="https://www.behance.net/laferackerma1"
            target="_blank"
            class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424]transition">Behance</a>
            <span>/</span>
          <a
            href="https://fireweb.digiapps.com.co"
            target="_blank"
            class="hover:underline hover:text-[#242424] hover:font-bold decoration-[#242424] transition">Fireweb</a>
        </div>
      </div>
    </footer>
  </main>

</template>

<script setup>
import confetti from 'canvas-confetti';
import { ref, nextTick, onMounted } from 'vue';
import gsap from 'gsap'


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

  `"Tu rostro, una sombra en la penumbra,  
se dibuja lento bajo la luz de la luna.  
Cada curva, cada línea,  
una historia que se cuenta en silencio,  
un misterio que solo la noche entiende.

La luz toca tu piel, suave y callada,  
y la luna pinta, delicada, tu silueta  
como un suspiro que se escapa al viento,  
como un sueño que la oscuridad guarda.

No hay palabras, solo la quietud del instante,  
donde el tiempo se detiene  
y el mundo observa tu rostro en silencio,  
mientras la luna lo besa  
con una caricia de plata."`,

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
    bubble.style.transition = 'transform 2s ease-out';
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
      }, 1500);
    }, 1500);
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

</style>
