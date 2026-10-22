/**
 * Selects a media file for an input element using the media manager.
 *
 * The button references the id of the hidden input that stores the id of the
 * media file via `data-store` and optionally the id of the element that shows
 * a preview of the selected media file via `data-display`.
 *
 * @author Matthias Schmidt, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle tiny
 */
export type MediaSelectOptions = {
    imagesOnly?: boolean;
    title?: string;
};
export declare function setup(button: HTMLElement, options?: MediaSelectOptions): void;
