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
        readonly "__#47@#categoryName": string | undefined;
        readonly "__#47@#container": HTMLElement;
        readonly "__#47@#aclList": HTMLUListElement;
        readonly "__#47@#permissionList": HTMLDivElement;
        readonly "__#47@#searchInput": HTMLInputElement;
        readonly "__#47@#objectID": number;
        readonly "__#47@#objectTypeID": number;
        readonly "__#47@#aclValuesFieldName": string;
        readonly "__#47@#search": UiUserSearchInput;
        "__#47@#values": {
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
        "__#47@#reset"(): void;
        "__#47@#loadACL"(): void;
        "__#47@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#47@#removeItem"(listItem: HTMLLIElement): void;
        "__#47@#selectFirstEntry"(): void;
        "__#47@#success"(data: AjaxResponse): void;
        "__#47@#parseData"(data: AjaxResponse, type: string): void;
        "__#47@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#47@#change"(event: MouseEvent): void;
        "__#47@#setupPermissions"(type: string, objectID: string): void;
        "__#47@#savePermissions"(): void;
        "__#47@#save"(type: string): void;
    };
};
export = _default;
