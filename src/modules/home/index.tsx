import * as React from 'react';
import dy from '../../helper/dynamic.helper';
import { Modal } from '../../component/modal/index';
export class Home extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        value: '',
        showModal: false,
        modal: (<Modal>
          哈哈哈哈
          <button onClick={this.close}>关闭</button>
        </Modal>)
      }
      this.change = this.change.bind(this);
      this.openModal = this.openModal.bind(this);
      this.close = this.close.bind(this);
    }
    public render() {
      return (
        <div className="hh">
            首页首页首页
            <button onClick={this.openModal}>点击</button>
        </div>
      );
    }
    async componentDidMount() {
      console.log(this)
      await this.test();
      console.log(2);
    }
    change(e: string) {
      this.setState({
        value: e
      })
    }
    openModal() {
      dy.open({
        component: this.state.modal
      })
    }
    close() {
      dy.destroyed();
    }
    async test() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(1);
          resolve();
        })
      })
    }
}