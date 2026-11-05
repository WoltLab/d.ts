/**
 * Displays or removes client-side error messages of form builder fields and keeps the
 * ARIA attributes of the field in sync.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
/**
 * Displays the given error message for the field with the given id, replacing any existing
 * error messages, or removes all error messages if `null` or an empty string is given.
 */
export declare function setFieldError(fieldId: string, message: string | null, isHtml?: boolean): void;
