/**
 * Provides the media manager dialog for selecting media for input elements.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import MediaManager from "./Base";
import { Media, MediaManagerSelectOptions } from "../Data";
declare class MediaManagerSelect extends MediaManager<MediaManagerSelectOptions> {
    protected _activeButton: HTMLElement | null;
    protected readonly _buttons: HTMLCollectionOf<HTMLInputElement>;
    protected readonly _storeElements: WeakMap<HTMLElement, HTMLInputElement>;
    constructor(options: Partial<MediaManagerSelectOptions>);
    protected _addButtonEventListeners(): void;
    /**
     * Handles clicking on a media choose icon.
     */
    protected _chooseMedia(event: Event): void;
    protected _click(event: Event): void;
    getMode(): string;
    setupMediaElement(media: Media, mediaElement: HTMLElement): void;
    /**
     * Handles clicking on the remove button.
     */
    protected _removeMedia(event: Event): void;
}
export = MediaManagerSelect;
