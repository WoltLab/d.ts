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
        readonly "__#67@#categoryName": string | undefined;
        readonly "__#67@#container": HTMLElement;
        readonly "__#67@#aclList": HTMLUListElement;
        readonly "__#67@#permissionList": HTMLDivElement;
        readonly "__#67@#searchInput": HTMLInputElement;
        readonly "__#67@#objectID": number;
        readonly "__#67@#objectTypeID": number;
        readonly "__#67@#aclValuesFieldName": string;
        readonly "__#67@#search": UiUserSearchInput;
        "__#67@#values": {
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
        "__#67@#reset"(): void;
        "__#67@#loadACL"(): void;
        "__#67@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#67@#removeItem"(listItem: HTMLLIElement): void;
        "__#67@#selectFirstEntry"(): void;
        "__#67@#success"(data: AjaxResponse): void;
        "__#67@#parseData"(data: AjaxResponse, type: string): void;
        "__#67@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#67@#change"(event: MouseEvent): void;
        "__#67@#setupPermissions"(type: string, objectID: string): void;
        "__#67@#savePermissions"(): void;
        "__#67@#save"(type: string): void;
    };
};
export = _default;
