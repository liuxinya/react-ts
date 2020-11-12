// 快速操作dom的工具

export class DomHelper {
    private ele: Element = null;
    constructor(ele: Element) {
        this.ele = ele;
    }
    getAllProperty() {
        return window.getComputedStyle(this.ele);
    }
    // 获取CSS属性
    getCssProperty(attr: string) {
        let css =  window.getComputedStyle(this.ele);
        return attr ? css[(attr as any)] : css;
    }
    // 获取某个dom属性
    getAttribute(attr: string) {
        return this.ele.getAttribute(attr);
    }
    // 设置Style
    setStyle(propName: string, value: any = '') {
        (this.ele as any).style[propName] = value;
    }
    // 获取Style
    getStyle(prop: string = '') {
        return prop ? (this.ele as any).style[prop] : (this.ele as any).style;
    }
    // 移除Style
    removeStyle(propname: string) {
        this.setStyle(propname);
    }
    // 设置背景颜色
    setBackgroundColor(color: string) {
        this.setStyle('background-color', color);
    }
    // 设置字体颜色
    setColor(color: string) {
        this.setStyle('color', color);
    }
    // 监听事件
    listen(event: string, handler: any) {
        this.ele.addEventListener(event, handler);
        return handler;
    }
    // 解绑事件监听
    unlisten(event: string, handler: any) {
        this.ele.removeEventListener(event, handler);
    }
    // 自我销毁
    remove() {
        if (this.ele.remove) {
            this.ele.remove();
        } else {
            if (this.ele.parentNode) {
                this.ele.parentNode.removeChild(this.ele);
            }
        }
    }
    // 获取dom
    getDom() {
        return this.ele;
    }
}