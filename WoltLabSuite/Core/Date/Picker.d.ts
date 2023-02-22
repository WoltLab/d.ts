/**
 * Date picker with time support.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare const DatePicker: {
    /**
     * Initializes all date and datetime input fields.
     */
    init(): void;
    /**
     * Shows the previous month.
     */
    previousMonth(): void;
    /**
     * Shows the next month.
     */
    nextMonth(): void;
    /**
     * Returns the current Date object or null.
     */
    getDate(element: InputElementOrString): Date | null;
    /**
     * Sets the date of given element.
     *
     * @param  {(HTMLInputElement|string)}  element    input element or id
     * @param  {Date}              date    Date object
     */
    setDate(element: InputElementOrString, date: Date): void;
    /**
     * Returns the current value.
     */
    getValue(element: InputElementOrString): string;
    /**
     * Clears the date value of given element.
     */
    clear(element: InputElementOrString): void;
    /**
     * Reverts the date picker into a normal input field.
     */
    destroy(element: InputElementOrString): void;
    /**
     * Sets the callback invoked on picker close.
     */
    setCloseCallback(element: InputElementOrString, callback: Callback): void;
};
export = DatePicker;
type InputElementOrString = HTMLInputElement | string;
type Callback = () => void;
