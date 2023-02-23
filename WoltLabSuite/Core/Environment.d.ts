/**
 * Provides basic details on the JavaScript environment.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Determines environment variables.
 */
export declare function setup(): void;
/**
 * Returns the lower-case browser identifier.
 *
 * Possible values:
 *  - chrome: Chrome and Opera
 *  - firefox
 *  - microsoft: Internet Explorer and Microsoft Edge
 *  - safari
 */
export declare function browser(): string;
/**
 * Returns the browser platform.
 *
 * Possible values:
 *  - desktop
 *  - android
 *  - ios: iPhone, iPad and iPod
 *  - windows: Windows on phones/tablets
 */
export declare function platform(): string;
/**
 * Returns true if browser is potentially used with a touchscreen.
 *
 * Warning: Detecting touch is unreliable and should be avoided at all cost.
 */
export declare function touch(): boolean;
