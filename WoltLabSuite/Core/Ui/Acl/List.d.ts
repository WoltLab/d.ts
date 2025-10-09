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
        readonly "__#private@#categoryName": string | undefined;
        readonly "__#private@#container": HTMLElement;
        readonly "__#private@#aclList": HTMLUListElement;
        readonly "__#private@#permissionList": HTMLDivElement;
        readonly "__#private@#searchInput": HTMLInputElement;
        readonly "__#private@#objectID": number;
        readonly "__#private@#objectTypeID": number;
        readonly "__#private@#aclValuesFieldName": string;
        readonly "__#private@#search": UiUserSearchInput;
        "__#private@#values": {
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
        "__#private@#reset"(): void;
        "__#private@#loadACL"(): void;
        "__#private@#createListItem"(objectID: string, label: string, type: string): HTMLLIElement;
        "__#private@#removeItem"(listItem: HTMLLIElement): void;
        "__#private@#selectFirstEntry"(): void;
        "__#private@#success"(data: AjaxResponse): void;
        "__#private@#parseData"(data: AjaxResponse, type: string): void;
        "__#private@#select"(listItem: HTMLElement, savePermissions: boolean): void;
        "__#private@#change"(event: MouseEvent): void;
        "__#private@#setupPermissions"(type: string, objectID: string): void;
        "__#private@#savePermissions"(): void;
        "__#private@#save"(type: string): void;
    };
};
export = _default;
