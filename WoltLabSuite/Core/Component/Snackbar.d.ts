/**
 * Shows snackbar like notifications.
 *
 * @author    Marcel Werk
 * @copyright 2001-2025 WoltLab GmbH
 * @license   GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since     6.2
 */
declare enum SnackbarType {
    Success = 0,
    Progress = 1
}
declare class Snackbar extends EventTarget {
    #private;
    constructor(message: string, type: SnackbarType);
    get message(): string;
    set message(message: string);
    markAsDone(): void;
    isProgress(): boolean;
    isVisible(): boolean;
    close(): void;
    get element(): HTMLElement;
}
interface SnackbarEventMap {
    "snackbar:close": CustomEvent<void>;
}
interface Snackbar extends EventTarget {
    addEventListener: {
        <T extends keyof SnackbarEventMap>(type: T, listener: (this: Snackbar, ev: SnackbarEventMap[T]) => any, options?: boolean | AddEventListenerOptions): void;
    } & HTMLElement["addEventListener"];
}
declare class SnackbarProgress {
    #private;
    constructor(label: string, length: number);
    setIteration(iteration: number): void;
    markAsDone(): void;
    get element(): Snackbar;
}
export declare function showSuccessSnackbar(message: string): Snackbar;
export declare function showProgressSnackbar(label: string, length: number): SnackbarProgress;
export declare function showDefaultSuccessSnackbar(): Snackbar;
export {};
