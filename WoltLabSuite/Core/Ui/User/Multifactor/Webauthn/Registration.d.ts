/**
 * Manages registration of new WebAuthn credentials.
 *
 * @author  Tim Duesterhus
 * @copyright  2001-2020 WoltLab GmbH
 * @license  WoltLab License <http://www.woltlab.com/license-agreement.html>
 */
import { BufferSourceToString } from "./Helper";
type Base64CreationOptions = BufferSourceToString<PublicKeyCredentialCreationOptions>;
type PublicKeyCredentialWithAttestation = Omit<PublicKeyCredential, "getClientExtensionResults"> & {
    response: AuthenticatorAttestationResponse;
};
/**
 * Performs registration with the given options and encodes
 * the response buffers as base64.
 */
export declare function performRegistration(options: Base64CreationOptions): Promise<BufferSourceToString<PublicKeyCredentialWithAttestation>>;
export default performRegistration;
