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
        readonly "__#57@#categoryName": string | undefined;
        readonly "__#57@#container": HTMLElement;
        readonly "__#57@#aclList": HTMLUListElement;
        readonly "__#57@#permissionList": HTMLDivElement;
        readonly "__#57@#searchInput": HTMLInputElement;
        readonly "__#57@#objectID": number;
        readonly "__#57@#objectTypeID": number;
        readonly "__#57@#aclValuesFieldName": string;
        readonly "__#57@#search": UiUserSearchInput;
        "__#57@#values": {
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
        "__#57@#reset"(): void;
        "__#57@#loadACL"(): void;
        "__#57@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#57@#removeItem"(listItem: HTMLLIElement): void;
        "__#57@#selectFirstEntry"(): void;
        "__#57@#success"(data: AjaxResponse): void;
        "__#57@#parseData"(data: AjaxResponse, type: string): void;
        "__#57@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#57@#change"(event: MouseEvent): void;
        "__#57@#setupPermissions"(type: string, objectID: string): void;
        "__#57@#savePermissions"(): void;
        "__#57@#save"(type: string): void;
    };
};
export = _default;
