/**
 * Version filter for reviews.
 *
 * @author  Joshua Ruesweg
 * @copyright 2001-2021 WoltLab GmbH
 * @license WoltLab License <http://www.woltlab.com/license-agreement.html>
 * @since 5.2
 */
import Loader from "./Loader";
declare class VersionFilter {
    protected activeElement: HTMLLIElement;
    protected readonly dropdownToggle: HTMLElement;
    protected readonly loader: Loader;
    protected readonly versions: Map<number, HTMLLIElement>;
    constructor(loader: Loader);
    protected click(versionId: number): void;
    activeVersionID(): number;
}
export = VersionFilter;
