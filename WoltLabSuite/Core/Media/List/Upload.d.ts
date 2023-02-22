/**
 * Uploads media files.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import MediaUpload from "../Upload";
import { MediaListUploadOptions } from "../Data";
declare class MediaListUpload extends MediaUpload<MediaListUploadOptions> {
    protected _createButton(): void;
    protected _getParameters(): ArbitraryObject;
}
export = MediaListUpload;
