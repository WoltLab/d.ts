/**
 * @woltlabExcludeBundle tiny
 */
type CloseCallback = () => void;
type SubmitCallback = () => boolean;
interface LinkOptions {
    closeCallback: CloseCallback;
    insert: boolean;
    submitCallback: SubmitCallback;
}
export declare function showDialog(options: LinkOptions): void;
export {};
