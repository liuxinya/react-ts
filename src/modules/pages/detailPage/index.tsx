import * as React from 'react';
import './index.less';
import { dy } from 'src/helper/dynamic.helper';
export class DetailPage extends React.Component<any, any>  {
    constructor(props: any) {
        super(props)
    }
    close() {
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