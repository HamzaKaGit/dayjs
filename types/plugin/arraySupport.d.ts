import { PluginFunc } from '@hamzaka/dayjs'

declare module '@hamzaka/dayjs' {
  interface ConfigTypeMap {
    arraySupport: [number?, number?, number?, number?, number?, number?, number?]
  }
}

declare const plugin: PluginFunc
export = plugin
