/**
 * Reloads the grid view of media files after new files have been uploaded. A
 * single uploaded file is opened in the edit dialog, multiple uploaded files
 * are confirmed by a notification, because they might not be visible on the
 * current page of the grid view.
 *
 * @author Marcel Werk
 * @copyright 2001-2026 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 6.3
 * @woltlabExcludeBundle all
 */
export declare function setup(uploadButton: HTMLElement, container: HTMLElement, editEndpoint: string): void;
