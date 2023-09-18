/**
 * Handles month view functionalities.
 *
 * @author  Marcel Werk
 * @copyright  2001-2022 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
declare const enum ShowBirthdays {
    Everyone = "everyone",
    Following = "following",
    Nobody = "nobody"
}
export declare function setup(showBirthdays: ShowBirthdays): void;
export {};
