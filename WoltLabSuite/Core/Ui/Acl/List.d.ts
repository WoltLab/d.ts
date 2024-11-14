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
        readonly "__#49@#categoryName": string | undefined;
        readonly "__#49@#container": HTMLElement;
        readonly "__#49@#aclList": HTMLUListElement;
        readonly "__#49@#permissionList": HTMLDivElement;
        readonly "__#49@#searchInput": HTMLInputElement;
        readonly "__#49@#objectID": number;
        readonly "__#49@#objectTypeID": number;
        readonly "__#49@#aclValuesFieldName": string;
        readonly "__#49@#search": UiUserSearchInput;
        "__#49@#values": {
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
        "__#49@#reset"(): void;
        "__#49@#loadACL"(): void;
        "__#49@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#49@#removeItem"(listItem: HTMLLIElement): void;
        "__#49@#selectFirstEntry"(): void;
        "__#49@#success"(data: AjaxResponse): void;
        "__#49@#parseData"(data: AjaxResponse, type: string): void;
        "__#49@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#49@#change"(event: MouseEvent): void;
        "__#49@#setupPermissions"(type: string, objectID: string): void;
        "__#49@#savePermissions"(): void;
        "__#49@#save"(type: string): void;
    };
};
export = _default;
