import { defineNuxtModule, createResolver, addPlugin, addComponent } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  accent?: string
  bg?: string
  'accent-bg'?: string
  'text-light'?: string
  text?: string
  border?: string
  code?: string
  preformatted?: string
  marked?: string
  disabled?: string
  [key: string]: string | undefined
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-simple-css',
    configKey: 'nuxtSimpleCSS',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.css.push('simpledotcss/simple.min.css')

    // add options to runtime config
    nuxt.options.runtimeConfig.public.nuxtSimpleCSS = defu(
      nuxt.options.runtimeConfig.public.nuxtSimpleCSS,
      options
    )

    // add alias for nitro
    nuxt.hooks.hook('nitro:config', (config) => {
      config.plugins = config.plugins || []
      config.plugins.push(resolver.resolve('./runtime/nitro-plugin'))
    })
  },
})
