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
        readonly "__#50@#categoryName": string | undefined;
        readonly "__#50@#container": HTMLElement;
        readonly "__#50@#aclList": HTMLUListElement;
        readonly "__#50@#permissionList": HTMLDivElement;
        readonly "__#50@#searchInput": HTMLInputElement;
        readonly "__#50@#objectID": number;
        readonly "__#50@#objectTypeID": number;
        readonly "__#50@#aclValuesFieldName": string;
        readonly "__#50@#search": UiUserSearchInput;
        "__#50@#values": {
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
        "__#50@#reset"(): void;
        "__#50@#loadACL"(): void;
        "__#50@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#50@#removeItem"(listItem: HTMLLIElement): void;
        "__#50@#selectFirstEntry"(): void;
        "__#50@#success"(data: AjaxResponse): void;
        "__#50@#parseData"(data: AjaxResponse, type: string): void;
        "__#50@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#50@#change"(event: MouseEvent): void;
        "__#50@#setupPermissions"(type: string, objectID: string): void;
        "__#50@#savePermissions"(): void;
        "__#50@#save"(type: string): void;
    };
};
export = _default;
