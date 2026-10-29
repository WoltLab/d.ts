/**
 * Fetches the daily statistics of the requested types, grouped by the requested time unit.
 *
 * @author Alexander Ebert
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle all
 */
import { ApiResult } from "WoltLabSuite/Core/Api/Result";
export type DateGrouping = "daily" | "weekly" | "monthly" | "yearly";
export type StatValue = "counter" | "total";
export type StatSeries = {
    objectTypeID: number;
    label: string;
    data: Array<{
        date: string;
        value: number;
    }>;
};
export declare function getStats(startDate: string, endDate: string, objectTypeIDs: number[], dateGrouping: DateGrouping, value: StatValue): Promise<ApiResult<StatSeries[]>>;
