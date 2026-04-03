Español (España) | [English](../../README.md) | [简体中文](../zh-cn/README.zh-CN.md) | [日本語](../ja/README-ja.md) | [Português Brasileiro](../pt-br/README-pt-br.md) | [한국어](../ko/README-ko.md) | [Русский](../ru/README-ru.md) | [עברית](./docs/he/README-he.md)

<p align="center"><a href="https://dayjs.io/" target="_blank" rel="noopener noreferrer"><img width="550"
                                                                             src="https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
                                                                             alt="Day.js"></a></p>
<p align="center">Alternativa rápida y ligera <b>2kB</b> a Moment.js, con la misma API moderna</p>
<br>
<p align="center">
    <a href="https://unpkg.com/dayjs/dayjs.min.js"><img
            src="https://img.badgesize.io/https://unpkg.com/dayjs/dayjs.min.js?compression=gzip&style=flat-square"
            alt="Gzip Size"></a>
    <a href="https://www.npmjs.com/package/dayjs"><img src="https://img.shields.io/npm/v/dayjs.svg?style=flat-square&colorB=51C838"
                                                       alt="NPM Version"></a>
    <a href="https://github.com/hamzaKaGit/dayjs/actions/workflows/check.yml"><img
            src="https://img.shields.io/github/actions/workflow/status/hamzaKaGit/dayjs/check.yml?style=flat-square" alt="Build Status"></a>
    <a href="https://codecov.io/gh/hamzaKaGit/dayjs"><img
            src="https://img.shields.io/codecov/c/github/hamzaKaGit/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/hamzaKaGit/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License"></a>
    <br>
    <a href="https://saucelabs.com/u/dayjs">
        <img width="750" src="https://user-images.githubusercontent.com/17680888/40040137-8e3323a6-584b-11e8-9dba-bbe577ee8a7b.png" alt="Sauce Test Status">
    </a>
</p>

> Day.js es una librería minimalista para JavaScript que analiza, valida, manipula y muestra fechas y horas para navegadores modernos, manteniendo una API casi completamente compatible con Moment.js. Si usas o has usado Moment.js, ya sabes usar Day.js

```js
dayjs()
  .startOf('month')
  .add(1, 'day')
  .set('year', 2018)
  .format('YYYY-MM-DD HH:mm:ss')
```

- 🕒 API & patrones familiares para usuarios de Moment.js
- 💪 Inmutable
- 🔥 Encadenable
- 🌐 Soporta I18n
- 📦 Mini librería de 2kb
- 👫 Compatible con todos los navegadores

---

# Primeros pasos

### Documentación

Puedes encontrar más detalles, la API y otros documentos en [dayjs.io](https://dayjs.io/) el sitio web.

## Instalación

```console
npm install @hamzaka/dayjs --save
```

📚[Guía de instalación](https://dayjs.io/docs/en/installation/installation)

## API

Es fácil el usar las APIs de Day.js para analizar, validar, manipular y mostrar fechas y horas.

```javascript
dayjs('2018-08-08') // analiza

dayjs().format('{YYYY} MM-DDTHH:mm:ss SSS [Z] A') // da formato

dayjs()
  .set('month', 3)
  .month() // get & set

dayjs().add(1, 'year') // manipula

dayjs().isBefore(dayjs()) // consulta
```

📚[Referencia de la API](https://dayjs.io/docs/en/parse/parse)

## I18n

Day.js soporta muy bien la internacionalización.

Pero no se incluirá en tu compilación final a menos que así lo requieras.

```javascript
import '@hamzaka/dayjs/locale/es' // carga bajo demanda

dayjs.locale('es') // usar la configuración regional española globalmente

dayjs('2018-05-05')
  .locale('zh-cn')
  .format() // usar el chino simplificado en una instancia concreta
```

📚[Internacionalización](https://dayjs.io/docs/en/i18n/i18n)

## Complementos

Un complemento o _plugin_ es un módulo independiente que puede añadirse a Day.js para extender su funcionalidad o añadir nuevas características.

```javascript
import advancedFormat from '@hamzaka/dayjs/plugin/advancedFormat' // carga bajo demanda

dayjs.extend(advancedFormat) // uso del complemento

dayjs().format('Q Do k kk X x') // ahora tenemos más formatos disponibles
```

📚[Lista de complementos](https://dayjs.io/docs/en/plugin/plugin)

## Patrocinadores

Apoya a este proyecto convirtiéndote en un patrocinador. Tu logo aparecerá aquí, enlazado a tu sitio web. [[Conviértete en un patrocinador](https://opencollective.com/dayjs#sponsor)]

[![Avatar patrocinador 1](https://opencollective.com/dayjs/sponsor/0/avatar.svg)](https://opencollective.com/dayjs/sponsor/0/website)
[![Avatar patrocinador 2](https://opencollective.com/dayjs/sponsor/1/avatar.svg)](https://opencollective.com/dayjs/sponsor/1/website)
[![Avatar patrocinador 3](https://opencollective.com/dayjs/sponsor/2/avatar.svg)](https://opencollective.com/dayjs/sponsor/2/website)

## Contribuidores

Este proyecto existe gracias a todas las personas que contribuyen en él.

Por favor, danos una 💖 estrella 💖 para apoyarnos. Gracias.

¡Y gracias también a todos nuestros micromecenas! 🙏
<a alt="Mural de avatares de micromecenas" href="https://opencollective.com/dayjs#backers" target="_blank"><img src="https://opencollective.com/dayjs/contributors.svg?width=890" /></a>

## Licencia

Day.js está licenciado bajo la [Licencia MIT](./LICENSE).
