/**
 * Provides the thread form option add dialog.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since       5.2
 */
type CallbackThreadFormValue = (element: HTMLInputElement) => string;
export declare function init(containerId: string, editorId: string): void;
export declare function registerElement(elementId: string, valueCallback: CallbackThreadFormValue, elementRequired?: boolean): void;
export {};
