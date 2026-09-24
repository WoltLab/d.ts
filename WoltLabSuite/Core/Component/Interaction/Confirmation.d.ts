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
    Disable = "Disable",
    Custom = "Custom"
}
type ResultConfirmationWithReason = {
    result: boolean;
    reason?: string;
};
/**
 * Parses the JSON encoded list of affected objects from a data attribute. Absent or
 * malformed values yield an empty list, the confirmation is then shown without them.
 */
export declare function parseAffectedObjects(value: string | undefined): string[];
export declare function handleConfirmation(objectName: string, confirmationType: ConfirmationType, customMessage?: string, affectedObjects?: string[]): Promise<ResultConfirmationWithReason>;
export {};
