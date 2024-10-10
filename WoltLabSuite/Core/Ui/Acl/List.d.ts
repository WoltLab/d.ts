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
        readonly "__#48@#categoryName": string | undefined;
        readonly "__#48@#container": HTMLElement;
        readonly "__#48@#aclList": HTMLUListElement;
        readonly "__#48@#permissionList": HTMLDivElement;
        readonly "__#48@#searchInput": HTMLInputElement;
        readonly "__#48@#objectID": number;
        readonly "__#48@#objectTypeID": number;
        readonly "__#48@#aclValuesFieldName": string;
        readonly "__#48@#search": UiUserSearchInput;
        "__#48@#values": {
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
        "__#48@#reset"(): void;
        "__#48@#loadACL"(): void;
        "__#48@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#48@#removeItem"(listItem: HTMLLIElement): void;
        "__#48@#selectFirstEntry"(): void;
        "__#48@#success"(data: AjaxResponse): void;
        "__#48@#parseData"(data: AjaxResponse, type: string): void;
        "__#48@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#48@#change"(event: MouseEvent): void;
        "__#48@#setupPermissions"(type: string, objectID: string): void;
        "__#48@#savePermissions"(): void;
        "__#48@#save"(type: string): void;
    };
};
export = _default;
