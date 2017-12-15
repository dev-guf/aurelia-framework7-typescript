/// <reference path="framework7/dom7.d.ts" />
/// <reference path="framework7/framework7.d.ts" />
/// <reference path="framework7/template7.d.ts" />

declare var MOBILE_PLATFORM:string;

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};