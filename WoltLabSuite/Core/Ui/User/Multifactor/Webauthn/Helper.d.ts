/**
 * Helper functions for WebAuthn processing.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2020 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
/**
 * Decodes an base64url (RFC 4648#5) encoded string (`-_` instead of `+/`).
 */
export declare function decodeUrlSafeBase64(encoded: string): string;
/**
 * Encodes an string with base64url (RFC 4648#5) (`-_` instead of `+/`).
 */
export declare function encodeUrlSafeBase64(string: string): string;
/**
 * Encodes an string with base64url (RFC 4648#5) without padding (`-_` instead of `+/` and no `=`).
 */
export declare function encodeUrlSafeBase64NoPadding(string: string): string;
/**
 * Converts the given string of ASCII characters into an `Uint8Array`
 * containing the same logical bytes.
 */
export declare function stringToUint8Array(string: string): Uint8Array;
/**
 * Equivalent to `stringToUint8Array . decodeUrlSafeBase64`.
 */
export declare function b64ToBuf(encoded: string): Uint8Array;
/**
 * Encodes the given `ArrayBuffer` using encodeUrlSafeBase64NoPadding.
 */
export declare function bufToB64(buf: ArrayBuffer): string;
/**
 * This type recursively replaces all instances of `BufferSource` with `string` in `T`.
 */
export type BufferSourceToString<T> = T extends BufferSource ? string : {
    [K in keyof T]: BufferSourceToString<T[K]>;
};
