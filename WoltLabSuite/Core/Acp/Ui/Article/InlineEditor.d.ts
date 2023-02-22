/**
 * Handles article trash, restore and delete.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
import { AjaxCallbackSetup, DatabaseObjectActionResponse } from "../../../Ajax/Data";
interface InlineEditorOptions {
    i18n: {
        defaultLanguageId: number;
        isI18n: boolean;
        languages: {
            [key: string]: string;
        };
    };
    redirectUrl: string;
}
declare class AcpUiArticleInlineEditor {
    private readonly options;
    /**
     * Initializes the ACP inline editor for articles.
     */
    constructor(objectId: number, options: InlineEditorOptions);
    /**
     * Reacts to executed clipboard actions.
     */
    private clipboardAction;
    /**
     * Is called, if the set category dialog form is submitted.
     */
    private submitSetCategory;
    /**
     * Initializes an article row element.
     */
    private initArticle;
    /**
     * Toggles an article between i18n and monolingual.
     */
    private toggleI18n;
    /**
     * Invokes the selected action.
     */
    private invoke;
    /**
     * Handles an article being deleted.
     */
    private triggerDelete;
    /**
     * Handles publishing an article via clipboard.
     */
    private triggerPublish;
    /**
     * Handles an article being restored.
     */
    private triggerRestore;
    /**
     * Handles an article being trashed.
     */
    private triggerTrash;
    /**
     * Handles unpublishing an article via clipboard.
     */
    private triggerUnpublish;
    _ajaxSuccess(data: DatabaseObjectActionResponse): void;
    _ajaxSetup(): ReturnType<AjaxCallbackSetup>;
}
export = AcpUiArticleInlineEditor;
