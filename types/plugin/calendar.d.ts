import { PluginFunc, ConfigType } from '@hamzaka/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hamzaka/dayjs' {
  interface Dayjs {
    calendar(referenceTime?: ConfigType, formats?: object): string
  }
}
