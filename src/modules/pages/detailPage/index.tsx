import * as React from 'react';
import './index.less';
import { Ioc } from 'qzx-ioc';
import { DynamicService } from 'src/services/dynamic';
export class DetailPage extends React.Component<any, any>  {
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