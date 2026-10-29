/**
 * Manages the list of options of a poll, each option can either have a single
 * value or a value per language.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
export type PollOptionData = {
    optionID: number;
    optionValue: Record<string, string>;
};
type Languages = Record<string, string>;
export declare function setup(formField: HTMLInputElement, languages: Languages, maxOptions: number): void;
/**
 * Returns the serialized options of the poll option list with the given id.
 */
export declare function getOptionListValue(fieldId: string): string;
/**
 * Removes the poll option list with the given id, e.g. after the dialog has
 * been closed.
 */
export declare function removeOptionList(fieldId: string): void;
export {};
