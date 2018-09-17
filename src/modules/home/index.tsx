import * as React from 'react';
import { Modal } from '../../component/modal/index';
export class Home extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        value: '',
        showModal: false
      }
      this.change = this.change.bind(this);
      this.showModal = this.showModal.bind(this);
      this.close = this.close.bind(this);
    }
    public render() {
      const model =  this.state.showModal? (
        <Modal>
          哈哈哈哈
          <button onClick={this.close}>关闭</button>
        </Modal>
      ): null
      return (
        <div className="hh">
            首页首页首页
            <button onClick={this.showModal}>点击</button>
            {model}
        </div>
      );
    }
    change(e: string) {
      this.setState({
        value: e
      })
    }
    showModal() {
      this.setState({
        showModal: true
      })
    }
    close() {
      this.setState({
        showModal: false
      })
    }
}