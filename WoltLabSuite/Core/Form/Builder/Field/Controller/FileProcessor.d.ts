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
    constructor(fieldId: string, singleFileUpload?: boolean, imageOnly?: boolean, extraButtons?: ExtraButton[]);
    get classPrefix(): string;
    get showBigPreview(): boolean;
    protected addButtons(container: HTMLElement, element: WoltlabCoreFileElement): void;
    protected getDeleteButton(element: WoltlabCoreFileElement): HTMLButtonElement;
    protected getReplaceButton(element: WoltlabCoreFileElement): HTMLButtonElement;
    get values(): undefined | number | Set<number>;
}
export declare function getValues(fieldId: string): undefined | number | Set<number>;
