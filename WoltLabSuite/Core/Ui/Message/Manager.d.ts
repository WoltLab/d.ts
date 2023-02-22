/**
 * Provides access and editing of message properties.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackObject, AjaxCallbackSetup, ResponseData } from "../../Ajax/Data";
interface MessageManagerOptions {
    className: string;
    selector: string;
}
type StringableValue = boolean | number | string;
declare class UiMessageManager implements AjaxCallbackObject {
    protected readonly _elements: Map<string, HTMLElement>;
    protected readonly _options: MessageManagerOptions;
    /**
     * Initializes a new manager instance.
     */
    constructor(options: MessageManagerOptions);
    /**
     * Rebuilds the list of observed messages. You should call this method whenever a
     * message has been either added or removed from the document.
     */
    rebuild(): void;
    /**
     * Returns a boolean value for the given permission. The permission should not start
     * with "can" or "can-" as this is automatically assumed by this method.
     */
    getPermission(objectId: string, permission: string): boolean;
    /**
     * Returns the given property value from a message, optionally supporting a boolean return value.
     */
    getPropertyValue(objectId: string, propertyName: string, asBool: true): boolean;
    getPropertyValue(objectId: string, propertyName: string, asBool: false): string;
    /**
     * Invokes a method for given message object id in order to alter its state or properties.
     */
    update(objectId: string, actionName: string, parameters?: ArbitraryObject): void;
    /**
     * Updates properties and states for given object ids. Keep in mind that this method does
     * not support setting individual properties per message, instead all property changes
     * are applied to all matching message objects.
     */
    updateItems(objectIds: string | string[], data: ArbitraryObject): void;
    /**
     * Bulk updates the properties and states for all observed messages at once.
     */
    updateAllItems(data: ArbitraryObject): void;
    /**
     * Sets or removes a message note identified by its unique CSS class.
     */
    setNote(objectId: string, className: string, htmlContent: string): void;
    /**
     * Updates a single property of a message element.
     */
    protected _update(element: HTMLElement, propertyName: string, propertyValue: StringableValue): void;
    /**
     * Updates the message element's state based upon a property change.
     */
    protected _updateState(element: HTMLElement, propertyName: string, propertyValue: StringableValue, propertyValueBoolean: boolean): void;
    /**
     * Toggles the message status bade for provided element.
     */
    protected _toggleMessageStatus(element: HTMLElement, className: string, phrase: string, badgeColor: string, addBadge: boolean): void;
    /**
     * Transforms camel-cased property names into their attribute equivalent.
     *
     * @deprecated 5.4 Access the value via `element.dataset` which uses camel-case.
     */
    protected _getAttributeName(propertyName: string): string;
    _ajaxSuccess(_data: ResponseData): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = UiMessageManager;
