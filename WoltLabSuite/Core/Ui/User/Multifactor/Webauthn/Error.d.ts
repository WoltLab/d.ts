/**
 * Collection of custom `Error`s.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2021 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
export declare class WebAuthnError extends Error {
    name: string;
}
export declare class KeyAlreadyRegistered extends WebAuthnError {
    name: string;
}
export declare class KeyNotRegistered extends WebAuthnError {
    name: string;
}
export declare class UserAborted extends WebAuthnError {
    name: string;
}
export declare class UserDeniedAccess extends WebAuthnError {
    name: string;
}
