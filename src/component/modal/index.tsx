import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.less';
export class Modal extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        value: '',
        el: document.createElement('div'),
        modalRoot: document.querySelector('.main-wrapper')
      }
    }
    componentDidMount() {
        this.state.el.setAttribute('class', 'modal-container');
        this.state.modalRoot.appendChild(this.state.el);
        this.state.el.addEventListener('click', () => {
            // 
        })
    }
    componentWillUnmount() {
        this.state.modalRoot.removeChild(this.state.el);
    }
    render() {
      return ReactDOM.createPortal(
          this.props.children,
          this.state.el
      )
    }
}