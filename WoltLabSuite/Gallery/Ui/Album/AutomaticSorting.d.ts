/**
 * Handles automatic sorting of all images in an album.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @sicne 5.2
 */
declare class AutomaticSorting {
    protected readonly albumId: number;
    protected submitButton: HTMLInputElement;
    constructor(albumId: number);
    /**
     * Initializes the sort handler.
     */
    protected init(): void;
    /**
     * Opens the dialog to select the property used for sorting and the sort order.
     */
    protected openDialog(): void;
    /**
     * Sorts the images.
     */
    protected sortImages(): void;
}
export = AutomaticSorting;
