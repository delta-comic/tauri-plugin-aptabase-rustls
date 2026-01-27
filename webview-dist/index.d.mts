//#region webview-src/index.d.ts
type Props = {
  [key: string]: string | number;
};
declare function trackEvent(name: string, props?: Props): Promise<void>;
//#endregion
export { trackEvent };