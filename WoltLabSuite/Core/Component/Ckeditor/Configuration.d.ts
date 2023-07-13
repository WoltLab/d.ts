/**
 * Helper class to construct the CKEditor configuration.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
import type { EditorConfig } from "./Types";
export type Features = {
    alignment: boolean;
    attachment: boolean;
    autosave: string;
    code: boolean;
    codeBlock: boolean;
    fontColor: boolean;
    fontFamily: boolean;
    fontSize: boolean;
    heading: boolean;
    html: boolean;
    image: boolean;
    link: boolean;
    list: boolean;
    mark: boolean;
    media: boolean;
    mention: boolean;
    quoteBlock: boolean;
    spoiler: boolean;
    strikethrough: boolean;
    submitOnEnter: boolean;
    subscript: boolean;
    superscript: boolean;
    table: boolean;
    underline: boolean;
    undo: boolean;
};
export declare function createConfigurationFor(features: Features): EditorConfig;
