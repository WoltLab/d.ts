/**
 * Represents a confirmation type.
 *
 * @author Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
export declare enum ConfirmationType {
    None = "None",
    SoftDelete = "SoftDelete",
    SoftDeleteWithReason = "SoftDeleteWithReason",
    Restore = "Restore",
    Delete = "Delete",
    Custom = "Custom"
}
type ResultConfirmationWithReason = {
    result: boolean;
    reason?: string;
};
export declare function handleConfirmation(objectName: string, confirmationType: ConfirmationType, customMessage?: string): Promise<ResultConfirmationWithReason>;
export {};
