/**
 * Collects imports for core CKEditor types in a central location.
 *
 * @author Tim Duesterhus
 * @copyright 2001-2023 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 * @woltlabExcludeBundle tiny
 */
export type { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
export type { CodeBlockConfig } from "@ckeditor/ckeditor5-code-block";
export type { Element } from "@ckeditor/ckeditor5-engine";
import type { EditorConfig as UpstreamEditorConfig, ToolbarConfigItem } from "@ckeditor/ckeditor5-core";
type WoltlabBbcodeButton = {
    icon?: string;
    name: string;
    label: string;
};
type WoltlabBbcodeConfig = WoltlabBbcodeButton[];
interface EditorConfig extends UpstreamEditorConfig {
    woltlabBbcode?: WoltlabBbcodeConfig;
}
export type { EditorConfig, ToolbarConfigItem };
