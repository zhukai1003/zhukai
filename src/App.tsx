import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List'
import Car from './Car'
import Modal from './Modal'
import useModal from "./useModal";
interface IImgNumb {
  img?: string;
  numb?: number;
}
export interface IItem extends IImgNumb {
  title: string;
  price: number;
}
const LIST: IItem[] = [
  {
    title: '苹果',
    price: 10.99
  },
  {
    title: '香蕉',
    price: 20.99
  },
  {
    title: '菠萝广西香蕉新鲜保熟包包包包包包包包包包包包包包包包包包包包包包包包包包包包包包包包包包',
    price: 30.99
  }
].concat(new Array(20).fill({
  title: '苹果',
  price: 10.99
}))
function App() {
  const { isOpen, toggle } = useModal();
  const [list, setList] = useState<IItem[]>(LIST)
  const [curList, setCurList] = useState<IItem[]>([])
  const addList = (value: IItem) => {
    let result: IItem | undefined = curList.find((v) => v.title === value.title)
    if (result && result.numb) {
      result.numb = result.numb + 1
    } else {
      curList.push({ ...value, numb: 1 })
    }
    setCurList([...curList])
  }
  const deleteList = (value: IItem) => {
    let r = curList.filter((v: IItem) => {
      if (v.title === value.title) {
        if (v.numb === 1) {
          return false
        } else {
          v.numb = v.numb as any - 1
          return true
        }
      }
      return true
    })
    setCurList(r)
  }
  useEffect(() => {
    async function getData() {
      try {
        let r: IItem[] = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(LIST)
          }, 1000)
        })
        setList(r)
      } catch { }

    }
    getData()
  }, [])
  return (
    <div className="App">
      <div className='header'>
        <h3>购物天堂</h3>
        <div onClick={toggle} className='shopping_car'>购物车</div>
      </div>
      <List list={list} addList={addList} />
      <Modal isOpen={isOpen} toggle={toggle}>
        <Car list={curList} deleteList={deleteList} />
      </Modal>
    </div>
  );
}

export default App;
