/**
 * A module providing the data from isaozler.com.
 * @module
 *
 * @example
 * ```ts
 * import * as data from '@isaozler/data/get'
 *
 * // data.all -> { sections: [ { sectionData: "see types" } ] }
 * // data.siteSettings: TSiteSettings
 * ```
 */

export * from "./types/index.ts"
export * from "./get.ts";
