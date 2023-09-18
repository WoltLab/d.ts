/**
 * Manages authentication with WebAuthn credentials.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2020 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import { BufferSourceToString } from "./Helper";
type Base64RequestOptions = BufferSourceToString<PublicKeyCredentialRequestOptions>;
type PublicKeyCredentialWithAssertion = Omit<PublicKeyCredential, "getClientExtensionResults"> & {
    response: AuthenticatorAssertionResponse;
};
/**
 * Performs authentication with the given options and encodes
 * the response buffers as base64.
 */
export declare function performAuthentication(options: Base64RequestOptions): Promise<BufferSourceToString<PublicKeyCredentialWithAssertion>>;
export default performAuthentication;
