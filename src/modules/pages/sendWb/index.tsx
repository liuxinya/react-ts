import * as React from 'react';
import './index.less';
import { Icon, Form, Upload, message } from 'antd';
import { SendWbPropsObj, SendWbStateObj } from './interface';
import { DynamicService } from 'src/services/dynamic';
import { Ioc } from 'qzx-ioc';
import { net } from 'src/services/net';
import { ResData } from '../../../common/interface/resData';
class SendWb extends React.Component<SendWbPropsObj, SendWbStateObj>  {
    constructor(props: any) {
        super(props)
        this.state = {
            imgList: [] as any,
            wbContent: '',
            type: 0
        }
    }
    change = (e: any) => {
        this.setState({
            imgList: e.fileList
        })
    }
    back = () => {
        let dy: DynamicService = Ioc(DynamicService);
        dy.destroyed(WrappedDemo);
    }
    send = async () => {
        let data: ResData<boolean> = await net.post('/wb/write', {
            content: this.state.wbContent,
            imgList: this.state.imgList,
            type: this.state.type
        });
        if(data.data.data) {
            message.success('发送成功！');
            this.back();
        }else {
            message.error('发送失败！');
        }
    }
    contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({wbContent: e.target.value})
    }
    typeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            type: Number(e.target.value)
        })
    }
    render() {
        return (
            <div className="send-wb-wrapper">
                <div className="head">
                    <span className='back'>
                        <Icon type="left" onClick={this.back}/>
                    </span>
                    <span>
                        {this.props.userName}
                    </span>
                    <span className='send'>
                        <i onClick={this.send}>走你</i>
                    </span>
                </div>
                <div className="body">
                    <textarea value={this.state.wbContent} rows={10} onChange={this.contentChange}/>
                    <div className="img-list">
                        {
                            this.state.imgList.map((item, i) => {
                                return <div className='img-wrapper' key={i}>
                                            <img src={item.thumbUrl} alt="" />
                                       </div>
                            })
                        }
                    </div>
                </div>
                <div className="foot">
                    <Upload multiple={true} listType='picture' onChange={this.change}>
                        <Icon type="picture" /> 
                    </Upload>
                    <input value={this.state.type} type="text" onChange={this.typeChange}/>
                </div>
            </div>
        )
    }
    
}
const WrappedDemo = Form.create({ name: 'weibo' })(SendWb);
export { WrappedDemo };