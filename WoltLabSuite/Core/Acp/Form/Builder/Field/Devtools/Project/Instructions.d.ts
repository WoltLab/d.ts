/**
 * Manages the instructions entered in a devtools project instructions form field.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import Template from "../../../../../../Template";
interface Instruction {
    application: string;
    errors?: string[];
    pip: string;
    runStandalone: number;
    value: string;
}
interface InstructionsData {
    errors?: string[];
    fromVersion?: string;
    instructions?: Instruction[];
    type: InstructionsType;
}
type InstructionsType = "install" | "update";
type InstructionsId = number | string;
type PipFilenameMap = {
    [k: string]: string;
};
declare class Instructions {
    protected readonly addButton: HTMLAnchorElement;
    protected readonly form: HTMLFormElement;
    protected readonly formFieldId: string;
    protected readonly fromVersion: HTMLInputElement;
    protected instructionCounter: number;
    protected instructionsCounter: number;
    protected readonly instructionsEditDialogTemplate: Template;
    protected readonly instructionsList: HTMLUListElement;
    protected readonly instructionsType: HTMLSelectElement;
    protected readonly instructionsTemplate: Template;
    protected readonly instructionEditDialogTemplate: Template;
    protected readonly pipDefaultFilenames: PipFilenameMap;
    protected static readonly applicationPips: string[];
    protected static readonly packageIdentifierRegExp: RegExp;
    protected static readonly versionRegExp: RegExp;
    constructor(formFieldId: string, instructionsTemplate: Template, instructionsEditDialogTemplate: Template, instructionEditDialogTemplate: Template, pipDefaultFilenames: PipFilenameMap, existingInstructions: InstructionsData[]);
    /**
     * Adds an instruction to a set of instructions as a consequence of the given event.
     * If the instruction data is invalid, an error message is shown and no instruction is added.
     */
    protected addInstruction(event: Event): void;
    /**
     * Adds an instruction to the set of instructions with the given id.
     */
    protected addInstructionByData(instructionsId: InstructionsId, instructionData: Instruction): void;
    /**
     * Adds a set of instructions.
     *
     * If the instructions data is invalid, an error message is shown and no instruction set is added.
     */
    protected addInstructions(event: Event): void;
    /**
     * Adds a set of instructions.
     */
    protected addInstructionsByData(instructionsData: InstructionsData): void;
    /**
     * Is called if the selected package installation plugin of an instruction is changed.
     */
    protected changeInstructionPip(event: Event): void;
    /**
     * Opens a dialog to edit an existing instruction.
     */
    protected editInstruction(event: Event): void;
    /**
     * Opens a dialog to edit an existing set of instructions.
     */
    protected editInstructions(event: Event): void;
    /**
     * Adds an instruction after pressing ENTER in a relevant text field.
     */
    protected instructionKeyPress(event: KeyboardEvent): void;
    /**
     * Adds a set of instruction after pressing ENTER in a relevant text field.
     */
    protected instructionsKeyPress(event: KeyboardEvent): void;
    /**
     * Removes an instruction by clicking on its delete button.
     */
    protected removeInstruction(event: Event): void;
    /**
     * Removes a set of instructions by clicking on its delete button.
     *
     * @param	{Event}		event		delete button click event
     */
    protected removeInstructions(event: Event): void;
    /**
     * Adds all necessary (hidden) form fields to the form when submitting the form.
     */
    protected submit(): void;
    /**
     * Toggles the visibility of the application form field based on the selected pip for the instructions with the given id.
     */
    protected toggleApplicationFormField(instructionsId: InstructionsId): void;
    /**
     * Toggles the visibility of the `fromVersion` form field based on the selected instructions type.
     */
    protected toggleFromVersionFormField(): void;
    /**
     * Returns `true` if the currently entered update "from version" is valid. Otherwise `false` is returned and an error
     * message is shown.
     */
    protected validateFromVersion(inputField: HTMLInputElement): boolean;
    /**
     * Returns `true` if the entered update instructions type is valid.
     * Otherwise `false` is returned and an error message is shown.
     */
    protected validateInstructionsType(): boolean;
}
export = Instructions;
