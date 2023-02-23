/**
 * Developer tools for WoltLab Suite.
 *
 * @author  Alexander Ebert
 * @copyright  2001-2019 WoltLab GmbH
 * @license  GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 */
declare const Devtools: {
    /**
     * Prints the list of available commands.
     */
    help(): void;
    /**
     * Disables/re-enables the editor autosave feature.
     */
    toggleEditorAutosave(forceDisable: boolean): void;
    /**
     * Enables or disables the inspector for the editor.
     */
    toggleEditorInspector(forceEnable: boolean): void;
    /**
     * Enables/disables logging for fired event listener events.
     */
    toggleEventLogging(forceEnable: boolean): void;
    /**
     * Internal methods not meant to be called directly.
     */
    _internal_: {
        enable(): void;
        editorAutosave(): boolean;
        editorInspector(): boolean;
        eventLog(identifier: string, action: string): void;
    };
};
export = Devtools;
