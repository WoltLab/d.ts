/**
 * Validates the username for the registration process.
 *
 * @author  Marcel Werk
 * @copyright  2001-2026 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    ok: true;
} | {
    ok: false;
    error: "invalid" | "notUnique";
};
export declare function validateUsername(username: string): Promise<Response>;
export {};
