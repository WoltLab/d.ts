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
        readonly "__#43@#categoryName": string | undefined;
        readonly "__#43@#container": HTMLElement;
        readonly "__#43@#aclList": HTMLUListElement;
        readonly "__#43@#permissionList": HTMLDivElement;
        readonly "__#43@#searchInput": HTMLInputElement;
        readonly "__#43@#objectID": number;
        readonly "__#43@#objectTypeID": number;
        readonly "__#43@#aclValuesFieldName": string;
        readonly "__#43@#search": UiUserSearchInput;
        "__#43@#values": {
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
        "__#43@#reset"(): void;
        "__#43@#loadACL"(): void;
        "__#43@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#43@#removeItem"(listItem: HTMLLIElement): void;
        "__#43@#selectFirstEntry"(): void;
        "__#43@#success"(data: AjaxResponse): void;
        "__#43@#parseData"(data: AjaxResponse, type: string): void;
        "__#43@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#43@#change"(event: MouseEvent): void;
        "__#43@#setupPermissions"(type: string, objectID: string): void;
        "__#43@#savePermissions"(): void;
        "__#43@#save"(type: string): void;
    };
};
export = _default;
