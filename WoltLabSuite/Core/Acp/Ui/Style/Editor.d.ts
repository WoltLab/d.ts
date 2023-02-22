/**
 * Provides the style editor.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
interface StyleRuleMap {
    [key: string]: string;
}
interface StyleEditorOptions {
    isTainted: boolean;
    styleId: number;
    styleRuleMap: StyleRuleMap;
}
/**
 * Sets up dynamic style options.
 */
export declare function setup(options: StyleEditorOptions): void;
export declare function hideVisualEditor(): void;
export declare function showVisualEditor(): void;
export {};
