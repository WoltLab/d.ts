import UiMessageReply from "WoltLabSuite/Core/Ui/Message/Reply";
interface ErrorEventData {
    api: UiMessageReply;
    cancel: boolean;
    returnValues: {
        errorType: string;
        fieldName: string;
    };
}
export declare function toggleEnableTime(): void;
export declare function handleError(data: ErrorEventData): void;
export declare function reset(): void;
export declare function init(): void;
export {};
