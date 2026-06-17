/**
 * @woltlabExcludeBundle all
 */
import { DatabaseObjectActionResponse } from "WoltLabSuite/Core/Ajax/Data";
interface AclOption {
    categoryName: string;
    label: string;
    optionName: string;
}
interface AclValues {
    label: {
        [key: string]: string;
    };
    option: {
        [key: string]: {
            [key: string]: number;
        };
    };
}
interface AjaxResponse extends DatabaseObjectActionResponse {
    returnValues: {
        options: {
            [key: string]: AclOption;
        };
        group: AclValues;
        user: AclValues;
        categories: {
            [key: string]: string;
        };
    };
}
declare class AclList {
    #private;
    constructor(containerSelector: string, objectTypeID: number, categoryName: string | undefined, objectID: number, includeUserGroups: boolean, initialPermissions: AjaxResponse | undefined, aclValuesFieldName: string | undefined);
    getData(): {
        [key: string]: {
            [key: string]: {
                [key: string]: number;
            };
        };
    };
    addObject(selectedItem: HTMLLIElement): boolean;
    submit(): void;
}
export = AclList;
