

import * as ReactDOM from 'react-dom';
import { ReactElement } from 'react';
import { Injectable } from 'qzx-ioc';
@Injectable()
class DynamicService {
    // dyContainer: any = null;
    // open(options: DynamicHelperOptions) {
    //     this.dyContainer = document.createElement('div');
    //     if(options.selector) {
    //         options.selector.appendChild(this.dyContainer);
    //     }else {
    //         document.body.appendChild(this.dyContainer);
    //     }
    //     return ReactDOM.render(options.component, this.dyContainer);
    // }
    // destroyed() {
    //     if(this.dyContainer) {
    //         ReactDOM.unmountComponentAtNode(this.dyContainer);
    //         this.dyContainer.remove();
    //         this.dyContainer = null;
    //     }
    // }
    dyContainer: Map<any, Element> = new Map();
    open(options: DynamicHelperOptions) {
        let div = document.createElement('div');
        if(options.selector) {
            options.selector.appendChild(div);
        }else {
            document.body.appendChild(div);
        }
        this.dyContainer.set(options.component.type, div);
        return ReactDOM.render(options.component, div);
    }
    destroyed(rct: any) {
        let div = this.dyContainer.get(rct);
        if(div) {
            ReactDOM.unmountComponentAtNode(div);
            div.remove();
            this.dyContainer.delete(rct);
        }
    }
}
export { DynamicService }; 
interface DynamicHelperOptions {
    component: ReactElement;
    selector?: HTMLDivElement;
}