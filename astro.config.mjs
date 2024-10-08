import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'

import lenis from 'astro-lenis'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), lenis()],
  output: 'server',
  adapter: vercel(),
})
