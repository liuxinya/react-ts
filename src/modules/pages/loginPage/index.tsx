import * as React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import './index.less';
import { dy } from 'src/helper/dynamic.helper';
export class LoginPage extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
        })
    }
    backHandler = () => {
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
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('userName', {
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
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                            <Button type="primary" htmlType="submit" className="login-form-button">
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