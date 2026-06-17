type ReCaptchaType = "v3" | "v2" | "invisible";
export declare class Recaptcha {
    #private;
    constructor(recaptchaType: ReCaptchaType, publicKey: string, bucketID: string, captchaID?: string);
    ensureRecaptchaLoaded(): Promise<void>;
    execute(): Promise<string>;
}
export {};
