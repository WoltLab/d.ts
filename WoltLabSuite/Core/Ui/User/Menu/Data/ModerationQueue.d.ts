/**
 * User menu for moderation queues.
 *
 * @author Alexander Ebert
 * @copyright 2001-2021 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @woltlabExcludeBundle all
 */
type Options = {
    noItems: string;
    deletedContent: string;
    deletedContentLink: string;
    showAllLink: string;
    showAllTitle: string;
    title: string;
};
export declare function setup(options: Options): void;
export {};
