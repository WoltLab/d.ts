/**
 * Handles the JavaScript part of the rating form field.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
declare class Rating {
    protected readonly _field: HTMLElement;
    protected readonly _input: HTMLInputElement;
    protected readonly _ratingElements: Map<string, HTMLElement>;
    constructor(fieldId: string, value: string);
    /**
     * Saves the rating associated with the clicked rating element.
     */
    protected _listItemClick(event: Event): void;
    /**
     * Updates the rating UI when hovering over a rating element.
     */
    protected _listItemMouseEnter(event: Event): void;
    /**
     * Updates the rating UI when leaving a rating element by changing all rating elements
     * to their default state.
     */
    protected _listItemMouseLeave(): void;
    /**
     * Handles clicks on meta buttons.
     */
    protected _metaButtonClick(event: Event): void;
    /**
     * Updates the rating UI by changing the rating elements to the stored rating state.
     */
    protected _restoreRating(): void;
    /**
     * Toggles the state of the given icon based on the given state parameter.
     */
    protected _toggleIcon(icon: FaIcon, active?: boolean): void;
}
export = Rating;
