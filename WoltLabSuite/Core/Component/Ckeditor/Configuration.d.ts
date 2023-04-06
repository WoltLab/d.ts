/**
 * Helper class to construct the CKEditor configuration.
 *
 * @author Alexander Ebert
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import type { EditorConfig } from "@ckeditor/ckeditor5-core/src/editor/editorconfig";
export type Features = {
    alignment: boolean;
    attachment: boolean;
    autosave: string;
    code: boolean;
    codeBlock: boolean;
    heading: boolean;
    html: boolean;
    image: boolean;
    link: boolean;
    list: boolean;
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
};
export declare function createConfigurationFor(features: Features): EditorConfig;
