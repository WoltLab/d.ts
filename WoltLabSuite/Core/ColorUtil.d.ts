/**
 * Helper functions to convert between different color formats.
 *
 * @author      Alexander Ebert
 * @copyright  2001-2021 WoltLab GmbH
 * @license     GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
/**
 * Converts a HSL color into RGB.
 *
 * @see https://www.rapidtables.com/convert/color/hsl-to-rgb.html
 */
export declare function hslToRgb(hue: number, saturation: number, lightness: number): RGB;
/**
 * Converts a HSV color into RGB.
 *
 * @see  https://secure.wikimedia.org/wikipedia/de/wiki/HSV-Farbraum#Transformation_von_RGB_und_HSV
 */
export declare function hsvToRgb(h: number, s: number, v: number): RGB;
/**
 * Converts a RGB color into HSL.
 *
 * @see https://www.rapidtables.com/convert/color/rgb-to-hsl.html
 */
export declare function rgbToHsl(r: number, g: number, b: number): HSL;
/**
 * Converts a RGB color into HSV.
 *
 * @see https://www.rapidtables.com/convert/color/rgb-to-hsv.html
 */
export declare function rgbToHsv(r: number, g: number, b: number): HSV;
/**
 * Converts HEX into RGB.
 */
export declare function hexToRgb(hex: string): RGB | typeof Number.NaN;
/**
 * Converts a RGB into HEX.
 */
export declare function rgbToHex(r: string): string;
export declare function rgbToHex(r: number, g: number, b: number): string;
/**
 * Converts a RGBA value into a HEX value.
 *
 * @since 5.5
 */
export declare function rgbaToHex(rgba: RGBA): string;
export declare function rgbaToHex(r: number, g: number, b: number, a: number): any;
/**
 * Returns the textual representation of a RGBA value.
 *
 * @since 5.5
 */
export declare function rgbaToString(rgba: RGBA): string;
/**
 * Returns `true` if the given string is a valid CSS color argument.
 *
 * @since 5.5
 */
export declare function isValidColor(color: string): boolean;
/**
 * Converts the given CSS color value to an RGBA value.
 *
 * @since 5.5
 */
export declare function stringToRgba(color: string): RGBA;
export type RGB = {
    r: number;
    g: number;
    b: number;
};
export type RGBA = {
    r: number;
    g: number;
    b: number;
    a: number;
};
export type HSV = {
    h: number;
    s: number;
    v: number;
};
export type HSL = {
    h: number;
    s: number;
    l: number;
};
