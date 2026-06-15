import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  debug: true, // Change this - error will disappear
  experimental: {
    extractAsyncDataHandlers: true,
    externalVue: true,
    headNext: true,
    typescriptPlugin: true,
    viewTransition: true,
    writeEarlyHints: true,
    viteEnvironmentApi: true,
  },
  future: {
    compatibilityVersion: 5,
    typescriptBundlerResolution: true,
  },
  imports: {
    autoImport: false,
  },
  modules: [
    'nuxt-security', // remove this - error will disappear even with debug mode
  ],
})
