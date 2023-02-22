/**
 * @woltlabExcludeBundle tiny
 */
type CallbackSubmit = () => void;
interface TableOptions {
    submitCallback: CallbackSubmit;
}
export declare function showDialog(options: TableOptions): void;
export {};
