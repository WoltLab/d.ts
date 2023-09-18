/**
 * Processes the WebAuthn form fields.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import { performAuthentication } from "./Webauthn/Authentication";
import { performRegistration } from "./Webauthn/Registration";
declare const enum State {
    Pending = "pending",
    Success = "success",
    Error = "error",
    Waiting = "waiting"
}
declare abstract class Processor {
    protected readonly container: HTMLElement;
    protected readonly config: unknown;
    protected readonly responseInput: HTMLInputElement;
    protected readonly button: HTMLButtonElement;
    constructor(container: HTMLElement, config: unknown);
    protected setState(state: State): void;
    protected perform(): Promise<void>;
    private onClick;
    protected abstract process(config: unknown): Promise<unknown>;
}
export declare class Registration extends Processor {
    protected process(config: Parameters<typeof performRegistration>[0]): Promise<unknown>;
}
export declare class Authentication extends Processor {
    authenticateAutomatically(): Promise<void>;
    protected process(config: Parameters<typeof performAuthentication>[0]): Promise<unknown>;
    protected perform(): Promise<void>;
}
export {};
