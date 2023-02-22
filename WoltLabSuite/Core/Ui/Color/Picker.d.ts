/**
 * Wrapper class to provide color picker support. Constructing a new object does not
 * guarantee the picker to be ready at the time of call.
 *
 * @author      Alexander Ebert, Matthias Schmidt
 * @copyright  2001-2021 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
import { DialogCallbackObject, DialogCallbackSetup } from "../Dialog/Data";
import * as ColorUtil from "../../ColorUtil";
type CallbackSubmit = (data: ColorUtil.RGBA) => void;
declare const enum ColorSource {
    HEX = "hex",
    HSL = "hsl",
    RGBA = "rgba",
    Setup = "setup"
}
interface ColorPickerOptions {
    callbackSubmit: CallbackSubmit;
}
declare class UiColorPicker implements DialogCallbackObject {
    private readonly channels;
    protected colorInput: HTMLInputElement | null;
    protected colorTextInput: HTMLInputElement | null;
    protected readonly element: HTMLElement;
    private readonly hsl;
    private hslContainer?;
    protected readonly input: HTMLInputElement;
    protected newColor?: HTMLElement;
    protected oldColor?: HTMLElement;
    protected readonly options: ColorPickerOptions;
    /**
     * Initializes a new color picker instance.
     */
    constructor(element: HTMLElement, options?: Partial<ColorPickerOptions>);
    _dialogSetup(): ReturnType<DialogCallbackSetup>;
    _dialogSubmit(): void;
    /**
     * Sets the callback called after submitting the dialog.
     *
     * @deprecated  5.5, only exists for backward compatibility with the old `WCF.ColorPicker`;
     *              use the constructor options instead
     */
    setCallbackSubmit(callbackSubmit: CallbackSubmit): void;
    /**
     * Updates the current color after the color or alpha input changes its value.
     *
     * @since 5.5
     */
    protected updateColor(source: ColorSource): void;
    /**
     * Updates the current color after the hex input changes its value.
     *
     * @since 5.5
     */
    protected updateColorFromHex(event: Event): void;
    /**
     * Returns the current RGBA color set via the color and alpha input.
     *
     * @since 5.5
     */
    protected getColor(source: ColorSource): ColorUtil.RGBA;
    /**
     * Opens the color picker after clicking on the picker button.
     *
     * @since 5.5
     */
    protected openPicker(): void;
    /**
     * Updates the UI to show the given color.
     *
     * @since 5.5
     */
    protected setColor(color: ColorUtil.RGBA | string, source: ColorSource): void;
    /**
     * Updates the UI to show the given color as the initial color.
     *
     * @since 5.5
     */
    protected setInitialColor(color: ColorUtil.RGBA | string): void;
    /**
     * Closes the color picker and updates the stored value.
     *
     * @since 5.5
     */
    protected submitDialog(): void;
    /**
     * Initializes a color picker for all input elements matching the given selector.
     */
    static fromSelector(selector: string): void;
}
export = UiColorPicker;
