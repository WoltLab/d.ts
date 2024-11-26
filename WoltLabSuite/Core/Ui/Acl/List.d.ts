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
        readonly "__#52@#categoryName": string | undefined;
        readonly "__#52@#container": HTMLElement;
        readonly "__#52@#aclList": HTMLUListElement;
        readonly "__#52@#permissionList": HTMLDivElement;
        readonly "__#52@#searchInput": HTMLInputElement;
        readonly "__#52@#objectID": number;
        readonly "__#52@#objectTypeID": number;
        readonly "__#52@#aclValuesFieldName": string;
        readonly "__#52@#search": UiUserSearchInput;
        "__#52@#values": {
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
        "__#52@#reset"(): void;
        "__#52@#loadACL"(): void;
        "__#52@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#52@#removeItem"(listItem: HTMLLIElement): void;
        "__#52@#selectFirstEntry"(): void;
        "__#52@#success"(data: AjaxResponse): void;
        "__#52@#parseData"(data: AjaxResponse, type: string): void;
        "__#52@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#52@#change"(event: MouseEvent): void;
        "__#52@#setupPermissions"(type: string, objectID: string): void;
        "__#52@#savePermissions"(): void;
        "__#52@#save"(type: string): void;
    };
};
export = _default;
