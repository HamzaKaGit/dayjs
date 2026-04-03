import { PluginFunc } from '@hamzaka/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hamzaka/dayjs' {
  interface Dayjs {
    weekday(): number

    weekday(value: number): Dayjs
  }
}
