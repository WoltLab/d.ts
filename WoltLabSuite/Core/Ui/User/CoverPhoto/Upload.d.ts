/**
 * Uploads the user cover photo via AJAX.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import { ResponseData } from "../../../Ajax/Data";
import Upload from "../../../Upload";
interface AjaxResponse extends ResponseData {
    returnValues: {
        errorMessage?: string;
        url?: string;
    };
}
/**
 * @constructor
 */
declare class UiUserCoverPhotoUpload extends Upload {
    private readonly userId;
    constructor(userId: number);
    protected _getParameters(): ArbitraryObject;
    protected _success(uploadId: number, data: AjaxResponse): void;
}
export = UiUserCoverPhotoUpload;
