import * as React from 'react';
import './index.less'

export function UTabs() {
    const a = [
        {
            title: 'asd1',
            key: 1
        },
        {
            title: 32,
            key: 2
        },
    ]
    return (
        <div className='u-tabs'>
            <ul className="u-tabs-container">
                { a.map(item => {
                    return (
                        <li>{item.title}</li>
                    )
                }) }
            </ul>
        </div>
    )
}