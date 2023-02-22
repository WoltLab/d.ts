/**
 * The `confirmationFactory()` offers a consistent way to
 * prompt the user to confirm an action.
 *
 * The actions at minimum require you to provide the question
 * of the dialog. The question is used as the title of dialog
 * and must always be a full sentence that makes a reference
 * to the elements being affectedby the action.
 *
 * Confirmation dialogs should only be presented for actions
 * that are either destructive or that might have a severe
 * impact when executed unintentionally. You should not prompt
 * the user for actions that have no harmful impact in order
 * to prevent confirmation fatigue.
 *
 * Please see the documentation for the guidelines on
 * confirmation dialogs and the phrasing of the question.
 *
 * @author Alexander Ebert
 * @copyright 2001-2022 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.0
 */
import { ConfirmationCustom } from "./Confirmation/Custom";
type ResultSoftDeleteWithoutReason = {
    result: boolean;
};
type ResultConfirmationWithReason = {
    result: boolean;
    reason: string;
};
declare class ConfirmationPrefab {
    custom(question: string): ConfirmationCustom;
    delete(title?: string): Promise<boolean>;
    restore(title?: string): Promise<boolean>;
    softDelete(): Promise<ResultSoftDeleteWithoutReason>;
    softDelete(title: string): Promise<ResultSoftDeleteWithoutReason>;
    softDelete(title: string, askForReason: false): Promise<ResultSoftDeleteWithoutReason>;
    softDelete(title: string, askForReason: true): Promise<ResultConfirmationWithReason>;
    withReason(question: string, isOptional: boolean): Promise<ResultConfirmationWithReason>;
}
export declare function confirmationFactory(): ConfirmationPrefab;
export {};
