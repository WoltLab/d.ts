/**
 * Quote manager for calendar events.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle tiny
 */
import { UiMessageQuote, WCFMessageQuoteManager } from "WoltLabSuite/Core/Ui/Message/Quote";
export declare class UiEventQuote extends UiMessageQuote {
    constructor(quoteManager: WCFMessageQuoteManager);
}
export default UiEventQuote;
