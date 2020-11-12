/**
 * 一个组件的服务
 * 作用： 可以快速在你想要的位置打开一个组件，减少组件show: true false这种写法
 */


import { Injectable } from '@baidu/ioc';
import ReactDOM from 'react-dom';
import { isTrue } from '../helper/type';

@Injectable()
export class UDynamicService {
    private dyContainer: Map<any, Element> = new Map();
    async open(options: DynamicHelperOptions) {
        const div = document.createElement('div');
        if (options.selector) {
            options.selector.appendChild(div);
        } else {
            document.body.appendChild(div);
        }
        let displayName = options.component.type.displayName;
        if (isTrue(options.isDeleteDisplayNameOfOtherSame)) {
            await this.destroyed(displayName);
        }
        this.dyContainer.set(displayName, div);
        return ReactDOM.render(options.component, div);
    }
    destroyed(displayName: string) {
        return new Promise(resolve => {
            let div = this.dyContainer.get(displayName) as Element;
            if (div) {
                // 异步一下让关闭的组件动画做完
                setTimeout(() => {
                    ReactDOM.unmountComponentAtNode(div);
                    div.remove();
                    this.dyContainer.delete(displayName);
                    resolve();
                }, 100);
            } else {
                resolve();
            }
        });
    }
}
interface DynamicHelperOptions {
    // eslint-disable-next-line no-undef
    component: JSX.Element;   // 要打开的组件
    selector?: HTMLDivElement; // 在哪打开它
    isDeleteDisplayNameOfOtherSame?: boolean  // 要删除已经打开的相同的displayName的组件吗
}