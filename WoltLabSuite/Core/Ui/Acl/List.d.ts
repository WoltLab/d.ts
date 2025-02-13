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
        readonly "__#66@#categoryName": string | undefined;
        readonly "__#66@#container": HTMLElement;
        readonly "__#66@#aclList": HTMLUListElement;
        readonly "__#66@#permissionList": HTMLDivElement;
        readonly "__#66@#searchInput": HTMLInputElement;
        readonly "__#66@#objectID": number;
        readonly "__#66@#objectTypeID": number;
        readonly "__#66@#aclValuesFieldName": string;
        readonly "__#66@#search": UiUserSearchInput;
        "__#66@#values": {
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
        "__#66@#reset"(): void;
        "__#66@#loadACL"(): void;
        "__#66@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#66@#removeItem"(listItem: HTMLLIElement): void;
        "__#66@#selectFirstEntry"(): void;
        "__#66@#success"(data: AjaxResponse): void;
        "__#66@#parseData"(data: AjaxResponse, type: string): void;
        "__#66@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#66@#change"(event: MouseEvent): void;
        "__#66@#setupPermissions"(type: string, objectID: string): void;
        "__#66@#savePermissions"(): void;
        "__#66@#save"(type: string): void;
    };
};
export = _default;
