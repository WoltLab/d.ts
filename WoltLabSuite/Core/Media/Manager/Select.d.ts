/**
 * Provides the media manager dialog for selecting media for input elements.
 *
 * @author  Matthias Schmidt, Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 * @deprecated 6.3 Use `WoltLabSuite/Core/Component/Media/Select` instead.
 */
import { MediaManagerSelectOptions } from "../Data";
declare class MediaManagerSelect {
    constructor(options: Partial<MediaManagerSelectOptions>);
}
export = MediaManagerSelect;
