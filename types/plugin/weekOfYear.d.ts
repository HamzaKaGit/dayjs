import { PluginFunc } from '@hamzaka/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hamzaka/dayjs' {
  interface Dayjs {
    week(): number

    week(value : number): Dayjs
  }
}
