/**
 * Quote manager for forum posts.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { UiMessageQuote, WCFMessageQuoteManager } from "WoltLabSuite/Core/Ui/Message/Quote";
export declare class UiPostQuote extends UiMessageQuote {
    constructor(quoteManager: WCFMessageQuoteManager);
}
export default UiPostQuote;
