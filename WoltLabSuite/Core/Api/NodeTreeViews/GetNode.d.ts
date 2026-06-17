/**
 * Gets a single node for rendering in a node tree view.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 */
type Response = {
    template: string;
};
export declare function getNode(nodeTreeViewClass: string, objectId: string | number, nodeTreeViewParameters?: Map<string, string>): Promise<Response>;
export {};
