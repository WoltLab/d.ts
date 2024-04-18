/**
 * @woltlabExcludeBundle all
 */
import UiUserSearchInput from "WoltLabSuite/Core/Ui/User/Search/Input";
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
declare const _default: {
    new (containerSelector: string, objectTypeID: number, categoryName: string | undefined, objectID: number, includeUserGroups: boolean, initialPermissions: AjaxResponse | undefined, aclValuesFieldName: string | undefined): {
        readonly "__#44@#categoryName": string | undefined;
        readonly "__#44@#container": HTMLElement;
        readonly "__#44@#aclList": HTMLUListElement;
        readonly "__#44@#permissionList": HTMLDivElement;
        readonly "__#44@#searchInput": HTMLInputElement;
        readonly "__#44@#objectID": number;
        readonly "__#44@#objectTypeID": number;
        readonly "__#44@#aclValuesFieldName": string;
        readonly "__#44@#search": UiUserSearchInput;
        "__#44@#values": {
            [key: string]: {
                [key: string]: {
                    [key: string]: number;
                };
            };
        };
        getData(): {
            [key: string]: {
                [key: string]: {
                    [key: string]: number;
                };
            };
        };
        addObject(selectedItem: HTMLLIElement): boolean;
        submit(): void;
        "__#44@#reset"(): void;
        "__#44@#loadACL"(): void;
        "__#44@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#44@#removeItem"(listItem: HTMLLIElement): void;
        "__#44@#selectFirstEntry"(): void;
        "__#44@#success"(data: AjaxResponse): void;
        "__#44@#parseData"(data: AjaxResponse, type: string): void;
        "__#44@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#44@#change"(event: MouseEvent): void;
        "__#44@#setupPermissions"(type: string, objectID: string): void;
        "__#44@#savePermissions"(): void;
        "__#44@#save"(type: string): void;
    };
};
export = _default;
