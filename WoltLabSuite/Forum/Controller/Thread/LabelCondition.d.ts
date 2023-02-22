/**
 * Handles toggling label groups based on a selected board.
 *
 * @author  Matthias Schmidt
 * @copyright  2001-2019 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
type BoardId = string;
type LabelGroupId = number;
type LabelGroupMapping = Record<BoardId, LabelGroupId[]>;
declare class ControllerThreadLabelCondition {
    private readonly _boardSelector;
    private readonly _labelGroupMapping;
    private readonly _labelLists;
    constructor(boardSelectorId: string, labelGroupMapping: LabelGroupMapping);
    /**
     * Toggles the visible label groups based on the selected board.
     */
    private change;
    /**
     * Unsets selected labels for invisible label choosers.
     */
    private submit;
}
export = ControllerThreadLabelCondition;
