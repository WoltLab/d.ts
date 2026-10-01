/**
 * Manages the list of configured object filters of an `ObjectFilterFormField`.
 * New filters are configured through a dialog, the resulting list is written
 * into a hidden input field when the form is submitted.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
/**
 * A filter that has already been configured.
 */
type Filter = {
    identifier: string;
    summary: string;
    value: string;
};
type SerializedData = Filter[];
/**
 * Initializes the filter builder for the given container.
 *
 * @param container element that holds the list of configured filters, its id is used as the name of the submitted value
 * @param endpoint URL of the dialog to configure a new filter
 * @param values filters that were configured before
 */
export declare function setup(container: HTMLElement, endpoint: string, values: SerializedData): void;
export {};
