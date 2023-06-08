import React from 'react';
import { IItem } from './App'
import './List.css';

interface IPros {
    list: IItem[];
    addList: (value: IItem) => void
}
function List({ list, addList }: IPros) {
    return <div className='list'>
        {
            list && list.length ? list.map(({ title, price }, index) => {
                return (
                    <div key={index} className='list_item'>
                        <div className='list_item_inner'>
                            <div className='sqare'></div>
                            <div className='detail'>
                                <div className='title'>{title}</div>
                                <div className='price'>{price}</div>
                                <div className='button' onClick={() => addList({ title, price })}>加入购物车</div>
                            </div>
                        </div>
                    </div>
                )
            }) : null
        }
    </div>
}
export default List