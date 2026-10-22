/**
 * Provides the media manager dialog for inserting media files.
 *
 * @author  Matthias Schmidt, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 * @deprecated 6.3 Use `WoltLabSuite/Core/Component/Media/Manager` instead.
 */
import { MediaManagerEditorOptions } from "../Data";
export declare class MediaManagerEditor {
    #private;
    constructor(options: Partial<MediaManagerEditorOptions>);
}
export default MediaManagerEditor;
