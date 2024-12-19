/**
 * Handles Google reCaptcha.
 *
 * @author Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
type ReCaptchaType = "v3" | "v2" | "invisible";
export declare class Recaptcha {
    #private;
    constructor(recaptchaType: ReCaptchaType, publicKey: string, bucketID: string, captchaID?: string);
    ensureRecaptchaLoaded(): Promise<void>;
    execute(): Promise<string>;
}
export {};
