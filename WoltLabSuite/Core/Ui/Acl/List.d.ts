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
        readonly "__#54@#categoryName": string | undefined;
        readonly "__#54@#container": HTMLElement;
        readonly "__#54@#aclList": HTMLUListElement;
        readonly "__#54@#permissionList": HTMLDivElement;
        readonly "__#54@#searchInput": HTMLInputElement;
        readonly "__#54@#objectID": number;
        readonly "__#54@#objectTypeID": number;
        readonly "__#54@#aclValuesFieldName": string;
        readonly "__#54@#search": UiUserSearchInput;
        "__#54@#values": {
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
        "__#54@#reset"(): void;
        "__#54@#loadACL"(): void;
        "__#54@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#54@#removeItem"(listItem: HTMLLIElement): void;
        "__#54@#selectFirstEntry"(): void;
        "__#54@#success"(data: AjaxResponse): void;
        "__#54@#parseData"(data: AjaxResponse, type: string): void;
        "__#54@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#54@#change"(event: MouseEvent): void;
        "__#54@#setupPermissions"(type: string, objectID: string): void;
        "__#54@#savePermissions"(): void;
        "__#54@#save"(type: string): void;
    };
};
export = _default;
