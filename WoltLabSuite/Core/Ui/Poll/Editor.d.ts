/**
 * Handles the data to create and edit a poll in a form created via form builder.
 *
 * @author  Alexander Ebert, Matthias Schmidt
 * @copyright  2001-2020 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
interface UiPollEditorOptions {
    isAjax: boolean;
    maxOptions: number;
}
interface PollOption {
    optionID: string;
    optionValue: string;
}
declare class UiPollEditor {
    private readonly container;
    private readonly endTimeField;
    private readonly isChangeableNoField;
    private readonly isChangeableYesField;
    private readonly isPublicNoField;
    private readonly isPublicYesField;
    private readonly maxVotesField;
    private optionCount;
    private readonly options;
    private readonly optionList;
    private readonly questionField;
    private readonly resultsRequireVoteNoField;
    private readonly resultsRequireVoteYesField;
    private readonly sortByVotesNoField;
    private readonly sortByVotesYesField;
    private readonly wysiwygId;
    constructor(containerId: string, pollOptions: PollOption[], wysiwygId: string, options: UiPollEditorOptions);
    /**
     * Creates a poll option with the given data or an empty poll option of no data is given.
     */
    private createOption;
    /**
     * Populates the option list with the current options.
     */
    private createOptionList;
    /**
     * Handles validation errors returned by Ajax request.
     */
    private handleError;
    /**
     * Adds another option field below the current option field after pressing Enter.
     */
    private optionInputKeyDown;
    /**
     * Removes a poll option after clicking on its deletion button.
     */
    private removeOption;
    /**
     * Resets all poll fields.
     */
    private reset;
    /**
     * Handles the poll data if the form is submitted.
     */
    private submit;
    /**
     * Validates the poll data.
     */
    private validate;
    /**
     * Returns the data of the poll.
     */
    getData(): object;
    /**
     * Returns the selectable options in the poll.
     *
     * Format: `{optionID}_{option}` with `optionID = 0` if it is a new option.
     */
    getOptions(): string[];
}
export = UiPollEditor;
