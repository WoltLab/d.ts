/**
 * Highlights code in the Code bbcode.
 *
 * @author	Tim Duesterhus
 * @copyright	2001-2019 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare class Code {
    private static readonly chunkSize;
    private readonly container;
    private codeContainer;
    private language;
    constructor(container: HTMLElement);
    static processAll(): void;
    createCopyButton(): void;
    highlight(): Promise<void>;
}
export = Code;
