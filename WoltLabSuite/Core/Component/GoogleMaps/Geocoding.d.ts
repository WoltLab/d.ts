import "./woltlab-core-google-maps";
export type MoveMarkerEventPayload = {
    latitude: number;
    longitude: number;
};
export type ResolveEventPayload = {
    callback: (location: string) => void;
    latitude: number;
    longitude: number;
};
export declare function setup(): void;
