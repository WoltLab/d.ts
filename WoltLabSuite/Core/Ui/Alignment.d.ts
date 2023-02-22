/**
 * Utility class to align elements relatively to another.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
type HorizontalAlignment = "center" | "left" | "right";
type VerticalAlignment = "bottom" | "top";
/**
 * Sets the alignment for target element relatively to the reference element.
 */
export declare function set(element: HTMLElement, referenceElement: HTMLElement, options?: AlignmentOptions): void;
export type AllowFlip = "both" | "horizontal" | "none" | "vertical";
export interface AlignmentOptions {
    verticalOffset?: number;
    pointer?: boolean;
    pointerClassNames?: string[];
    refDimensionsElement?: HTMLElement | null;
    horizontal?: HorizontalAlignment;
    vertical?: VerticalAlignment;
    allowFlip?: AllowFlip;
}
export {};
