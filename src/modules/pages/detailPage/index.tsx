import * as React from 'react';
import './index.less';
import { Ioc } from 'qzx-ioc';
import { DynamicService } from 'src/services/dynamic';
import { DetailPagePropsObj } from './interface';
export class DetailPage extends React.Component<DetailPagePropsObj, any>  {
    constructor(props: any) {
        super(props)
    }
    close() {
        let dy: DynamicService = Ioc(DynamicService);
        dy.destroyed(DetailPage)
    }
    render() {
        return (
            <div className="detail-wrapper" onClick={this.close}>
                detail
            </div>
        )
    }
    
}