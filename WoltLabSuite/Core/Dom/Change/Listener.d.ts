/**
 * Allows to be informed when the DOM may have changed and
 * new elements that are relevant to you may have been added.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @deprecated 6.0 Use the helper functions in `WoltLabSuite/Core/Helper/Selector` instead.
 */
declare const DomChangeListener: {
    /**
     * @see CallbackList.add
     * @deprecated 6.0 Use the helper functions in `WoltLabSuite/Core/Helper/Selector` instead.
     */
    add: (identifier: string, callback: (...args: any[]) => void) => void;
    /**
     * @see CallbackList.remove
     */
    remove: (identifier: string) => void;
    /**
     * Triggers the execution of all the listeners.
     * Use this function when you added new elements to the DOM that might
     * be relevant to others.
     * While this function is in progress further calls to it will be ignored.
     */
    trigger(): void;
};
export = DomChangeListener;
