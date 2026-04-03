import { PluginFunc } from '@hamzaka/dayjs'

declare interface PluginOptions {
    parseTwoDigitYear?: (yearString: string) => number
}

declare const plugin: PluginFunc<PluginOptions>
export = plugin
