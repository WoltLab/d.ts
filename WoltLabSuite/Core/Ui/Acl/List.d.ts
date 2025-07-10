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
        readonly "__#72@#categoryName": string | undefined;
        readonly "__#72@#container": HTMLElement;
        readonly "__#72@#aclList": HTMLUListElement;
        readonly "__#72@#permissionList": HTMLDivElement;
        readonly "__#72@#searchInput": HTMLInputElement;
        readonly "__#72@#objectID": number;
        readonly "__#72@#objectTypeID": number;
        readonly "__#72@#aclValuesFieldName": string;
        readonly "__#72@#search": UiUserSearchInput;
        "__#72@#values": {
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
        "__#72@#reset"(): void;
        "__#72@#loadACL"(): void;
        "__#72@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#72@#removeItem"(listItem: HTMLLIElement): void;
        "__#72@#selectFirstEntry"(): void;
        "__#72@#success"(data: AjaxResponse): void;
        "__#72@#parseData"(data: AjaxResponse, type: string): void;
        "__#72@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#72@#change"(event: MouseEvent): void;
        "__#72@#setupPermissions"(type: string, objectID: string): void;
        "__#72@#savePermissions"(): void;
        "__#72@#save"(type: string): void;
    };
};
export = _default;
