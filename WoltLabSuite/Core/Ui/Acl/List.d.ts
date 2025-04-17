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
        readonly "__#71@#categoryName": string | undefined;
        readonly "__#71@#container": HTMLElement;
        readonly "__#71@#aclList": HTMLUListElement;
        readonly "__#71@#permissionList": HTMLDivElement;
        readonly "__#71@#searchInput": HTMLInputElement;
        readonly "__#71@#objectID": number;
        readonly "__#71@#objectTypeID": number;
        readonly "__#71@#aclValuesFieldName": string;
        readonly "__#71@#search": UiUserSearchInput;
        "__#71@#values": {
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
        "__#71@#reset"(): void;
        "__#71@#loadACL"(): void;
        "__#71@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#71@#removeItem"(listItem: HTMLLIElement): void;
        "__#71@#selectFirstEntry"(): void;
        "__#71@#success"(data: AjaxResponse): void;
        "__#71@#parseData"(data: AjaxResponse, type: string): void;
        "__#71@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#71@#change"(event: MouseEvent): void;
        "__#71@#setupPermissions"(type: string, objectID: string): void;
        "__#71@#savePermissions"(): void;
        "__#71@#save"(type: string): void;
    };
};
export = _default;
