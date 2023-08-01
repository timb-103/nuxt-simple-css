# Nuxt Simple CSS

Add [Simple CSS](https://github.com/kevquirk/simple.css) by Kev Quirk to your Nuxt 3 project.

- [🏀 Online playground](https://stackblitz.com/github/timb-103/nuxt-simple-css?file=playground%2Fapp.vue)

## Why?

If you are building lots of projects, it's handy to have some simple CSS rules that will make your project look nice and clean, without you having do add any CSS.

## Quick Setup

1. Add `nuxt-simple-css` dependency to your project

```bash
pnpm add -D nuxt-simple-css
yarn add --dev nuxt-simple-css
npm install --save-dev nuxt-simple-css
```

2. Add `nuxt-simple-css` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['nuxt-simple-css'],
})
```

That's it! You can now use Nuxt Simple CSS in your Nuxt app ✨

## Options

```js
export default defineNuxtConfig({
  nuxtSimpleCSS: {
    // ...options
  },
})
```

| Prop           | Type     | Default   |
| -------------- | -------- | --------- |
| `accent`       | `string` | `#0d47a1` |
| `bg`           | `string` | `#fff`    |
| `accent-bg`    | `string` | `#f5f7ff` |
| `text-light`   | `string` | `#585858` |
| `text`         | `string` | `#898EA4` |
| `border`       | `string` | `#898EA4` |
| `code`         | `string` | `#d81b60` |
| `preformatted` | `string` | `#444`    |
| `marked`       | `string` | `#ffdd33` |
| `disabled`     | `string` | `#efefef` |

### Live examples

- [https://thumbnail.video](https://thumbnail.video)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-simple-css/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-simple-css
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-simple-css.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-simple-css
[license-src]: https://img.shields.io/npm/l/nuxt-simple-css.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-simple-css
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
