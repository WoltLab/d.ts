/**
 * Provides data of the active user.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare const _default: {
    /**
     * Returns the link to the active user's profile or an empty string
     * if the active user is a guest.
     */
    getLink(): string;
    /**
     * Initializes the user object.
     */
    init(userId: number, username: string, link: string): void;
    readonly userId: number;
    readonly username: string;
};
export = _default;
