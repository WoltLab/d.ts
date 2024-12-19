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
        readonly "__#55@#categoryName": string | undefined;
        readonly "__#55@#container": HTMLElement;
        readonly "__#55@#aclList": HTMLUListElement;
        readonly "__#55@#permissionList": HTMLDivElement;
        readonly "__#55@#searchInput": HTMLInputElement;
        readonly "__#55@#objectID": number;
        readonly "__#55@#objectTypeID": number;
        readonly "__#55@#aclValuesFieldName": string;
        readonly "__#55@#search": UiUserSearchInput;
        "__#55@#values": {
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
        "__#55@#reset"(): void;
        "__#55@#loadACL"(): void;
        "__#55@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#55@#removeItem"(listItem: HTMLLIElement): void;
        "__#55@#selectFirstEntry"(): void;
        "__#55@#success"(data: AjaxResponse): void;
        "__#55@#parseData"(data: AjaxResponse, type: string): void;
        "__#55@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#55@#change"(event: MouseEvent): void;
        "__#55@#setupPermissions"(type: string, objectID: string): void;
        "__#55@#savePermissions"(): void;
        "__#55@#save"(type: string): void;
    };
};
export = _default;
