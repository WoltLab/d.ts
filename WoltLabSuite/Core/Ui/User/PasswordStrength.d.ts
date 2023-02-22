/**
 * Adds a password strength meter to a password input and exposes
 * zxcbn's verdict as sibling input.
 *
 * @author	Tim Duesterhus
 * @copyright	2001-2020 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
declare class PasswordStrength {
    private readonly input;
    private zxcvbn;
    private relatedInputs;
    private staticDictionary;
    private feedbacker;
    private wrapper;
    private readonly score;
    private readonly verdictResult;
    constructor(input: HTMLInputElement, options: Partial<Options>);
    private evaluate;
}
export = PasswordStrength;
interface Options {
    relatedInputs: PasswordStrength["relatedInputs"];
    staticDictionary: PasswordStrength["staticDictionary"];
    feedbacker: PasswordStrength["feedbacker"];
}
