/**
 * Provides data of the active user.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import type WoltlabCoreDialogElement from "../Element/woltlab-core-dialog";
type CallbackCaptcha = () => unknown;
declare const ControllerCaptcha: {
    /**
     * Registers a captcha with the given identifier and callback used to get captcha data.
     */
    add(captchaId: string, callback: CallbackCaptcha): void;
    /**
     * Deletes the captcha with the given identifier.
     */
    delete(captchaId: string): void;
    /**
     * Returns true if a captcha with the given identifier exists.
     */
    has(captchaId: string): boolean;
    /**
     * Returns the data of the captcha with the given identifier.
     *
     * @param  {string}  captchaId  captcha identifier
     * @return  {Object}  captcha data
     */
    getData(captchaId: string): unknown;
    setupDialog(dialog: WoltlabCoreDialogElement, captchaId: string): Promise<ArbitraryObject>;
};
export = ControllerCaptcha;
