/**
 * Handles the trophy image upload.
 *
 * @author  Joshua Ruesweg
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import Upload from "../../../Upload";
import { UploadOptions } from "../../../Upload/Data";
interface AjaxResponse {
    returnValues: {
        url: string;
    };
}
interface AjaxResponseError {
    returnValues: {
        errorType: string;
    };
}
declare class TrophyUpload extends Upload {
    private readonly trophyId;
    private readonly tmpHash;
    constructor(trophyId: number, tmpHash: string, options: Partial<UploadOptions>);
    protected _getParameters(): ArbitraryObject;
    protected _success(uploadId: number, data: AjaxResponse): void;
    protected _failure(uploadId: number, data: AjaxResponseError): boolean;
}
export = TrophyUpload;
