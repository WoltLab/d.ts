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
        readonly "__#73@#categoryName": string | undefined;
        readonly "__#73@#container": HTMLElement;
        readonly "__#73@#aclList": HTMLUListElement;
        readonly "__#73@#permissionList": HTMLDivElement;
        readonly "__#73@#searchInput": HTMLInputElement;
        readonly "__#73@#objectID": number;
        readonly "__#73@#objectTypeID": number;
        readonly "__#73@#aclValuesFieldName": string;
        readonly "__#73@#search": UiUserSearchInput;
        "__#73@#values": {
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
        "__#73@#reset"(): void;
        "__#73@#loadACL"(): void;
        "__#73@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#73@#removeItem"(listItem: HTMLLIElement): void;
        "__#73@#selectFirstEntry"(): void;
        "__#73@#success"(data: AjaxResponse): void;
        "__#73@#parseData"(data: AjaxResponse, type: string): void;
        "__#73@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#73@#change"(event: MouseEvent): void;
        "__#73@#setupPermissions"(type: string, objectID: string): void;
        "__#73@#savePermissions"(): void;
        "__#73@#save"(type: string): void;
    };
};
export = _default;
