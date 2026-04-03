import { PluginFunc } from '@hamzaka/dayjs'

declare module '@hamzaka/dayjs' {
  interface ConfigTypeMap {
    bigIntSupport: BigInt
  }
  export function unix(t: BigInt): Dayjs
}

declare const plugin: PluginFunc
export = plugin
