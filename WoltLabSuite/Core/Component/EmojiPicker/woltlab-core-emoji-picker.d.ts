/**
 * The `<woltlab-core-emoji-picker>` element creates an emoji picker.
 *
 * @author Olaf Braun
 * @copyright 2001-2024 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.2
 */
import "emoji-picker-element";
import { PickerConstructorOptions } from "emoji-picker-element/shared";
import { Picker, Database } from "emoji-picker-element";
export declare const DATABASE_FOR_AUTO_COMPLETE: Database;
export declare class WoltlabCoreEmojiPicker extends Picker {
    constructor(props: PickerConstructorOptions | null | undefined);
    static get observedAttributes(): string[];
    focus(): void;
}
