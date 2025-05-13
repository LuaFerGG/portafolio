// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        greeting: 'Hello!',
    },
    es: {
        greeting: '¡Hola!',
    },
}

const i18n = createI18n({
    legacy: false,       // MUY IMPORTANTE para <script setup>
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})

export default i18n