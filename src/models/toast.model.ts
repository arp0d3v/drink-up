export class ToastModel {
    constructor(
        public body: any,
        public title: string,
        public type?: string,
        public timeout?: number,
        public showCloseButton?: boolean,
        public closeHtml?: string, ) { }
}
