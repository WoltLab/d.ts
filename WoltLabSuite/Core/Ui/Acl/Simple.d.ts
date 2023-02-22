/**
 * @woltlabExcludeBundle all
 */
declare class UiAclSimple {
    private readonly aclListContainer;
    private readonly list;
    private readonly prefix;
    private readonly inputName;
    private readonly searchInput;
    constructor(prefix?: string, inputName?: string);
    private select;
    private removeItem;
    private invertPermissions;
}
export = UiAclSimple;
