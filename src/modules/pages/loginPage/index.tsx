import * as React from 'react';
import { Form, Input, Icon, Button, message } from 'antd';
import './index.less';
import { LoginInfoObject } from './interfacer';
import { net } from 'src/services/net';
import { ResData } from '../../../common/interface/resData';
import { Ioc } from 'qzx-ioc';
import { User } from 'src/common/model/user';
import { UserObj } from '../../../common/model/user';
import { DynamicService } from 'src/services/dynamic';
export class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    login = (e: React.FormEvent) => {
        e.preventDefault();
        net.post('/login', this.getValidateFields()).then((res: ResData<UserObj>) => {
            if(res.data.succ) {
                // 存用户信息
                let user: User = Ioc(User);
                user.setName(res.data.data.username);
                user.setToken(res.data.data.token);
                message.success(res.data.msg);
                this.backHandler();
            }else {
                message.error(res.data.msg);
            }
        })
    }
    register = () => {
        net.post('/register', this.getValidateFields()).then((res: ResData<boolean>) => {
            if(res.data.succ) {
                message.success(res.data.msg);
            }else {
                message.error(res.data.msg);
            }
        })
    }
    getValidateFields(): LoginInfoObject {
        let res: LoginInfoObject = null;
        this.props.form.validateFields((err: any, values: LoginInfoObject) => {
            if (err || !values.username || !values.password) {
                message.error('请检查表单!');
            }else {
               res =  {
                    username: values.username,
                    password: values.password
                }
            }
        })
        return res;
    }
    backHandler = () => {
        let dy: DynamicService = Ioc(DynamicService);
        dy.destroyed(WrappedNormalLoginForm);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-page">
                <div className="logo">
                    贼好看的logo
                </div>
                <div className="login-form">
                    <Form className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button onClick={this.login} type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <Button onClick={this.register} type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div onClick={this.backHandler} className="back">
                    <Icon type="left" />
                </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginPage);

export { WrappedNormalLoginForm };