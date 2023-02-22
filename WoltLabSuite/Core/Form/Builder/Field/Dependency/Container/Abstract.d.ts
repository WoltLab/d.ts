/**
 * Abstract implementation of a handler for the visibility of container due the dependencies
 * of its children.
 *
 * @author  Matthias Schmidt
 * @copyright 2001-2020 WoltLab GmbH
 * @license GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @since 5.2
 */
declare abstract class Abstract {
    protected _container: HTMLElement;
    constructor(containerId: string);
    /**
     * Returns `true` if the dependency is met and thus if the container should be shown.
     */
    checkContainer(): void;
    /**
     * Initializes a new container dependency handler for the container with the given id.
     */
    protected init(containerId: string): void;
}
export = Abstract;
