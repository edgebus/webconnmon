export interface Checker {
    readonly kind: string;
    readonly name: string;
    readonly description: string;
    readonly adminComponent: Checker.Component;
    readonly scanComponent: Checker.Component;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Checker {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type Component = any;
}