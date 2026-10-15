/**
 * Replaces the generic filename of images pasted from the clipboard.
 *
 * Browsers and CKEditor name pasted images `image.<ext>`, which makes them
 * indistinguishable from each other in the list of uploaded files.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
export declare function normalizePastedFilename(file: File): File;
