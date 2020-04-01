import React, { useState } from 'react';
import { Button } from 'antd';

let a = [
    {
        title: '大家发动机',
        key: 1
    },
    {
        title: '南安市',
        key: 2
    }
]
let index = 111
export function ShopManagement() {
    const [state, setstate] = useState(a)
    const aa = () => {
        let aaa = state
        aaa.push({title: '就是就是' + index, key: index++})
        console.log(aaa)
        setstate([...aaa])
    }
    return (
        <div>
            <Button onClick={() => aa()}>撒大声地</Button>
        </div>
    )
}