declare class View {
    orientation: string;
    initialised: boolean;
    element: HTMLElement;
    nofocus: boolean;
    obtype: string;
    constructor();
    $createElement(type: any): any;
    $getElementById(id: any): any;
    $assignElement(obj: any): any;
    $createContent(): void;
    $appendChild(child: any): void;
    $setId(id: any): void;
    $position(x: any, y: any, w: any, h: any): void;
    $move(x: any, y: any): void;
    $resize(w: any, h: any): void;
    $focus(): boolean;
    $blur(): void;
    $addClass(cls: any): this;
    $hasClass(cls: any): boolean;
    $removeClass(cls: any): void;
    $signal(type: any, data?: any): void;
    $preventDefault(e: any): void;
    $bind(): void;
    $_stitch(): void;
    $exclusions(): string[];
    $setupListeners(): void;
    $setData(data: any): void;
    $onClick(e: any): boolean;
    $onLeftKey(node?: any): void;
    $onRightKey(node?: any): void;
    $onUpKey(node?: any): void;
    $onDownKey(node?: any): void;
    $onEnterKey(): void;
    $setOrientation(orientation: any): void;
}
export default View;
