/**
 * @woltlabExcludeBundle tiny
 */
export interface LanguageData {
    title: string;
    file: string;
}
export type LanguageIdentifier = string;
export type PrismMeta = Record<LanguageIdentifier, LanguageData>;
/*!START*/ declare const metadata: PrismMeta; /*!END*/
export default metadata;
