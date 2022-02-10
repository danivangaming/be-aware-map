declare class ScriptUtils {
    openTab(url: string): void;
    goToPage(url: string): void;
    openCoWebsite(url: string, base: string, api: boolean, policy: string): void;
    closeCoWebSite(): void;
}
export declare const scriptUtils: ScriptUtils;
export {};
