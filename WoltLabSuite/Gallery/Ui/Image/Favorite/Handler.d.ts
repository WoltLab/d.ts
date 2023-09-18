/**
 * Handles adding and removing images and videos to/from favorites.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.2
 */
import { AjaxCallbackObject, AjaxCallbackSetup, DatabaseObjectActionPayload } from "WoltLabSuite/Core/Ajax/Data";
declare class ImageFavoriteHandler implements AjaxCallbackObject {
    protected buttons: Map<number, HTMLAnchorElement>;
    constructor();
    /**
     * Initializes the favorite handler.
     */
    protected init(): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
    /**
     * Handles successfully adding or removing a favorite.
     */
    _ajaxSuccess(data: DatabaseObjectActionPayload): void;
    /**
     * Handles clicking on a favorite button.
     */
    protected click(event: MouseEvent): void;
}
export = ImageFavoriteHandler;
