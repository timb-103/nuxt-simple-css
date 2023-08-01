import type { NitroAppPlugin } from 'nitropack'
import { useRuntimeConfig } from '#imports'
import type { ModuleOptions } from '../module'

export default <NitroAppPlugin>function (nitro) {
  nitro.hooks.hook('render:html', (htmlContext) => {
    const options: ModuleOptions = useRuntimeConfig().public.nuxtSimpleCSS

    // return if no theme values
    if (!Object.keys(options).length) {
      return
    }

    // create a new style sheet with vars
    let css = ''
    Object.keys(options).forEach((key) => {
      css += `--${key}: ${options[key]} !important;`
    })
    const stylesheet = `<style>:root { ${css} }</style>`

    // push into head
    htmlContext.head.push(stylesheet)
  })
}
