/**
 * Promise-based API to use the Form Builder API with PSR-15 controllers.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
type Result<T> = {
    ok: true;
    result: T;
} | {
    ok: false;
    result: undefined;
};
export declare class FormBuilderSetup {
    fromEndpoint<T = unknown>(url: string): Promise<Result<T>>;
}
export default FormBuilderSetup;
