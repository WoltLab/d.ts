/**
 * Initializes modules required for media clipboard.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import MediaManager from "./Manager/Base";
export declare function init(pageClassName: string, hasMarkedItems: boolean, mediaManager: MediaManager): void;
export declare function setMediaManager(mediaManager: MediaManager): void;
