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
        readonly "__#46@#categoryName": string | undefined;
        readonly "__#46@#container": HTMLElement;
        readonly "__#46@#aclList": HTMLUListElement;
        readonly "__#46@#permissionList": HTMLDivElement;
        readonly "__#46@#searchInput": HTMLInputElement;
        readonly "__#46@#objectID": number;
        readonly "__#46@#objectTypeID": number;
        readonly "__#46@#aclValuesFieldName": string;
        readonly "__#46@#search": UiUserSearchInput;
        "__#46@#values": {
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
        "__#46@#reset"(): void;
        "__#46@#loadACL"(): void;
        "__#46@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#46@#removeItem"(listItem: HTMLLIElement): void;
        "__#46@#selectFirstEntry"(): void;
        "__#46@#success"(data: AjaxResponse): void;
        "__#46@#parseData"(data: AjaxResponse, type: string): void;
        "__#46@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#46@#change"(event: MouseEvent): void;
        "__#46@#setupPermissions"(type: string, objectID: string): void;
        "__#46@#savePermissions"(): void;
        "__#46@#save"(type: string): void;
    };
};
export = _default;
