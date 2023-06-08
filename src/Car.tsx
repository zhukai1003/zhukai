import React, { useEffect, useState } from 'react';
import { IItem } from './App'
import './Car.css'
interface IProps {
    list: IItem[];
    deleteList: (value: IItem) => void
}
export default function Car({ list, deleteList }: IProps) {
    let allPrice = list.reduce((pre: any, cur: any) => {
        try {
            return pre + cur.numb * cur.price
        } catch (error) {
            return 0
        }
    }, 0)
    return <div>
        {
            list && list.length ?
                <div>
                    <div>
                        {
                            list.map(({ title, price, numb }: IItem, index) => {
                                return <div className='car_list_item' key={index}>
                                    <div className='car_title'>{title}</div>
                                    <div className='car_price'>{price}*{numb}</div>
                                    <div className='car_button' onClick={() => deleteList({ title, price })}>删除</div>
                                </div>
                            })
                        }
                    </div>
                    <div className='car_shopping' onClick={() => alert(allPrice)}>购买</div>
                </div>
                : <div>暂无</div>
        }
    </div>
}