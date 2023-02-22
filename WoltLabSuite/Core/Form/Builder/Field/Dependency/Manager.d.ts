/**
 * Manages form field dependencies.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
import FormBuilderFormFieldDependency from "./Abstract";
type Callback = (...args: any[]) => void;
/**
 * Adds the given callback to the list of callbacks called when checking containers.
 */
export declare function addContainerCheckCallback(callback: Callback): void;
/**
 * Registers a new form field dependency.
 */
export declare function addDependency(dependency: FormBuilderFormFieldDependency): void;
/**
 * Checks the containers for their availability.
 *
 * If this function is called while containers are currently checked, the containers
 * will be checked after the current check has been finished completely.
 */
export declare function checkContainers(): void;
/**
 * Checks if all dependencies are met.
 */
export declare function checkDependencies(): void;
/**
 * Returns `true` if the given node has been hidden because of its own dependencies.
 */
export declare function isHiddenByDependencies(node: HTMLElement): boolean;
/**
 * Registers the form with the given id with the dependency manager.
 */
export declare function register(formId: string): void;
/**
 * Unregisters the form with the given id and all of its dependencies.
 */
export declare function unregister(formId: string): void;
export {};
