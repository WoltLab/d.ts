/**
 * Provides utility functions for date operations.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Returns the formatted date.
 */
export declare function formatDate(date: Date): string;
/**
 * Returns the formatted time.
 */
export declare function formatTime(date: Date): string;
/**
 * Returns the formatted date time.
 */
export declare function formatDateTime(date: Date): string;
/**
 * Formats a date using PHP's `date()` modifiers.
 *
 * @deprecated Use `Intl.DateTimeFormat()` instead.
 */
export declare function format(date: Date, format: string): string;
/**
 * Returns UTC timestamp, if date is not given, current time will be used.
 */
export declare function gmdate(date: Date): number;
/**
 * Returns a `<woltlab-core-date-time>` element based on the given date
 * just like a `<woltlab-core-date-time>` element created by
 * `wcf\system\template\plugin\TimeModifierTemplatePlugin`.
 */
export declare function getTimeElement(date: Date): WoltlabCoreDateTime;
/**
 * Returns a Date object with precise offset (including timezone and local timezone).
 */
export declare function getTimezoneDate(timestamp: number, offset: number): Date;
