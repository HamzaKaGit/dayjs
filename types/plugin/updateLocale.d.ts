import { PluginFunc } from '@hamzaka/dayjs'

declare const plugin: PluginFunc
export = plugin

declare module '@hamzaka/dayjs' {
  export function updateLocale(localeName: string, customConfig: Record<string, unknown>): Record<string, unknown>
}
