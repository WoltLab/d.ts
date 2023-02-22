export type CallbackPostEnable = (data: {
    updateTime?: boolean;
    enableNote?: string;
}) => void;
export declare function init(objectId: number, callback: CallbackPostEnable): void;
