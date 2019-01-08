
import * as ReactDOM from 'react-dom';
class DynamicHelper {
    dyContainer: any = null;
    open(options: DynamicHelperOptions) {
        this.dyContainer = document.createElement('div');
        if(options.selector) {
            options.selector.appendChild(this.dyContainer);
        }else {
            document.body.appendChild(this.dyContainer);
        }
        console.log(ReactDOM.render(options.component, this.dyContainer));
    }
    destroyed() {
        if(this.dyContainer) {
            ReactDOM.unmountComponentAtNode(this.dyContainer);
            this.dyContainer.remove();
            this.dyContainer = null;
        }
    }
}
export default new DynamicHelper();
interface DynamicHelperOptions {
    component: JSX.Element;
    props?: any;
    selector?: HTMLDivElement;
}