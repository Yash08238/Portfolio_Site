/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

export { };

declare module '*.jsx' {
    const content: any;
    export default content;
}
