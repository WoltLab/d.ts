/**
 * @author    Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.1
 */
import WoltlabCoreFileElement from "WoltLabSuite/Core/Component/File/woltlab-core-file";
export interface ExtraButton {
    title: string;
    icon?: string;
    actionName: string;
}
export declare class FileProcessor {
    #private;
    constructor(fieldId: string, singleFileUpload?: boolean, useBigPreview?: boolean, simpleReplace?: boolean, hideDeleteButton?: boolean, thumbnailSize?: string, extraButtons?: ExtraButton[]);
    get classPrefix(): string;
    protected addButtons(container: HTMLElement, element: WoltlabCoreFileElement): void;
    protected getReplaceButton(element: WoltlabCoreFileElement): HTMLButtonElement;
    protected getDeleteButton(element: WoltlabCoreFileElement): HTMLButtonElement;
    get values(): undefined | number | Set<number>;
}
export declare function getValues(fieldId: string): undefined | number | Set<number>;
/**
 * Registers a callback that will be called when the value of the field changes.
 *
 * @since 6.2
 */
export declare function registerCallback(fieldId: string, callback: (values: undefined | number | Set<number>) => void): void;
/**
 * @since 6.2
 */
export declare function unregisterCallback(fieldId: string, callback: (values: undefined | number | Set<number>) => void): void;
