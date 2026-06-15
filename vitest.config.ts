import { resolve } from 'node:path'

import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      allowExternal: false,
      exclude: ['**/*.d.ts', '**/__mocks__/*.ts', '**/__tests__/*.ts'],
      provider: 'v8',
      reportOnFailure: false,
      reportsDirectory: resolve(__dirname, 'coverage'),
    },
    clearMocks: true,
    css: false,
    detectAsyncLeaks: false,
    globals: false,
    projects: [
      {
        resolve: {
          alias: {
            '~': resolve(__dirname, 'app'),
            '@': resolve(__dirname, 'app'),
          },
        },
        test: {
          name: 'unit',
          include: ['test/unit/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
      {
        test: {
          name: 'e2e',
          include: ['test/e2e/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['test/nuxt/**/*.{test,spec}.ts'],
          environment: 'nuxt',
        },
      }),
    ],
    reporters: ['verbose'],
    slowTestThreshold: 500,
    testTimeout: 2500,
    typecheck: {
      enabled: true,
      checker: 'vue-tsc',
    },
  },
})
